# TP 1 : A la découverte de JavaScript

JavaScript est un langage qui, historiquement, s'exécute dans un navigateur.
Cependant, grâce à NodeJS, nous pouvons l'exécuter via la ligne de commande.

commençons par créer un fichier `index.js` :

```javascript
console.log('Hello Kitty');
```

Oui, c'est plus sympa que l'éternel *Hello World*.

Pour l'exécuter :

```bash
$ node index.js
```

## Jouer avec les variables

### Déclaration

Dans le fichier `index.js`, déclarer les variables :

```javascript
var b1 = true;
var b2 = new Boolean(true);
var i1 = 42;
var i2 = '42';
```

### Coercition

Tester la coercition :

```javascript
console.log('b1, b2 -> ', b1, b2);
console.log('b1 == b2 -> ', b1 == b2);
console.log('b1 === b2 -> ', b1 === b2);
console.log('i1 == i2 -> ', i1 == i2);
console.log('i1 === i2 -> ', i1 === i2);
```

### Tableaux

```javascript
var t1 = [];
t1[0] = 'a';
t1[1] = 'b';
t1[3] = 'c';
console.log('t1 -> ', t1);

var t2 = [1, 2, 3, 4];
console.log('t2 -> ', t2);

var t3 = [];
t3.push(1);
t3.push(2);
t3.push(3);
t3.push(4);
console.log('t3 -> ', t3);

var t4 = [];
t4.push(t1);
t4.push(t2);
t4.push(t3);
t4[6] = [7, 8, 'r', true];
console.log('t4 -> ', t4);
```

## Les structures de contrôle

```javascript
if (i1) {
    console.log('i1=', i1);
}

if (b1) {
    console.log('b1=', b1);
}

if (!!b1) {
    console.log('b1=', b1);
}

var b3;
if (b3) {
    console.log('ouch');
} else {
    console.log('b3=', b3);
}

if (!b3) {
    console.log('b3=', b3);
}

if (b3 === undefined) {
    console.log('b3=', b3);
}

for (var i = 0; i < t3.length; i++) {
    console.log('for : i=', i, 't3[i]=', t3[i]);
}

var i = 0;
while (i < t3.length) {
    console.log('while : i=', i, 't3[i]=', t3[i]);
    i++;
}

for (var i = 0; i < t3.length; i++) {
    if (i % 2) {
        console.log('modulo : i=', i, 't3[i]=', t3[i]);
    }
}

var t5 = [7, 8, 'r', true];
for (var i = 0; i < t5.length; i++) {
    console.log('Switch pour', t5[i]);
    switch (t5[i]) {
        case 7:
            console.log('case 7');
        case 10:
            console.log('ne devrait pas s\'afficher');
        case 'r':
            console.log('chaîne de caractères');
            break; // observons son rôle
        default :
            console.log('défaut'); // observons son rôle
    }
}
```

### Pour aller plus loin :

- iterer avec une double boucle *for* le tableau t4.
- extraire une sous partie de t2 avec `splice()` (méthode de la classe Array).
- comparer les comportements des méthodes de la classe Array `unshift()` et `push()` sur t3.
- tester la méthode `concat()` de la classe Array avec t2 et t3.
- tester les méthodes `join()` et `indexOf()` de la classe Array avec t3.

## Les fonctions

Créer une fonction `hello()` qui prend un paramètre et invoquez la :

```javascript
function hello(name) {
    console.log('hello ' + name); // concaténation de chaîne de caractère, au passage
}
hello('Gilbert');
```

Créez une fonction à 2 arguments :

```javascript
function hello2(name, firstname) {
    console.log('hello2 ' + firstname + ' ' + name);
}
hello2('Young', 'Angus');
hello2('Slash');
hello2('David', 'Lee', 'Roth');
```

### Pour aller plus loin :

Créer une autre fonction `capitalize()` qui prend en paramètre une fonction
et une chaîne de caractères et qui appelle la méthode `toUppercase()` de
la classe String sur le second argument et passe le résultat comme argument
du premier. Invoquez la avec la fonction `hello`.

## Ensuite

Bon, on a fait le tour des variables, tableaux, fonctions et de la coercition.
Passons aux choses (à peu près) sérieuses dans le [TP 2](../tp2/)
