// Data Types

/*

Type	Example	Real-life Meaning
String	"Raul"	Text
Number	19, 5.5	Numbers
Boolean	true, false	Yes/No
Null	null	Empty value
Undefined	let x;	Not given a value
Object	{name: "Raul"}	Group of info
Array	[1, 2, 3]	List of values

let isStudent = true;        // Boolean
let milkPrice = 45.5;        // Number
let fruits = ["apple", "banana", "mango"];  // Array
let person = { name: "Raul", age: 19 };     // Object

*/


// Operators: Operators are symbols like +, -, * that do work.

/*

Arithmetic: +, -, *, /, %

Assignment: =, +=, -=

Comparison: ==, ===, !=, <, >, <=, >=

Logical: &&, ||, !

==============================================================

// A. Arithmetic Operators (Math Operators)

| Symbol | Name           | Meaning / What it does            | Example (`a = 10`, `b = 3`) |
| ------ | -------------- | --------------------------------- | --------------------------- |
| `+`    | Addition       | Adds two numbers                  | `a + b` = `13`              |
| `-`    | Subtraction    | Subtracts one number from another | `a - b` = `7`               |
| `*`    | Multiplication | Multiplies two numbers            | `a * b` = `30`              |
| `/`    | Division       | Divides one number by another     | `a / b` = `3.33`            |
| `%`    | Modulus        | Remainder after division          | `a % b` = `1`               |
| `**`   | Exponentiation | Power (a to the power of b)       | `a ** b` = `1000`           |
| `++`   | Increment      | Adds 1 to the number              | `a++` becomes `11`          |
| `--`   | Decrement      | Subtracts 1 from the number       | `b--` becomes `2`           |

==============================================================

// B. Assignment Operators

| Symbol | Name                | Meaning / What it does | Example (`let x = 5`) |
| ------ | ------------------- | ---------------------- | --------------------- |
| `=`    | Assignment          | Assigns a value        | `x = 5`               |
| `+=`   | Add and assign      | `x = x + y`            | `x += 2` → `x = 7`    |
| `-=`   | Subtract and assign | `x = x - y`            | `x -= 1` → `x = 4`    |
| `*=`   | Multiply and assign | `x = x * y`            | `x *= 3` → `x = 15`   |
| `/=`   | Divide and assign   | `x = x / y`            | `x /= 5` → `x = 1`    |
| `%=`   | Modulus and assign  | `x = x % y`            | `x %= 3` → `x = 2`    |

==============================================================

C. Comparison Operators

Used to compare two values and return true or false.

| Symbol | Name             | Meaning / What it does          | Example (`a = 10`, `b = "10"`) |
| ------ | ---------------- | ------------------------------- | ------------------------------ |
| `==`   | Equal to         | Compares values only            | `a == b` → `true`              |
| `===`  | Strict Equal     | Compares value **and** type     | `a === b` → `false`            |
| `!=`   | Not equal        | True if values are not equal    | `a != b` → `false`             |
| `!==`  | Strict not equal | True if value or type not equal | `a !== b` → `true`             |
| `>`    | Greater than     | True if left is greater         | `a > 5` → `true`               |
| `<`    | Less than        | True if left is smaller         | `a < 20` → `true`              |
| `>=`   | Greater or equal | True if greater or equal        | `a >= 10` → `true`             |
| `<=`   | Less or equal    | True if less or equal           | `a <= 10` → `true`             |

==============================================================

// D. Logical Operators

Used to combine conditions (booleans: true or false).

| Symbol | Name             | Meaning / What it does                | Example                        |
| ------ | ---------------- | ------------------------------------- | ------------------------------ |
| `&&`   | And        | True if both sides are true                 | true && true → true            |
|   `    |            | `                                           | Or                             |
|  `!`   | Not        | Flip the value (true → false, false → true) | !true → false                  |

===============================================================

E. Other Useful Operators

| Symbol   | Name             | Meaning / Use                     | Example                   |
| -------- | ---------------- | --------------------------------- | ------------------------- |
| `typeof` | Type Checker     | Tells the data type of a variable | `typeof 10` → `"number"`  |
| `? :`    | Ternary Operator | Shortcut for if-else              | `a > b ? "Big" : "Small"` |

===============================================================

let age = 18
console.log(age >= 18? "Adult" : "Minor") // Adult

let num = 10; 
console.log (num % 2 === 0); // True (even number)
 
let a = 5;
a += 3;
console.log(a); // 8

*/

// types that makes variable - var, let, const

// Old way
var name = "Tenta";

// Modern way
let age = 20; // can be changed later
const country = "Nepal"; // constant, cannot change

// var a = 2;
// let b = 3;
// // var c = a + b;
// var c = b / a;

// console.log(c);
// console.log("The sum of a and b is: " + c);

/*
let a = 5;

if (a % 2 === 0) {
    console.log("even number");
} else {
    console.log("odd number");
}
console.log(a % 2 === 0)
*/

// let b = 5;

// if (b % 2 === 2) {
//     console.log("prime number");
// } else {
//     console.log("composite number");
// }
// console.log(b % 2 === 2)