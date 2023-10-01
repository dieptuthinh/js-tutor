// const button = document.getElementById('button');
// const input = document.getElementById('input');

// const handleClick = () => {
//   input.value = 'Hello World';
// };

// button.addEventListener('click', handleClick)


// const element = document.querySelector('#element');

// const toggleColor = (isEntering) => {
//   element.style.background = isEntering ? 'orange' : 'black';
// };

// const button = document.querySelector('#wrapper button');

// const changeInput = () => {
//   const input = document.querySelector('#inputEl');
//   if(input) {
//     input.value = 'Hello World';
//   }
// };

// button.addEventListener('click', changeInput);

// const input = document.querySelector("input").setAttribute('id', 'inputEl');

// const button = document.getElementById('button');
// button.addEventListener('click', () => {
//   // type in your code here
//   document.querySelector("input").checked = true;

// });

// const button = document.getElementById('button');
// const lname = document.getElementById('lastName');
// const fname = document.getElementById('firstName');
// button.addEventListener('click' , () => {
//   // type in your code here
//   document.getElementById("fullName").value = fname.value + " " + lname.value;
  

// });

const button = document.getElementById('button');
let stopped = false;
 
function move(isReturning) {
 const width = button.parentNode.clientWidth;
 const left = parseInt(button.style.left , 10) || 0;
 if (!stopped) {
    button.style.left = (isReturning ? left - 1 : left + 1) + 'px';
    setTimeout(() => move ((isReturning && left > 0) || left === width - button.clientWidth ), 10);
 };
};
 
move();
 
button.addEventListener('click', () => {
  // type in your code here
  stopped = stopped ? false : true;


});