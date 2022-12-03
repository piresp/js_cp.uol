# js_cp.uol

### 1 Basics

- [1.1 Variables](#1)
- [1.2 Constants](#2)
- [1.3 Primitives](#3)
- [1.4 Typeof](#4)
- [1.5 Objects](#5)
- [1.6 Array](#6)

<a name="1"></a>

#### 1.1 Variables

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

#### 1.2 Constants

Declaring a constant:  
```js
const rate = 5;
console.log(rate);
```


<a name="3"></a>

#### 1.3 Primitives

```js
let name = 'Gabriel';
let age = 23;
let isAproved = true;
let firstName = undefined;
let selectColor = null;
```


<a name="4"></a>

#### 1.4 Typeof

```js
let name = 'Gabriel';
let age = 23;
let isAproved = true;
let firstName = undefined;
let selectColor = null; // object

console.log(typeof name);
```


<a name="5"></a>

#### 1.5 Objects

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

#### 1.6 Array

Declaring array:
```js
let selectedColors = ['red', 'blue']
selectedColors[2] = 'green';

console.log(selectedColors);
console.log(selectedColors.lenght);
```

<a name="7"></a>

#### 1.7 Functions

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
