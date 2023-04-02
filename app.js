const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');
const gridContainer = document.querySelector('.grid-container');
const body = document.querySelector('body');

hamburgerMenu.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

gridContainer.addEventListener('click', (event) => {
  if (event.target.tagName === 'IMG' || event.target.tagName === 'P') {
    // länk till detaljsidan baserat på vilken bild/text som klickades på
    window.location.href = 'detaljsida.html';
  }
});

const darkModeToggle = document.createElement('button');
darkModeToggle.textContent = 'Dark Mode';
darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});

header.appendChild(darkModeToggle);
