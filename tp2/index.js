console.log('Hello Kitty');

// Les variable et la coercicion

var b1 = true;
var b2 = new Boolean(true);
var i1 = 42;
var i2 = '42';

console.log('b1, b2 -> ', b1, b2);
console.log('b1 == b2 -> ', b1 == b2);
console.log('b1 === b2 -> ', b1 === b2);
console.log('i1 == i2 -> ', i1 == i2);
console.log('i1 === i2 -> ', i1 === i2);

// tableaux

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


// les structures de contrôle

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
            break;
        default :
            console.log('défaut');
    }
}

// allons plus loin

for (var i = 0; i < t4.length; i++) {
    if (t4[i]) {
        for (var j = 0; j < t4[i].length; j++) {
            console.log('t4[' + i + '][' + j + ']=', t4[i][j]);
        }
    }
}

console.log('extrait de t2 ->', t2.splice(1, 2), 'nouveau t2 ->', t2);
t3.unshift(4);
t3.push(5);
console.log('t3 modifié -> ', t3);
console.log('concat', t2.concat(t3));
console.log('join', t3.join('-'));
console.log(t3, 'indexOf 4=', t3.indexOf(4), 'indexOf 3=', t3.indexOf(3));


function hello(name) {
    console.log('hello ' + name);
}
hello('Gilbert');

function hello2(name, firstname) {
    console.log('hello2 ' + firstname + ' ' + name);
}
hello2('Young', 'Angus');
hello2('Slash');
hello2('David', 'Lee', 'Roth');

function capitalize(func, param) {
    func(param.toUpperCase());
}
capitalize(hello, 'Carole');
