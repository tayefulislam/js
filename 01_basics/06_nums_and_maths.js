// const money = 245.0350;

// console.log(money);

// const balance = new Number(money);

// console.log(balance);
// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toPrecision(5));


// let num = -9007199254740991 ;
// console.log(num.toString());
// console.log(Math.abs(num).toString());

// let num = 2;

// let numArr = (94, 432, 34, 56, 654, 45, 345);
// console.log(Math.sqrt(num));
//
// console.log(Math.random(10000));


// Original Math.random() give value between 0 to 1.
// - It can return 0 value also , so always use add 1 ( randomValue + 1)


console.log(Math.random() * 10);

const min = 1000;
const max = 2000;

for (let i = 0; i < 1000; i++) {

    const makediOne = Math.floor(Math.random() * 10);
    console.log(makediOne)

    const ThreeDi = Math.floor(Math.random() * (max - min + 1));



    console.log(makediOne+ "" +ThreeDi);
    
    
    
}











