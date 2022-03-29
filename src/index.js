import './main-divs';
import './style-reset.css';
import './style.css';
import './contact';
import './home';
import './menu';

const homeTab = document.querySelector('.home');
const menuTab = document.querySelector('.menu');
const contactTab = document.querySelector('.contact');

const homeContainer = document.querySelector('#homeTab');
const menuContainer = document.querySelector('#menuTab');
const contactsContainer = document.querySelector('#contactTab');

homeTab.addEventListener('click', () => {
    homeContainer.style.display = 'block';
    menuContainer.style.display = 'none';
    contactsContainer.style.display = 'none';
});

menuTab.addEventListener('click', () => {
    homeContainer.style.display = 'none';
    menuContainer.style.display = 'block';
    contactsContainer.style.display = 'none';
});

contactTab.addEventListener('click', () => {
    homeContainer.style.display = 'none';
    menuContainer.style.display = 'none';
    contactsContainer.style.display = 'block';
});