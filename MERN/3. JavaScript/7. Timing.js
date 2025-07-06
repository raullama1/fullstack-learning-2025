// Set Interval = repeatedly calls a function. Definition: interval = time between calls
// Set Timeout = calls a function once. Definition: timeout = time before function is called

// Interval:

let a = 1;
const interval = setInterval(() => {
    a++;
    console.log(a)
}, 1000)

// Timeout:

setTimeout(() => {
    console.log("Hello")
}, 1000)