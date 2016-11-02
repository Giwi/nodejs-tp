var fs = require('fs');
var Beer = require('./beer');
/**
 *
 * @constructor
 */
function FileBeer() {
    this.path = './beers.json';

    /**
     *
     * @param callback
     */
    this.read = function (callback) {
        fs.readFile(this.path, 'utf8', function (err, data) {
            if (!err) {
                var beers = [];
                JSON.parse(data).forEach(function (item) {
                    this.push(new Beer(item.id, item.alcohol, item.name, item.description))
                }, beers);
                callback(beers);
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
        this.read(callback);
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