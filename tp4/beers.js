#!/usr/bin/env node
require('colors');
var program = require('commander');
var beersFile = require('./beers.json');

/**
 *
 * @param id
 * @param alcohol
 * @param name
 * @param description
 * @constructor
 */
function Beer(id, alcohol, name, description) {
    this.id = id;
    this.alcohol = alcohol;
    this.name = name;
    this.description = description;

    /**
     *
     * @param color
     * @returns {string}
     */
    this.toString = function (color) {
        if (color) {
            return this.name.toUpperCase().blue + '\t' + this.alcohol.toString().red + '\t' + this.description;
        } else {
            return this.name.toUpperCase() + '\t' + this.alcohol + '\t' + this.description;
        }
    }
};

/**
 *
 * @constructor
 */
function MemoryBeer() {
    this.beers = [];
    beersFile.forEach(function (item) {
        this.push(new Beer(item.id, item.alcohol, item.name, item.description))
    }, this.beers);
    this.get = function (callback) {
        callback(this.beers);
    }
}

/**
 *
 * @constructor
 */
function Beers() {
    this.print = function (color) {
        this.get(function (beers) {
            beers.forEach(function (item) {
                console.log(item.toString(color));
            });
        });
    }
}

/**
 *
 * @type {MemoryBeer}
 */
Beers.prototype = new MemoryBeer();

var b = new Beers();

program
    .version('0.0.1')
    .option('-c, --color', 'Colored display');

program.command('list [options]')
    .description('List beers')
    .action(function () {
        var color = program.color || false;
        b.print(color);
    });

program.parse(process.argv);