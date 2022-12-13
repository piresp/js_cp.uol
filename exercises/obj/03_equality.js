
function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

function areEqual(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

function areSame(obj1, obj2) {
  return obj1 === obj2;
}

let address1 = new Address('a', 'b', 'c');
let address2 = new Address('a', 'b', 'c');

areEqual(address1, address2);
areSame(address1, address2);
