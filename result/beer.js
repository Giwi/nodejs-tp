require('colors');
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
    };
}

exports = module.exports = Beer;