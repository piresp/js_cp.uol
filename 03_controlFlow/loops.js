
// For
```js
for (let i = 1; i <= 5; i++) {
    console.log('Hello World', i);
}
```

// While
```js
let i = 0;

while (i <= 5) {
    if (i % 2 !== 0) console.log(i);
    i++;
}
```

// Do While
```js
let i = 0;
do {
    if (i % 2 !== 0) console.log(i);
    i++;
} while (i <= 5);
```

// Infinite loops
```js
let i = 0;
do {
    if (i % 2 !== 0) console.log(i);
    i++;
} while (i <= 5);
```

// For in
```js
const person = {
    name: 'Gabriel',
    age: 23
};

for (let key in person)
    console.log(key, person[key]);
```

//For of
```js
const colors = ['red'. 'green', 'blue'];

for (let color of colors)
    console.log(color);
```

//Break and Continue
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
