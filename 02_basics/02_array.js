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

const new_Food_Arr_Flat = [423, 56, 52, [456, 573, 4567,[542, 423, ["Tayeful"]]]];

const new_Food_UseableArray = new_Food_Arr_Flat.flat(Infinity);

console.log(new_Food_UseableArray);
