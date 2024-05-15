import { getElement } from './utils.js'

const toggleNav = getElement('.toggle-nav')
const sidebarOverlay = getElement('.sidebar-overlay')
const closeBtn = getElement('.sidebar-close')

toggleNav.addEventListener('click', () => {
    sidebarOverlay.classList.add('show')
})
closeBtn.addEventListener('click', () => {
    sidebarOverlay.classList.remove('show')
})

  //const toggleNav = document.querySelector('.toggle-nav');
  const navLinks = document.querySelector('.nav-links');

  toggleNav.addEventListener('click', () => {
    navLinks.classList.toggle('show'); // Toggle the 'show' class
  });

