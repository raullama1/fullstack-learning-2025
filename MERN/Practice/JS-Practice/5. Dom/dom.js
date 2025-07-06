let main = document.querySelector('#main');
let nav = document.querySelector('#nav');
let btn = document.querySelectorAll('.btn');
let blue = document.querySelector('#blue');
let red = document.querySelector('#red');
let green = document.querySelector('#green');
let yellow = document.querySelector('#yellow');
let pink = document.querySelector('#pink');

// addEventListener

blue.addEventListener('click', () => {
    main.style.backgroundColor = 'blue';
    blue.style.color = 'white';
    blue.style.borderColor = 'white';
})

red.addEventListener('click', () => {
    main.style.backgroundColor = 'red';
    red.style.color = 'white';
    red.style.borderColor = 'white';
})

orange.addEventListener('click', () => {
    main.style.backgroundColor = 'Orange';
    orange.style.color = 'white';
    orange.style.borderColor = 'white';
})

yellow.addEventListener('click', () => {
    main.style.backgroundColor = 'yellow';
    yellow.style.color = 'black';
    yellow.style.borderColor = 'black';
})

pink.addEventListener('click', () => {
    main.style.backgroundColor = 'pink';
    pink.style.color = 'white';
    pink.style.borderColor = 'white';
})

