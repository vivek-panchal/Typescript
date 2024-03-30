"use strict";
//Different type of variable declaration
let a = "Vivek";
let E = "Engineering";
let CTC = 50;
let check;
let m; //any
let Job = "Remote";
let surname; //Union type
//**************Array****************
//Type 1 of declaration
const arr = [12, 5, 47, 89, 54];
const arr2 = ["Vivek", "Panchal"];
//Type 2 of declaration
const arr3 = ["Javascript", "ReactJs", "TypeScript"];
const arr4 = new Array(20);
const arr5 = [26, "Aug"];
arr2[0] = "Mr";
//Tupple or Fix sized Array
const arr6 = [26, "Aug", true];
const obj = {
    height: 3434,
    weight: 78,
    gender: "Male"
};
const obj2 = {
    height: 334,
    weight: 48,
    gender: "Femal"
};
const obj3 = {
    height: 434,
    weight: 59,
};
//*****************Function***************
const func = (n, m) => {
    return n * m;
};
//Optional parameter
const multi = (a, b, c) => {
    if (typeof c === "undefined")
        return a * b;
    return a * b * c;
};
const result1 = multi(25, 58);
const result2 = multi(65, 58, 78);
//Default parameter
const multi2 = (a, b, c = 25) => {
    return a * b * c;
};
const result3 = multi2(25, 47);
const result4 = multi2(65, 29, 38);
//Rest Operator
const funcarr = (...m) => {
    return m;
};
funcarr(25, 58, 87, 96, 71, 62);
function rohitSharma(n) {
    return 45;
}
const getData = (product) => {
    console.log(product);
};
const productOne = {
    name: "MacBook",
    photo: "SamplePhotoURL",
    price: 999999,
    stock: 85,
};
// Classes in typeScript
class Player {
    constructor() {
        this.height = 54;
        this.weight = 78;
    }
}
