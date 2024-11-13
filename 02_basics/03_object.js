// Singleton
// Constructor Object  :- Object.create();

// Object Lirerals

const mySym1 = Symbol("KEY 1");
const mySym2 = Symbol("KEY 2");



const userOne = {
    name: "Kazi Tayeful Islam",
    [mySym1]: "",
    [mySym2]: "mysym21",
    

    newAddress: "Dhaka Bangladesh",
    "old address":"Brahmanbaria Dhaka",
    email: "tayegul@gmail.co",
    age: 15,
    isLoggedIn:false,
    lastLogin: ["Sunday May 24", "Monday Jun 2024"],
    
};

// console.log(userOne.email); // value access system 1,

// console.log(userOne["old address"]); // another system [ string value with space in key  ]

// console.log(mySym1 === mySym2);

// Symbol example in real life
// Suppose we have a private key and we dont want to expose it to the outside world,
// Then we can use symbol in the object property name.
// In real life, Symbols are used for creating unique property keys to avoid collisions when using data from external sources.
// more please
 

// Object.freeze() Section

// change the value
userOne.email = "tushar@gmail.oo";

// console.log(userOne.email);

// Object.freeze(userOne);

// userOne.email = "trytocshange@gmail.com";

// console.log(userOne.email);

userOne.objectFun = function () {
    console.log("Hello function from inside object");
}

userOne.objectFunTwo = function () {
    console.log(`Hello Public, This is  ${this.email} `);
    //here we use this keyword to access object property (this.email)
    // if we try to access direct (email) it will give {ReferenceError: email is not defined } 
}

// console.log(userOne);


console.log(userOne.objectFun());
console.log(userOne.objectFunTwo());


