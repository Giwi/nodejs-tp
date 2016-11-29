var Beer = require('./beer');
var FileBeer = require('./fileBeer');
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
        this.get(function (beers) {
            var newBeers = [];
            beers.forEach(function(b) {
                if (b.id !== id) {
                    this.push(b);
                }
            }, newBeers);
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

exports = module.exports = Beers;