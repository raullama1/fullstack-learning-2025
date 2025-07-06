var arr = [1,2,3, "asdjflskadjf", {
    name: "Raul",
    age: 20,
}];

for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

console.log(arr[4].name)


// array methods

// arr.length - how many values in the array
// arr.push() - add value to the end of the array
// arr.pop() - remove value from the end of the array
// arr.unshift() - add value to the start of the array
// arr.shift() - remove value from the start of the array
// arr.slice() - remove value from the middle of the array
// arr.splice() - remove value from the middle of the array
// arr.indexOf() - find the index of the value in the array