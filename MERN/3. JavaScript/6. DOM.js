// DOM = Document Object Model

// DOM is a programming interface for HTML and XML documents.

let dom = document.getElementById("myBtn")
console.log(dom)

let btn = document.getElementsByClassName("btn")
console.log(btn)

let btns = document.getElementsByTagName("button")
console.log(btns)

let btnsss = document.querySelector(".btn")
console.log(btnsss)

let btnss = document.querySelectorAll(".btn")
console.log(btnss)

dom.addEventListener("click", () => {
    alert("Button Clicked")
})
