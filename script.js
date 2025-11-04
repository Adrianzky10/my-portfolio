


// TOGGLE NAVIGATION
const hamburgerBtn = document.querySelector('.hamburger-wrapper');
const navMenu = document.querySelector('.nav-menu');

hamburgerBtn.addEventListener('click', (e) => {
    navMenu.classList.toggle('active')
    e.preventDefault()
})

//CLICK SEMBARANG UNTUK CLOSE
document.addEventListener('click', function(e) {
    if (!hamburgerBtn.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
    }
})

//SCROLL UNTUK MENGAKTIFKAN BACKGROUND HEADER
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.scrollY > 10) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});