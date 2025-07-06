/*
const name = "Tenta";
const age = 20;

console.log("My name is " + name + " and I am " + age + " years old");
console.log(`My name is ${name} and I am ${age} years old`);
*/

/*
// default parameter

const myFun = (a, b = 8) => {
    console.log(a + b)
}
myFun(5);
If the value is passed then it will override the default(8)
myFun(5, 6); 
*/

/*
// array destructuring

const myArr = [1, 2, 3, 4, 5];
const [a, b, c] = myArr;
console.log(a, b, c)

// object destructuring

const myObj = {
    namee: "Tenta",
    agee: 12,
};
const {namee, agee} = myObj;
console.log(namee);
*/

/*
// spread and rest operator

const myArra = [1, 2, 3, 4, 5];
const [e, ...f] = myArra;
console.log(e, f);

const myAr = [...myArra];
console.log(myAr)

const myObjj = {
    name: "Tenta",
    age: 12,
    email: "8V8w6@example.com",
    password: "123456",
};

const {password, ...rest} = myObjj;
console.log(myObjjj)
*/

/*
let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]

console.log(arr1)
console.log(arr2)

let arr3 = [...arr1, ...arr2, 7, 8, 9]
console.log(arr3)
*/

// map

const arr = [1, 2, 3, 4, 5]

arr.map((item, index) => {
    console.log(`Item: ${item} Index: ${index}`)
})