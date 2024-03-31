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
/*const productOne: Product = {
    name: "MacBook",
    photo: "SamplePhotoURL",
    price:999999,
    stock:85,
}*/
// Classes in typeScript
/*class Player {
    height =54;
    weight = 78;

    constructor(height:number, weight:number){
        this.height=height;
        this.weight=weight;
    }
}*/
class Player {
    constructor(height, weight, power) {
        this.height = height;
        this.weight = weight;
        this.power = power;
    }
}
const vivek = new Player(178, 58);
class Player2 extends Player {
    constructor(height, weight, power, special) {
        super(height, weight, power);
        this.special = special;
    }
}
class Product {
    constructor(name, price, stock) {
        this.id = String(Math.random() * 10000);
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
}
/********* Type Assertion **********/
const btn = document.getElementById("btn");
const btn = document.getElementById("btn");
const btn = document.getElementById("btn");
btn.onclick;
const img = document.getElementById("myimg");
const img = document.querySelector("img");
img.src;
const form = document.getElementById("myform");
const myinput = document.querySelector("form > input");
form.onsubmit = (e) => {
    e.preventDefault();
    const h2 = document.createElement("h2");
    const body = document.querySelector("body");
    const value = Number(myinput.value);
    h2.textContent = String(value + 20);
    body.append(h2);
};
const myobj = {
    name: "Vivek",
    email: "vivek@gmail.com",
};
let key = "name";
myobj[key];
const getName = () => {
    return myobj["name"];
};
const getEmail = () => {
    return myobj["email"];
};
const getData = (key) => {
    return myobj[key];
};
getData("name");
const user = {
    name: "vivek",
    email: "vivek@gmail.vom"
};
const user = {
    name: "vivek",
    email: "vivek@gmail.vom"
};
const users = {
    john: { age: 34 },
    levi: { age: 39 },
    elon: { age: 24 },
    jack: { age: 32 },
};
/******Parameters<Type>*******/
const myfunc = (a, b) => {
    console.log(a + b);
};
/*********ConstructorParameters<Type>*********/
class SampleClass {
    constructor(s, t) {
        this.s = s;
        this.t = t;
    }
}
/************ReturnType<Type>********/
const myfunc = (a, b) => {
    return a + b;
};
/*******InstanceType<Type>*********/
class SampleClass {
    constructor(s, t) {
        this.s = s;
        this.t = t;
    }
}
const user = {
    s: "44",
    t: "ssds"
};
const func5 = (n) => {
    const text = n;
    return n;
};
const person = {
    name: "vivek",
    age: 21,
};
const ans = func5(person);
