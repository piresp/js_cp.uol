# js_cp.uol

### 1 Basics

- [1.1 Variables](#1.1)
- [1.2 Constants](#1.2)
- [1.3 Primitives](#1.3)
- [1.4 Typeof](#1.4)
- [1.5 Objects](#1.5)
- [1.6 Array](#1.6)

### 2 Operators

- [2.1 Arithmetic](#2.1)
- [2.2 Assignment Operators](#2.2)
- [2.3 Comparison Operators](#2.3)
- [2.4 Ternary Operators](#2.4)
- [2.5 Logical Operators](#2.5)


### 1 Basics

<a name="1.1"></a>

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


<a name="1.2"></a>

#### 1.2 Constants

Declaring a constant:  
```js
const rate = 5;
console.log(rate);
```


<a name="1.3"></a>

#### 1.3 Primitives

```js
let name = 'Gabriel';
let age = 23;
let isAproved = true;
let firstName = undefined;
let selectColor = null;
```


<a name="1.4"></a>

#### 1.4 Typeof

```js
let name = 'Gabriel';
let age = 23;
let isAproved = true;
let firstName = undefined;
let selectColor = null; // object

console.log(typeof name);
```


<a name="1.5"></a>

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


<a name="1.6"></a>

#### 1.6 Array

Declaring array:
```js
let selectedColors = ['red', 'blue']
selectedColors[2] = 'green';

console.log(selectedColors);
console.log(selectedColors.lenght);
```

<a name="1.7"></a>

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


### 2 Operators

<a name="2.1"></a>

#### 2.1 Arithmetic

```js
let x = 10;
let y = 3;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);

console.log(x++);
console.log(x--);
```


<a name="2.2"></a>

#### 2.2 Assignment Operators

```js
let x = 10;

x = x + 5;
x += 5;

x = x * 3;
x *=3;
```


<a name="2.3"></a>

#### 2.3 Comparison Operators

```js
let x = 1;

console.log(x > 0);
console.log(x >= 1);
console.log(x < 1);
console.log(x <= 1);

console.log(x === 1);
console.log('1' === 1);
console.log(x !== 1);

console.log(1 == 1);
console.log('1' == '1');
console.log(true == 1);
```


<a name="2.4"></a>

#### 2.4 Ternary Operators

```js
let points = 90;
let type = points > 100 ? 'gold' : 'silver';

console.log(type);
```


<a name="2.5"></a>

#### 2.5 Logical Operators

```js
|| // or
&& // and
```
