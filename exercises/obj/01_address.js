
function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

function showObject(obj) {
  for (let [key, value] of Object.entries(obj)) {
    console.log(`${key}:${value}`);
  }
}

const address1 = new Address('rua domingues cruz', 'Hortolândia', '19524800');

showObject(address1);
