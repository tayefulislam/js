// const today = new Date();
// console.log(today);
// console.log(today.toDateString());
// console.log(today.toISOString());
// console.log(today.toLocaleTimeString());

// const today = new Date(2005,8,12,0,0,0);

const nowTime = Date.now();

// console.log(today.getTime());
// console.log(nowTime);

// let calTime = nowTime - today.getTime();

// console.log(calTime);
// console.log(nowTime);
// console.log(nowTime/1000);
// console.log(Math.floor(nowTime / 1000));


let currentTime = new Date();
let knownTime = 1730994055 * 1000;
let calTime = currentTime - knownTime;
console.log(currentTime);
console.log(new Date(knownTime));
// new to know about more about timestamp (for like comparing time in quiz app)
// https://www.w3schools.com/jsref/jsref_obj_date.asp



 















