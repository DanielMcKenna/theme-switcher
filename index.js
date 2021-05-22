let count = 0;
let countDisplay = document.querySelector('#total-clicks')

function incrementCount () {
  countDisplay.innerText = ++count;
}

function decrementCount () {
  countDisplay.innerText = --count;
}

function resetCount () {
  count = 0;
  countDisplay.innerText = count;
}

function switchTheme(theme){
  document.querySelector('body').className = theme;
  document.querySelector('main').className = theme;

  const buttons = document.querySelectorAll('button');
  console.log(buttons)

  buttons.forEach(button => button.className = theme);
}

let incrementBtn = document.querySelector('#increment-btn');

incrementBtn.addEventListener('click', incrementCount);

let decrementBtn = document.querySelector('#decrement-btn');

decrementBtn.addEventListener('click', decrementCount)

let resetBtn = document.querySelector('#reset-btn');

resetBtn.addEventListener('click', resetCount)

document.getElementById('instructions').innerText = "Choose a theme:";

