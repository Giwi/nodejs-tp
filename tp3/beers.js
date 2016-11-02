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
}

/**
 *
 * @returns {string}
 */
Beer.prototype.toString = function () {
    return this.name.toUpperCase() + '\t' + this.alcohol + '\t' + this.description;
};

/**
 *
 * @constructor
 */
function MemoryBeer() {
    this.beers = [];
    beersFile.forEach(function (item) {
        this.push(new Beer(item.id, item.alcohol, item.name, item.description));
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
    this.print = function () {
        this.get(function (beers) {
            beers.forEach(function (item) {
                console.log(item.toString());
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
b.print();
