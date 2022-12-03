
let name = 'Gabriel';
let age = 23;
let person = {
    name,
    age
}

person.name = 'João';

person['name'] = 'Maria';

console.log(person);
console.log(person.name);
console.log(typeof person);


let selection = 'name';
person[selection] = 'Marie';

console.log(person.name);
