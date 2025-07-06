// Prime = only divisible by 1 and itself.

// Composite = divisible by other numbers too.

let num = 10;
var isPrimeNumber = true;

for (let i = 2; i < num; i++) {
    if (num % i ==  0) {
        isPrimeNumber = false;
        break;
    }
}
if (isPrimeNumber) {
    console.log("Prime Number")
} else {
    console.log("Composite Number")
}

