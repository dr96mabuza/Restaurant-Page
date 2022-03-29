const mainContentContainer = document.querySelector('#mainContentContainer');
const contactsContainer = document.createElement('div');
contactsContainer.setAttribute('id', 'contactTab');
contactsContainer.setAttribute('class', 'tabContent');
mainContentContainer.appendChild(contactsContainer);


const contactMananger = document.createElement('div');
contactMananger.setAttribute('class', 'contact-Mananger');
contactsContainer.appendChild(contactMananger);

const nameMananger = document.createElement('div');
nameMananger.textContent = 'Mananger: Sifiso Mabuza';
contactMananger.appendChild(nameMananger);

const manangerContactNumber = document.createElement('div');
manangerContactNumber.textContent = 'Contact: 011 545 6692';
contactMananger.appendChild(manangerContactNumber);

const callCenter = document.createElement('div');
callCenter.setAttribute('class', 'callCenter');
contactsContainer.appendChild(callCenter);

const callCenterName = document.createElement('div');
callCenterName.textContent = 'Rigional call center';
callCenter.appendChild(callCenterName);

const callCenterContacts = document.createElement('div');
callCenterContacts.textContent = 'Contact: 031 698 7412';
callCenter.appendChild(callCenterContacts);