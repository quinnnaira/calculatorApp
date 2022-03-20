'use strict';

let display = document.getElementById('display');
let dot = document.getElementById('dot');
let ac = document.getElementById('acc');
let del = document.getElementById('del');
let equals = document.getElementById('equal');
let buttonNumber = Array.from(document.getElementsByClassName('number'));
let buttonOperator = Array.from(document.getElementsByClassName('operator'));

[...buttonNumber, ...buttonOperator, dot].forEach((button) => {
  button.addEventListener('click', (e) => {
    display.innerText += e.target.innerText;
  });
});

ac.addEventListener('click', (e) => {
  display.innerText = '';
});

del.addEventListener('click', (e) => {
  display.innerText = display.innerText.slice(0, -1);
});

equals.addEventListener('click' , (e) => {
  display.innerText = eval(display.innerText);
});
console.log(equals)


// _________________OR_______________

// buttonNumber.forEach((button) => {
//   button.addEventListener('click', (e) => {
//     display.innerText += e.target.innerText;
//   });
// });

// buttonOperator.forEach((button) => {
//   button.addEventListener('click', (e) => {
//     display.innerText += e.target.innerText;
//   });
// });

// dot.addEventListener('click', (e) => {
//     display.innerText += e.target.innerText;
//   });






