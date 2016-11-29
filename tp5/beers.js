#!/usr/bin/env node
require('colors');
var program = require('commander');
var fs = require('fs');

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
}

/**
 *
 * @constructor
 */
function FileBeer() {
    this.path = './beers.json';

    this.beers = [];
    /**
     *
     * @param callback
     */
    this.read = function (callback) {
        fs.readFile(this.path, 'utf8', function (err, data) {
            if (!err) {
                JSON.parse(data).forEach(function (item) {
                    this.push(new Beer(item.id, item.alcohol, item.name, item.description))
                }, this.beers);
                callback(this.beers);
            } else {
                console.error(err);
            }
        });
    };

    /**
     *
     * @param callback
     */
    this.get = function (callback) {
        if(this.beers.length === 0) {
            this.read(callback);
        } else {
            callback(this.beers);
        }
    };

    /**
     *
     * @param beers
     * @param callback
     */
    this.write = function (beers, callback) {
        fs.writeFile(this.path, JSON.stringify(beers), 'utf-8', function (err) {
            if (!err) {
                callback(beers);
            } else {
                console.error(err);
            }
        });
    };
}

/**
 *
 * @constructor
 */
function Beers() {
    /**
     *
     * @param color
     */
    this.print = function (color) {
        this.get(function (beers) {
            beers.forEach(function (item) {
                console.log(item.toString(color));
            });
        });
    };

    /**
     *
     * @param id
     * @param alcohol
     * @param name
     * @param description
     * @param callback
     */
    this.add = function (id, alcohol, name, description, callback) {
        this.get(function (beers) {
            beers.push(new Beer(id, alcohol, name, description, callback));
            this.write(beers, callback);
        }.bind(this));
    };

    /**
     *
     * @param id
     * @param callback
     */
    this.del = function (id, callback) {
        this.read(function (beers) {
            var newBeers = [];
            for (var i = 0; i < beers.length; i++) {
                if (beers[i].id !== id) {
                    newBeers.push(beers[i]);
                }
            }
            if (newBeers.length === beers.length) {
                console.error(id, 'not found'.red);
            } else {
                this.write(newBeers, callback);
            }
        }.bind(this));
    };
}

/**
 *
 * @type {FileBeer}
 */
Beers.prototype = new FileBeer();

var b = new Beers();

program
    .version('0.0.1')
    .option('-c, --color', 'Colored display')
    .option('-n, --name [name]', 'Beer\'s name')
    .option('-a, --alcohol [alcohol]', 'Beer\'s alcohol')
    .option('-i, --id [id]', 'Beer\'s id')
    .option('-d, --description [description]', 'Beer\'s description');

program.command('list [options]')
    .description('List beers')
    .action(function () {
        var color = program.color || false;
        b.print(color);
    });

program.command('add [options]')
    .description('Add  beer')
    .action(function () {
        var name = program.name || '',
            alcohol = program.alcohol || 0,
            id = program.id || '',
            description = program.description || '';
        b.add(id, alcohol, name, description, function (data) {
            console.log('Beer added\n'.green + data[data.length - 1]);
        });
    });

program.command('del [options]')
    .description('Delete  beer')
    .action(function () {
        if (!program.id) {
            console.error('missing id'.red);
            return;
        }
        b.del(program.id, function (data) {
            console.log('Beer deleted\n'.green, program.id);
        });
    });

program.parse(process.argv);