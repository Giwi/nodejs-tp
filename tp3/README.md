# TP 3 : Découvrir NodeJS

Ok, on s'amuse bien, mais NodeJS apporte beaucoup de librairies. Nous allons
donc enrichir notre code pour afficher des logs en couleur et nous utiliserons
la librairie [commander.js](https://www.npmjs.com/package/commander) pour transformer
notre programme en véritable programme shell.

## Transformer notre programme en module NodeJS

Nous n'entrerons pas dans le détail de NodeJS et sa gestion de module,
mais nous pouvons simplement l'utiliser (au risque de vouer un culte au cargo).

Commençons par créer un fichier `package.json` pour décrire le projet et y
gérer nos dépendances. Laissons [NPM](https://www.npmjs.com/) le faire à notre
place (répondre quand même à ses questions ;) ) :

    $ npm init

## Ajouter la couleur des logs

Oui, je sais, les paillettes s'imposent en 2016. Revettons à nos logs un
habit de lumière. Nous utiliserons la librairie [colors](https://www.npmjs.com/package/colors).

Laisson le soin à NPM de gérer cette dépendance pour nous :

    $ npm install colors --save

Le fichier `package.json` a été modifié pour inclure cette dépendance externe.

Dans le fichier `beers.js`, importer cette dépendance avec `require` :

    require('colors');

Cette librairie étendant la classe *String* inutile de l'affecter à une variable.

a pratir de [sa documentation](https://github.com/Marak/colors.js) afficher
le nom de la bière en bleu et le degré d'alcool en rouge.

## Commander.js

La librairie [commander.js](https://www.npmjs.com/package/commander) permet
de manipuler le script par des paramètres passés à la ligne de commande.

- Installer la librairie.
- A l'aide de [la documentation](https://github.com/tj/commander.js) utiliser
commander pour passer des paramètres

Cette commande doit fonctionner :

    $ node beers.js --help

        Usage: beers [options]

        Options:

          -h, --help     output usage information
          -V, --version  output the version number
          -l, --list     List beers

- Modifier `beers.js` pour que la commande `$ node beers.js -l` affiche
la liste des bières.
- Ajouter une option *colors* pour afficher ou nom la liste en couleur
: `$ node beers.js -l -c`

Ajouter le *shebang* à `beers.js` en tête de fichier :

    #!/usr/bin/env node
    require('colors');
    var program = require('commander');
    var beersFile = require('./beers.json');
    [...]

et exécuter :

    $ node beers -l -c

Plus besoin de préciser l'extension.

## La suite

La suite se passe dans le [TP 4](../tp4).