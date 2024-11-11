let foods = ["Orange", "Apple", "Mango"];

let newStock = ["Banana", "Papaya", "Guava"];

// console.log(foods + newStock);

// foods.push(newStock);

// console.log(foods[3][2]);

// Array Concat Method
let newFoodsArr = foods.concat(newStock);

// Spread Operator 
let new_Food_Arr = [...foods, ...newStock];


// console.log(...new_Food_Arr);

// Flat Array Method

// const new_Food_Arr_Flat = [423, 56, 52, [456, 573, 4567,[542, 423, ["Tayeful"]]]];

// const new_Food_UseableArray = new_Food_Arr_Flat.flat(Infinity);

// console.log(new_Food_UseableArray);



// const arrCheck = Array.from({name:"Tushar"}); // conceptual - may ask in the interview . why not print in array formate.

// const num = [34, 43, 53, 53];

// const arrCheck = Array.from(num, (x) => x + x);

// console.log(arrCheck);

let value1 = 432432;
let value2 = "Tayeful";
let values3 = "Tushar";

console.log(Array.of(value1, value2, values3));

// more need learn about Array.of, Array.from, Array.isArray();



