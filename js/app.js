const down = document.querySelector('.page-down');

down.addEventListener('click', function() {
   document.getElementById("brand-info-section").scrollIntoView({
      behavior: "smooth"
   });
});

const up = document.querySelector('.top-of-page-arrow');

up.addEventListener('click', function() {
   document.getElementById("header").scrollIntoView({
      behavior: "smooth"
   });
});

// MOBILE MENU OPEN FUNCTION

function toggleMenu(){
   let dropdown = document.getElementsByClassName('mobile-ul-menu')[0];
   dropdown.classList.toggle('mobile-menu-toggle-open');
   dropdown.classList.add('fade-in');
}
