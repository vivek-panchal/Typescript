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
