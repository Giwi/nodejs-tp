## Structurer

Commençons par structurer les choses. Nous avons un gros fichier `beers.js`
qui porte le traitement de la ligne de commande, le modèle objet et les
fonctions de manipulation.

Commençons par fractionner tout ça :

- un fichier `beer.js` qui décrit la classe *Beer*
- un fichier `beers.js` qui porte les fonctions de manipulation
- un fichier `memoryBeer.js` qui porte la classe *MemoryBeer*
- un fichier `index.js` qui porte le traitement de la ligne de commande