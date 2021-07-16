// eslint-disable-next-line import/extensions
import { DateTime } from './luxon.js';

const listButton = document.querySelector('.list-button');
const formButton = document.querySelector('.form-button');
const contactButton = document.querySelector('.contact-button');
const bookSection = document.querySelector('.book-section');
const formSection = document.querySelector('.add-book');
const contactSection = document.querySelector('.contact-div');
const timezone = document.querySelector('.timezone');

timezone.textContent = DateTime.local().toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);

listButton.addEventListener('click', () => {
  formSection.classList.add('hidden');
  contactSection.classList.add('hidden');
  bookSection.classList.remove('hidden');
});

formButton.addEventListener('click', () => {
  formSection.classList.remove('hidden');
  contactSection.classList.add('hidden');
  bookSection.classList.add('hidden');
});

contactButton.addEventListener('click', () => {
  formSection.classList.add('hidden');
  contactSection.classList.remove('hidden');
  bookSection.classList.add('hidden');
});

function time() {
  timezone.textContent = DateTime.local().toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
  setTimeout(time, 1000);
}

time();
