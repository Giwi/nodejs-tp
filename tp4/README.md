# TP 4 : Structurer

On s'initier à la programmation asynchrone. Ce type de programmation est
omniprésente avec NodeJS et lors des appels Ajax. Dans notre cas, nous allons
la mettre en oeuvre avec le module [fs](https://nodejs.org/api/fs.html)
de l'API NodeJS.  Cette API est native, donc pas besoin de passer par NPM.

Remplaçons *MemoryBeer* par *FileBeer*.

## Chargement du fichier de bières

Revenons sur le chargement du fichier `beers.json` :

- supprimer la ligne : `var beersFile = require('./beers.json');`
- charger le module *fs* : `var fs = require('fs');`
- créer le constructeur *FileBeer* avec un attribut `this.path = './beers.json';`
- toujours dans ce constructeur, définir une méthode `this.read = function(callback) {...};` qui utilise `fs.readFile(<path>, <encoding>, <callback>);` pour lire notre fichier json.
- implémenter la méthode get pour offir la même API que *MemoryBeer*

```js
fs.readFile(this.path, 'utf8', function (err, data) {
        if (!err) {
            var beers = [];
            // JSON.parse est natif en JavaScript
            JSON.parse(data).forEach(function (item) {
                this.push(new Beer(item.id, item.alcohol, item.name, item.description))
            }, beers); // Attention au contexte ici
            this.beers = beers; // on repose dans un attribut de classe
            callback(this.beers);
        } else {
            console.error(err); // affichage d'une erreur au passage
        }
});
```

Pour `fs.readFile(<path>, <encoding>, <callback(err, data)>)`, par convention,
tous les appels assynchrones de nodeJS (faites de même dans vos devs) on
un paramètre *callback* qui prendra 2 arguments : une erreur éventuelle
et les données.

## Ajout du CRUD

CRUD??? **C**reate, **R**ead, **U**pdate, **D**elete.

Maintenant que nous avons la main sur le fichier, nous allons ajouter les
opérations d'ajout et de suppression.

- Ajouter une méthode `FileBeer.write(<Beer[]>, <callback>)` qui utilise :
`fs.writeFile(<path>, <contenu>, <encoding>, <callback>)` (utiliser `JSON.stringify()`).
- Ajouter une méthode `Beers.add(id, alcohol, name, description, callback)`
- Réaliser une commande *Add* pour ajouter une bière au tableau puis écrire le tout
dans le fichier.

```bash
$ node beers --help

    Usage: beers [options] [command]


    Commands:

      list [options]  List beers
      add [options]   Add  beer

    Options:

      -h, --help                       output usage information
      -V, --version                    output the version number
      -c, --color                      Colored display
      -n, --name [name]                Beer's name
      -a, --alcohol [alcohol]          Beer's alcohol
      -i, --id [id]                    Beer's id
      -d, --description [description]  Beer's description
```

et tester avec :

```bash
$ node beers add -a 4.5 -n Kronembourg -d "La bière dégueu à pas cher" -i kro
```

## Pour aller plus loin

Implémenter la commande *delete* qui prend en paramètre un id.

## La suite

La suite se passe dans le [TP 5](../tp5).
