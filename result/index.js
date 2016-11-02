#!/usr/bin/env node
require('colors');
var program = require('commander');
var Beers = require('./beers');

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