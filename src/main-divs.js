const content = document.querySelector('#content');
const header = document.createElement('div');
header.setAttribute('id', 'header');
content.appendChild(header);

const home = document.createElement('button');
home.textContent = 'Home';
home.setAttribute('class', 'home');
header.appendChild(home);

const menu = document.createElement('button');
menu.textContent = 'Menu';
menu.setAttribute('class', 'menu');
header.appendChild(menu);

const contact = document.createElement('button');
contact.textContent = 'Contact';
contact.setAttribute('class', 'contact');
header.appendChild(contact);

const main = document.createElement('div');
main.setAttribute('id', 'main');
content.appendChild(main);

const mainContentContainer = document.createElement('div');
mainContentContainer.setAttribute('id', 'mainContentContainer');
main.appendChild(mainContentContainer);

const footer = document.createElement('div');
footer.setAttribute('id', 'footer');
footer.textContent = 'Footer';
content.appendChild(footer);