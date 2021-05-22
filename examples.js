// let buttons = document.getElementsByTagName('button');
// console.log(buttons)

let instructions = document.querySelector('#instructions');
console.log(instructions)

let facebookBut = document.querySelector('.facebook-but');
console.log(facebookBut)


// let buttons = document.querySelectorAll('button');
// console.log(buttons);
//..........................................

//innerText is used to edit html text
instructions.innerText = "Choose a Themthis is sdoiujfmasdl;kje";

//........................................

//innerHTML - allows you to insert html tags
//instructions.innerHTML = '<p> Choose a Theme</p>';

//..........................................

//classList - list of the class names but value the whole list of classes just one value
console.log(facebookBut.classList);

//className - string representation with the html tags
console.log(facebookBut);

//.......................................
//adding a class name to an element
// this will add a class name if the element did not have a class but if they did hvae a class it will replace that previous class
instructions.className = 'new-class';

//proper way to add a class to an element:

facebookBut.classList.add('new-class');

//.......................................
//style - changes the css

// facebookBut.style.color = "green";

//.......................................
//           Events and Event Handler

let total = document.querySelector('.total');

let addtotal = document.querySelector('.clickAdd');
addtotal.addEventListener('click', add);

let totalValue = 1;
function add(){
  total.innerText = totalValue++;
}

let facebookTotal = 1;

facebookBut.addEventListener('click', () => facebookAdd());

function facebookAdd() {
  total.innerText = facebookTotal++
}






let resetZero = document.querySelector('.reset');
resetZero.addEventListener('click', resetTotal);

function resetTotal() {
  total.innerText = 0;
  totalValue = 1;
  facebookTotal = 1;
}

