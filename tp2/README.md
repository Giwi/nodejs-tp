# TP 2 : Bonnes pratiques JavaScript

JavaScript est un langage orienté Objet mais peut ressembler à de la
programmation fonctionnelle. Aborder une application JavaScript par une
méthodologie Objet pure n'est pas forcément une bonne approche.

Cependant, reproduire les concepts Objet est une bonne mise en pratique
de la chaîne prototypale ou des closures.

## Création des classes

Créer un fichier `beers.js`

Créer un constructeur pour l'objet `Beer` qui prend en argument un id,
un degré d'alcool, un nom et une description tels que représente la
structure suivante :

```json
{
    "id": 1,
    "alcohol": 8.5,
    "name": "Affligem Tripel",
    "description": "The king of the abbey beers. It is amber-gold and pours with a deep head and original aroma, delivering a complex, full bodied flavour. Pure enjoyment! Secondary fermentation in the bottle."
}
```

Créer un constructeur pour l'objet `MemoryBeers` sans argument mais qui
initialise une liste de bières :

```json
[
    {
        "id": "AffligemTripel",
        "alcohol": 8.5,
        "name": "Affligem Tripel",
        "description": "The king of the abbey beers. It is amber-gold and pours with a deep head and original aroma, delivering a complex, full bodied flavour. Pure enjoyment! Secondary fermentation in the bottle."
    },
    {
        "id": "TrappistesRochefort8",
        "alcohol": 9.2,
        "name": "Rochefort 8",
        "description": "A dry but rich flavoured beer with complex fruity and spicy flavours."
    },
    {
        "id": "ChimayRed",
        "alcohol": 7,
        "name": "Chimay Rouge",
        "description": "This Trappist beer possesses a beautiful coppery colour that makes it particularly attractive. Topped with a creamy head, it gives off a slight fruity apricot smell from the fermentation. The aroma felt in the mouth is a balance confirming the fruit nuances revealed to the sense of smell. This traditional Belgian beer is best savoured at cellar temperature "
    }
];
```

Créer un constructeur pour l'objet `Beers` qui ne fait rien pour le moment.

Associer au prototype de l'objet `Beers` un instance de `MemoryBeers`.

Ajouter la méthode `toString()` dans le prototype de la classe `Beer` retournant
le nom en majuscules, le degré d'alcool et la description.

## Lecture des bières

Nous allons utiliser la fonction `require` de NodeJS qui est indépendante
du langage JavaScript pour charger une liste de bières présente dans le fichier
fourni : `beers.json`

En haut du fichier, ajouter

```javascript
var beersFile = require('./beers.json');
```

Puis dans `MemoryBeers`, itérer avec `forEach` sur la liste des bières pour
instancier chaque objet `Beer`. `beersFile` peut être considéré comme un tableau.

Ajouter une méthode `get` dans `MemoryBeers` prenant en paramètre une fonction
callback et l'appelant en lui passant en paramètre la liste des bières.

Ajouter une méthode `print` dans la classe `Beers` qui afficher toutes les bières
en utilisant `console.log(...)`

Instancier un objet `Beers` et invoquer sa méthode `print`.

Exécuter le script :

```bash
$ node beers.js
```

## Pour aller plus loin

Itérer avec `forEach` sur la liste des bières pour instancier chaque objet
 `Beer`
 
```javascript
this.beers = [];
beersFile.forEach(function(item) {
    this.push(new Beer(item.id, item.alcohol, item.name, item.description));
}, this.beers);
```

Notez le contexte `this` dans la fonction passée en paramètre du forEach faisant
référence à `this.beers` passé en paramètre.

## Ensuite

Allons un peu plus loin avec NodeJS dans le [TP 3](../tp3/)
