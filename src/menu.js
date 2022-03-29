const mainContentContainer = document.querySelector('#mainContentContainer');
const menuContainer = document.createElement('div');
menuContainer.setAttribute('id', 'menuTab');
menuContainer.setAttribute('class', 'tabContent');
mainContentContainer.appendChild(menuContainer);

const food1 = document.createElement('div');
food1.textContent = 'food One';
menuContainer.appendChild(food1);