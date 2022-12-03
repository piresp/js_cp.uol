# js_cp.uol

### Basics

- [Variables](#1)
- [Constants](#2)
- [Primitives](#3)
- [Typeof](#4)
- [Objects](#5)
- [Array](#6)

<a name="1"></a>

#### Variables

Declaring a variable:  
```js
let name = 'Gabriel';
console.log(name)
```

You also can declare like this:
```js
let name = 'Gabriel', lastname = 'pereira';
```


<a name="2"></a>

#### Constants

Declaring a constant:  
```js
const rate = 5;
console.log(rate);
```


<a name="3"></a>

#### Primitives

```js
let name = 'Gabriel';
let age = 23;
let isAproved = true;
let firstName = undefined;
let selectColor = null;
```


<a name="4"></a>

#### Typeof

```js
let name = 'Gabriel';
let age = 23;
let isAproved = true;
let firstName = undefined;
let selectColor = null; // object

console.log(typeof name);
```


<a name="5"></a>

#### Objects

Declaring object:
```js
let person = {
    name: 'Mosh',
    age: 30
};
```

Accessing an object value:
```js
person.name = 'Gabriel';
```

Dynamic object access value:
```js
let selection = 'name';
person[selection] = 'Pires';

console.log(person.name);
```


<a name="6"></a>

#### Array

Declaring array:
```js
let selectedColors = ['red', 'blue']
selectedColors[2] = 'green';

console.log(selectedColors);
console.log(selectedColors.lenght);
```

<a name="7"></a>

#### Functions

```js
function greet() {
    console.log('Hello World!');
}

function dynGreet(name, lastName) {
    console.log('Hello' + name + ' ' + lastName);
}

greet();
dynGreet('Ronaldo', 'Nazario');
```
