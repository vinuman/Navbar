const navBar = document.querySelector('.nav-header');
const hamBar = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.links');

hamBar.addEventListener('click', displayNavBar);

function displayNavBar(){
   navLinks.classList.toggle('show-links');
}