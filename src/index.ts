//Different type of variable declaration
let a = "Vivek";

let E:string ="Engineering";
let CTC:number = 50;
let check:boolean;

let m; //any

let Job=<string>"Remote";

let surname:string | number; //Union type

//**************Array****************

//Type 1 of declaration
const arr: number[]=[12,5,47,89,54];
const arr2: string[]=["Vivek", "Panchal"];

//Type 2 of declaration
const arr3:Array<string> =["Javascript", "ReactJs","TypeScript"];
const arr4:Array<number> =new Array(20);
const arr5:Array<string|number> =[26,"Aug"];

arr2[0]="Mr";

//Tupple or Fix sized Array

const arr6:[number,string,boolean] = [26,"Aug",true];


//************Objects in typescript*********

type Obj ={
    height: number;
    weight: number;
    gender?: string; //Optional
}

const obj:Obj={
    height:3434,
    weight: 78,
    gender:"Male"
}

const obj2:Obj={
    height:334,
    weight: 48,
    gender:"Femal"
}

const obj3:Obj={
    height:434,
    weight: 59,
}


//*****************Function***************

const func = (n:number , m:number) => {
    return n*m;
}

type FuncType = (x:number , y:number, z?: number) => number;

//Optional parameter
const multi:FuncType =(a,b,c) =>{
   if(typeof c === "undefined") return a*b;
    return a*b*c;
}

const result1=multi(25,58);

const result2=multi(65,58,78);

//Default parameter
const multi2:FuncType =(a,b,c=25) =>{
    return a*b*c;
}

const result3=multi2(25,47);

const result4=multi2(65,29,38);

//Rest Operator
const funcarr =(...m:number[]) => {
    return m;
}

funcarr(25, 58, 87, 96, 71, 62)

function rohitSharma(n:number):number{
    return 45;
}

//********** Function with Objects *********

/* Bad Practice

const getData =(product: {
    name: string;
    photo: string;
    price:number;
    stock:number;
}): void => {
    console.log(product);
}*/

interface Product {
    name: string;
    photo: string;
    price:number;
    stock:number;
}

type GetDataType = (product:Product) =>void;

const getData:GetDataType = (product)=> {
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
    constructor(
        private height:number,
        public weight:number,
        protected power?:number,
    ){}
}

const vivek = new Player(178,58);

class Player2 extends Player {
    special : boolean;
    constructor(height:number,weight:number,power:number,special:boolean ){
        super(height, weight,power);
        this.special = special;
    }
}

interface ProductType {
    name: string;
    price: number;
    stock: number;
    id: string;
    offer?: boolean;
}

class Product implements ProductType {
    public name: string;
    public price: number;
    public stock: number;
    public id: string =String(Math.random()*10000);

    constructor(name:string, price:number, stock:number){
        this.name=name;
        this.price =price;
        this.stock=stock;

    }
}

/********* Type Assertion **********/


const btn = document.getElementById("btn") as HTMLElement;

const btn = <HTMLElement>document.getElementById("btn");

const btn = <HTMLElement>document.getElementById("btn")!;

btn.onclick;

const img = document.getElementById("myimg") as HTMLImageElement;

const img = document.querySelector("img")!
img.src

const form = document.getElementById("myform") as HTMLFormElement;
const myinput = document.querySelector("form > input") as HTMLInputElement;

form.onsubmit = (e: SubmitEvent) => {
  e.preventDefault();
  const h2 = document.createElement("h2");
  const body = document.querySelector("body")!;
  const value = Number(myinput.value);

  h2.textContent = String(value + 20);
  body.append(h2);
};

/*****Keyof & Index Signature */

interface Person {
    // [key: string]: string;
  name: string;
  email: string;
}

const myobj: Person = {
  name: "Vivek",
  email: "vivek@gmail.com",
};

let key="name";

myobj[key as keyof typeof myobj]

const getName = (): string => {
  return myobj["name"];
};
const getEmail = (): string => {
  return myobj["email"];
};

const getData = (key: keyof Person ): string => {
  return myobj[key];
};

 getData("name");

 /*** Type Utility ***/

 // Partial<Type>
// Required<Type>
// Readonly<Type>
// Record<Keys, Type>
// Pick<Type, Keys>
// Omit<Type, Keys>
// Exclude<Type, ExcludedUnion>
// Extract<Type, Union>
// NonNullable<Type>
// Parameters<Type>
// ConstructorParameters<Type>
// ReturnType<Type>
// InstanceType<Type>

/******* Partial<Type> ************/

type User ={
    name:string,
    email:string
}
type User2 = Partial<User>


/******Required<Type> - opposite of partial****/
type User ={
    name?:string,
    email:string
}
const user: Required<User>={
    name:"vivek",
    email:"vivek@gmail.vom"
}

/*******Readonly<Type> - makes every property readonly *********/
type User ={
    name:string,
    email:string
}
const user: Readonly<User> ={
    name:"vivek",
    email:"vivek@gmail.vom"
}

/***********Record<Keys, Type>*********/

type User = {
  name: string;
  email: string;
};

type User2 = Record<"name"|"email"|"gender",string>

//Example

interface UserInfo {
  age: number;
}

type UserName = "john" | "levi" | "elon" | "jack";

const users: Record<UserName, UserInfo> = {
  john: { age: 34 },
  levi: { age: 39 },
  elon: { age: 24 },
  jack: { age: 32 },
};

/***********Pick<Type, Keys>***************/

interface OrderInfo {
  readonly id: string;
  user: string;
  city: string;
  state: string;
  country: string;
  status: string;
}
type ShippingInfo = Pick<OrderInfo, "city" | "state" | "country">;

/********Omit<Type, Keys>********/

interface ShippingInfo {
  city: string;
  state: string;
  country: string;
}

type Random = Omit<ShippingInfo,"country">

/*****Exclude<Type, ExcludedUnion>****/

type MyUnion = string | number | boolean
type Random = Exclude<MyUnion , boolean>

/*******Extract<Type, Union>*****/
type MyUnion = string | number | boolean
type Random = Extract<MyUnion , boolean>

/*******NonNullable<Type>********/
type MyUnion = string | number | boolean | null | undefined
type Random = NonNullable<MyUnion>
type Random2 = Exclude<MyUnion,undefined| null>

/******Parameters<Type>*******/
const myfunc = (a: number, b: string) => {
  console.log(a + b);
};
type Random = Parameters<typeof myfunc>

/*********ConstructorParameters<Type>*********/
class SampleClass {
  constructor(public s: string, public t: string) {}
}
type Random = ConstructorParameters<typeof SampleClass>

/************ReturnType<Type>********/
const myfunc = (a: number, b: string):string => {
  return a + b;
};
type FuncType = ReturnType< typeof myfunc>

/*******InstanceType<Type>*********/

class SampleClass {
  constructor(public s: string, public t: string) {}
}
type Random = InstanceType<typeof SampleClass>

const user:Random ={
    s:"44",
    t:"ssds"
}

/********* Genrics ************/

type Person2 ={
    name:string,
    age:number
}

const func5 = <CustomType>(n:CustomType):CustomType =>{
    const text:CustomType = n;
    return n;
}

const person: Person2 ={
    name: "vivek",
    age: 21,
}

const ans = func5<Person2>(person);