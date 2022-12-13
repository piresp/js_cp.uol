
// factory func
function createAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode
  };
}

// constructor func
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
const address2 = createAddress('rua eustaquio jenuino', 'Euracio', '46846400');

showObject(address1);
showObject(address2);
