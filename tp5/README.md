# TP 5 : Modulariser

Commençons par structurer les choses. Nous avons un gros fichier `beers.js`
qui porte le traitement de la ligne de commande, le modèle objet et les
fonctions de manipulation.

Commençons par fractionner tout ça :

- un fichier `beer.js` qui décrit la classe *Beer*
- un fichier `beers.js` qui porte les fonctions de manipulation
- un fichier `fileBeer.js` qui porte la classe *FileBeer*
- un fichier `index.js` qui porte le traitement de la ligne de commande

Chacun de ces fichiers *exportera* son constructeur et importera les autres
au besoin. Ceci est typique de NodeJS ou d'ES6.

Par exemple :

    require('colors');
    function Beer(id, alcohol, name, description) {
        this.id = id;
        this.alcohol = alcohol;
        this.name = name;
        this.description = description;

        this.toString = function (color) {
            if (color) {
                return this.name.toUpperCase().blue + '\t' + this.alcohol.toString().red + '\t' + this.description;
            } else {
                return this.name.toUpperCase() + '\t' + this.alcohol + '\t' + this.description;
            }
        };
    }

    exports = module.exports = Beer; // On exporte la classe

Puis dans une autre classe :

    var Beer = require('./beer.js');

L'extension *.js* est optionnelle.

## Tests :

    $ node index list -c
    $ node index add -a 4.5 -n Kronembourg -d "La bière dégueu à pas cher" -i kro
    $ node index list -c
    $ node index del -i kro
    $ node index list -c

## Fini

Pour aller plus loin, vous pouvez redistribuer ce module sur NpmJS.org, mais c'est une autre histoire.