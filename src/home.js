const mainContentContainer = document.querySelector('#mainContentContainer');
const homeContainer = document.createElement('div');
homeContainer.setAttribute('id', 'homeTab');
homeContainer.setAttribute('class', 'tabContent');
mainContentContainer.appendChild(homeContainer);

const siteIntroduction = document.createElement('div');
siteIntroduction.textContent = ' Since we`re all set up to write our code in multiple files, let`s write this initial page-load function inside of its own module and then import and call it inside of index.js.';
homeContainer.appendChild(siteIntroduction);
