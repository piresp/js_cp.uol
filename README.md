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

### 3 Control Flow

- [3.1 If Else](#3.1)
- [3.2 Switch Case](#3.2)
- [3.3 Loops](#3.3)

### 4 Objects

- [4.1 Basics](#4.1)
- [4.2 Factory Functions](#4.2)
- [4.3 Constructor Functions](#4.3)
- [4.4 Dynamic Nature of Objects](#4.4)
- [4.5 Value vs References](#4.5)
- [4.6 Enumerating Properties of an Object](#4.6)
- [4.7 Cloning an Object](#4.7)

### 5 Arrays  

- [5.1 Adding Elements](#5.1)
- [5.2 Removing Elements](#5.2)
- [5.3 Finding Elements (Primitives)](#5.3)
- [5.4 Finding Elements (Objects)](#5.4)
- [5.5 Filtering](#5.5)
- [5.6 Mapping](#5.6)
- [5.7 Reducing (Cart Shop)](#5.7)
- [5.8 Emptying](#5.8)
- [5.9 Combining and Slicing](#5.9)
- [5.10 Joining](#5.10)
- [5.11 Sorting](#5.11)
- [5.12 Iterating](#5.12)
- [5.13 Testing](#5.13)

### 6 Functions

- [6.1 Declarations vs Expressions](#6.1)
- [6.2 Arguments](#6.2)

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


### 3 Control Flow

<a name="3.1"></a>

#### 3.1 If Else

```js
let hour = 10;

if (hour >= 6 && hour < 12)
    console.log('Good Morning');
else if (hour >= 12 && hour < 18)
    console.log('Good Afternoon');
else
    console.log('Good Evening');
```


<a name="3.2"></a>

#### 3.2 Switch Case

```js
let role = 'guest';

switch (role) {
    case 'guest':
        console.log('Guest User');
        break;
    
    case 'moderator':
        console.log('Moderator User');
        break;
    
    default:
        console.log('Unknow User');
}
```


<a name="3.3"></a>

#### 3.3 Loops

For
```js
for (let i = 1; i <= 5; i++) {
    console.log('Hello World', i);
}
```

While
```js
let i = 0;

while (i <= 5) {
    if (i % 2 !== 0) console.log(i);
    i++;
}
```

Do While
```js
let i = 0;
do {
    if (i % 2 !== 0) console.log(i);
    i++;
} while (i <= 5);
```

For in
```js
const person = {
    name: 'Gabriel',
    age: 23
};

for (let key in person)
    console.log(key, person[key]);
```

For of
```js
const colors = ['red'. 'green', 'blue'];

for (let color of colors)
    console.log(color);
```

Break and Continue
```js
let i = 0;

while(i <= 10) {
    if (i === 5) break;
    if (i % 2 === 0) {
        i++;
        continue;
    }

    console.log(i);
    i++;
}
```


### 4 Objects

<a name="4.1"></a>

#### 4.1 Basics
```js
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: funcion() {
        console.log('draw');
    }
};

circle.draw();
```

<a name="4.2"></a>

#### 4.2 Factory Functions

```js
function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw');
        }
    };
}

const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);
```

<a name="4.3"></a>

#### 4.3 Constructor Functions

Create an object whith a function.

```js
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circle = new Clicle(1);
```

<a name="4.4"></a>

#### 4.4 Dynamic Nature of Objects

We can delete methods from objects with 'delete'
```js
const circle = {
    radius: 1
};

circle.color = 'yellow';
circle.draw = function() {}

delete circle.color;
delete circle.draw;

console.log(circle);
```

<a name="4.5"></a>

#### 4.5 Value vs References

**Primitives** are copied by their **value**  
**Objects** are copied by their **reference**  

**Value Types** [ Number, String, Boolean, Symbol, undefined, null ]  
**Reference Types** [ Object, Function, Array ]

<a name="4.6"></a>

#### 4.6 Enumerating Properties of an Object

```js
const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

for (let key in circle)
    console.log(key, circle[key]);

for (let key of Object.keys(circle))
    console.log(key);

for (let entry of Object.entries(circle))
    console.log(entry);

function showObject(obj) {
  for (let [key, value] of Object.entries(obj)) {
    console.log(`${key}:${value}`);
  }
}

showObject(circle);
```

<a name="4.7"></a>

#### 4.7 Cloning an Object

Cloning Object  
```js
const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

const another = { ...circle };
```

Old way  
```js
const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

const another = Object.assign({}, circle);
```

### 5 Arrays

<a name="5.1"></a>

#### 5.1 Adding Elements

```js
const array = [2, 3, 4];
```

To the **End**
```js
array.push(5, 6);
console.log(array) // [2, 3, 4, 5, 6]
```

from the **Beginning**
```js
array.unshift(1, 2);
console.log(array) // [1, 2, 2, 3, 4]
```

to the **Middle**
```js
// 1st parameter is the index do you want to input, 2nd are how many elements do you wanna delete, 3rd ... the elements you wanna insert
array.splice(2, 0, 'a', 'b');
console.log(array) // [2, 3, 'a', 'b', 4]
```

<a name="5.2"></a>

#### 5.2 Removing Elements

<a name="5.2"></a>

in the **End**
```js
array.pop();
```

in the **Beginning**
```js
array.shift();
```

in the **Middle**
```js
// 1st parameter is the index do you want to input, 2nd are how many elements do you wanna delete, 3rd ... the elements you wanna insert
array.splice(2, 1);
```

<a name="5.3"></a>

#### 5.3 Finding Elements (Primitives)

```js
const array = [1, 2, 3, 4, 5, 1]
```

if parameter exists, return (true or false)
```js
console.log(array.includes(1)); // true
```

first parameter index position
```js
console.log(array.indexOf(1)); // 0
```

start serch by a index
```js 
console.log(array.indexOf(1, 2)); // 5
```

last parameter index position
```js
console.log(array.lastIndexOf(1)); // 5
```

<a name="5.4"></a>

#### 5.4 Finding Elements (Objects)

```js
const courses = [
    { id: 1, name: 'a'},
    { id: 2, name: 'b'},
]
```

grab the first object that matchs with find()
```js
const course = courses.find(course => course.name === 'a');
console.log(course); // { id: 1, name: 'a' }
```

and now its index
```js
const course = courses.findIndex(course => course.name === 'a');
console.log(course); // 0
```

<a name="5.5"></a>

#### 5.5 Filtering Arrays 

```js
const numbers= [1, -1, 2, 3];
```

```js
const filtered = numbers.filter(n => n >= 0);
console.log(filtered); // [1, 2, 3]
```

<a name="5.6"></a>

#### 5.6 Mapping Arrays

```js
const numbers= [1, -1, 2, 3];
```

```js
const filtered = numbers.filter(n => n >= 0);

const items = filtered.map(n => {
    const obj = { value: n };
    return obj;
});

console.log(items); // [{ value: 1 }, { value: 2 }, { value: 3 }]
```

refatoring the code
```js
const filtered = numbers.filter(n => n >= 0);
const items = filtered.map(n => ({ value: n }));

console.log(items); // [{ value: 1 }, { value: 2 }, { value: 3 }]
```

refatoring even more
```js
const items = numbers.filter(n => n >= 0).map(n => ({ value: n }));

console.log(items); // [{ value: 1 }, { value: 2 }, { value: 3 }]
```

chaining
```js
const items = numbers
    .filter(n => n >= 0)
    .map(n => ({ value: n }))
    .filter(obj => obj.value > 1) // still obj
    .map(obj => obj.value); // now as numbers

console.log(items); // [2, 3]
```

<a name="5.7"></a>

#### 5.7 Reducing Array (Cart Shop)

```js
const numbers= [1, -1, 2, 3];
```

```js
let sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(sum); // 5
```

refatoring code
```js
const sum = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue
);

console.log(sum); // 5
```

<a name="5.8"></a>

#### 5.8 Emptying an Array

```js
const numbers = [1, -1, 2, 3];
```

1st solution
```js
numbers = [];
```

2nd solution
```js
numbers.lenght = 0;
```

<a name="5.9"></a>

#### 5.9 Combining and Slicing

```js
const first = [1, 2, 3];
const second = [4, 5, 6];
```

concat
```js
// const combined = first.concat(second);
const combined = [...first, ...second]
console.log(combined); // [1, 2, 3, 4, 5, 6]
```

slice
```js
const slice = combined.slice(2, 4); // start after index 2 and stop before index 4
console.log(slice); // [3, 4]
```

copy
```js
const copy = [...first];
console.log(copy); // [1, 2, 3]
```

<a name="5.10"></a>

#### 5.10 Joining

```js
const numbers = [1, 2, 3];
```

```js
const joined = numbers.join(',');
console.log(joined); // 1,2,3
```

spliting
```js
const message = 'This is my message';
const parts = message.split(' ');
console.log(parts); // [This, is, my, message]

const combined = parts.join('-');
console.log(combined); // This-is-my-message
```

<a name="5.11"></a>

#### 5.11 Sorting

```js
const numbers = [2, 3, 1];
```

```js
numbers.sort();
console.log(numbers); // [1, 2, 3]
```

reverse order
```js
numbers.reverse();
console.log(numbers); // [3, 2, 1]
```

sorting Object
```js
const courses = [
    { id: 1, name: 'Node.js' },
    { id: 2, name: 'javascript' }
];

courses.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    return nameA < nameB ? -1 : 1;
    return 0;
});

console.log(courses); // [{ id: 2, name: javascript }, { id: 1, name: Node.js }]
```

<a name="5.12"></a>

#### 5.12 Iterating

```js
const numbers = [1, 2, 3];
```

```js
for (let number of numbers)
    console.log(numbers) // 1/n   2/n   3
```

```js
numbers.forEach((number, index) => console.log(`${index}: ${number}`)) // 0: 1    1: 2    2: 3
```

<a name="5.13"></a>

#### 5.13 Testing

```js
const numbers = [1, -1, 2, 3];
```

at least one positive
```js
const atLeastOnePositive = numbers.some(value => value >= 0)
console.log(atLeastOnePositive) // true
```

all positives
```js
const allPositives = numbers.every(value => value >= 0)
console.log(allPositives) // false
```


### Functions

<a name="6.1"></a>

#### 6.1 Declarations vs Expressions

Function Declaration
```js
function walk() {
    console.log('walk');
}
```

Anonymous Function Expression
```js
let run = function () {
    console.log('run')
};

let move = run;
run();
move();
```

Named Function Expression
```js
let run = function run() {
    console.log('run')
};
```

<a name="6.2"></a>

#### 6.2 Arguments

```js
function sum() {
    let total = 0;
    for (let value of arguments)
        total += value;
    return total;
}

console.log (sum(1, 2, 3, 4, 5, 10)) // 25
```

<a name="6.3"></a>

#### 6.3 Rest Operator (...args)

The rest Operator grab all the entries and return a array of elements
```js
function sum(...args) {
    return args.reduce((a, b) => a + b);
}

console.log (sum(1, 2, 3, 4, 5, 10)) // 25
```

Calculating discount of a cart shop
```js
function sum(discount, ...prices) {
    const total = prices.reduce((a, b) => a + b);
    return total * (1 - discount);
}

console.log (sum(0.1, 20, 30)) // 45
```

<a name="6.4"></a>

#### 6.4 Default Parameters

```js
function interest(principal, rate = 3.5, years = 5) {
    return principal * rate / 100 * years;
}

console.log (interest(10000)) // 1750
```

<a name="6.4"></a>

#### 6.4 Getters and Setters

```js
const person = {
    firstName: 'Gabriel',
    lastName: 'Pires',
    get fullName() {
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

person.fullName = 'John Smith';

console.log(person);
```
