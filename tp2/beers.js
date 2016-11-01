var beersFile = require('./beers.json')

function Beer (id, alcohol, name, description) {
  this.id = id
  this.alcohol = alcohol
  this.name = name
  this.description = description
}

Beer.prototype.toString = function () {
  return this.name.toUpperCase() + '\t' + this.alcohol + '\t' + this.description
}

function MemoryBeer () {
  this.beers = []
  beersFile.forEach(function (item) {
    this.push(new Beer(item.id, item.alcohol, item.name, item.description))
  }, this.beers)
  this.get = function (callback) {
    callback(this.beers)
  }
}

function Beers () {
  this.print = function (callback) {
    this.get(function (beers) {
      beers.forEach(function (item) {
        console.log(item.toString())
      })
    })
  }
}

Beers.prototype = new MemoryBeer()

var b = new Beers()
b.print()
