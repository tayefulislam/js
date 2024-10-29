// const id = Symbol(234);
// const productId = Symbol(234);
// console.log(productId === productId);

// const bigNumber = 423409234n;
// console.log(bigNumber);
// console.log(typeof bigNumber);

// console.log(9007199254740991n + 1n); // 9007199254740992n
// console.log(9007199254740991n + 2n); // Error: can not convert to number

let donorOne = {
  name: "Kazi Tayeful Islam",
  email: "email@gmail.com",
};

let donorTwo = donorOne;

donorOne.name = "Tushar";

console.log(donorOne);
console.log(donorTwo);
