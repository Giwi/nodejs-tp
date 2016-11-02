#!/usr/bin/env node
require('colors');
var program = require('commander');
var beersFile = require('./beers.json');

program
    .version('0.0.1')
    .option('-l, --list', 'List beers')
    .option('-c, --color', 'Colored display')
    .parse(process.argv);


function Beer(id, alcohol, name, description) {
    this.id = id;
    this.alcohol = alcohol;
    this.name = name;
    this.description = description;
}

Beer.prototype.toString = function () {
    if(program.color) {
        return this.name.toUpperCase().blue + '\t' + this.alcohol.toString().red + '\t' + this.description;
    } else {
        return this.name.toUpperCase() + '\t' + this.alcohol + '\t' + this.description;
    }
};

function MemoryBeer() {
    this.beers = [];
    beersFile.forEach(function (item) {
        this.push(new Beer(item.id, item.alcohol, item.name, item.description))
    }, this.beers);
    this.get = function (callback) {
        callback(this.beers);
    }
}

function Beers() {
    this.print = function () {
        this.get(function (beers) {
            beers.forEach(function (item) {
                console.log(item.toString());
            });
        });
    }
}

Beers.prototype = new MemoryBeer();

var b = new Beers();
if (program.list) {
    b.print();
}