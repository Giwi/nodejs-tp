var fs = require('fs');
var Beer = require('./beer');
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
        fs.writeFile(this.path, JSON.stringify(beers), 'utf-8', function (err, data) {
            if (!err) {
                callback(beers);
            } else {
                console.error(err);
            }
        });
    };
}

exports = module.exports = FileBeer;