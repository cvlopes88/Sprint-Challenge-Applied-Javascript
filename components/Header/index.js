// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-Container component







const headContainer = document.querySelector('.header-container');

headContainer.appendChild(Header());

function Header(obj) {

const headTop = document.createElement('div');
const date1 = document.createElement('span');
const title1 = document.createElement('h1');
const temp1 = document.createElement('span');

headTop.appendChild(date1);
headTop.appendChild(title1);
headTop.appendChild(temp1);

headTop.classList.add('header');
date1.classList.add('date');
temp1.classList.add('temp');


date1.textContent = 'August 09, 2019';
title1.textContent = 'Lambda Times';
temp1.textContent = '98';




return headTop;
}
