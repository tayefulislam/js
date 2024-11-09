// const arr = [1, 2, 3, 4, 5, 6, "HASAN", "Tushar", {
//     name: 'kita',
//     age: 20
// }];

// const arr2 = new Array(34, 456, 643, '23423', 4234, { name: 'kita', age:343});


// console.log(arr2);
// arr2.push(23);

// console.log(arr2);

// console.log(arr2.includes(643));

// console.log(typeof arr2);

// const newArr2 = arr2.join();


// console.log(newArr2);


// Slice And Splice Section
// Question 1 : What is the diffrent between slice and splice.

// slice - Do copy of an array . Do not delete element from main array.

// Splice - delete element from main array and return the delete element.


const mainArry = [0, 1, 2,3, 4, 5, 6, 7, 8, 9];

console.log("A / Main " + mainArry);

const na1 = mainArry.slice(1, 3);

console.log("B / Slice " + na1);
console.log("C / Main after Slice " + mainArry);

console.log("// Splice Section //")

const na2 = mainArry.splice(1, 3);

console.log("D / Splice " + na2);

console.log("E / After Splice "+mainArry);













