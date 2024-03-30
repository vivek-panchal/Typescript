//Different type of variable declaration
let a = "Vivek";

let E:string ="Engineering";
let CTC:number = 50;
let check:boolean;

let m; //any

let Job=<string>"Remote";

let surname:string | number; //Union type

//Array 

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