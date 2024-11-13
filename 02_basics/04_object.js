// const obj = new Object(); // singleton object
// const obj = {}; // non - single ton object


// object.assign


const obj1 = { a: "A", b: "b" };
const obj2 = { b: "B", c: "C" };

// marge object with object.assign method
const tarObject = Object.assign({}, obj1, obj2);

// merge object with spread operator
const sprObject = { ...obj1, ...obj2 };

// console.log(tarObject);
// console.log(sprObject);

// Result :

/*

{ a: 'A', b: 'B', c: 'C' }
{ a: 'A', b: 'B', c: 'C' }

*/


const bloodDonor = {};

bloodDonor.age = 23;
bloodDonor.area = "54/A DHAKA";
bloodDonor.phone = "01835434534";

console.log(bloodDonor)

const bloodDonorDataKeys = Object.keys(bloodDonor);
// console.log(bloodDonorDataKeys);


const bloodDonorDataValues = Object.values(bloodDonor);
// console.log(bloodDonorDataValues);


// for both key and value use

// console.log(Object.entries(bloodDonor));

/*

console.log(Object.entries(Note : if use any array on that m it will ad automatic key one the value . respectivly 0 , 1, 3 ,.... and so on (N)));

*/

// CHECK PROPERTY AVAILABLE or NOT

console.log(bloodDonor.hasOwnProperty("age2"));

