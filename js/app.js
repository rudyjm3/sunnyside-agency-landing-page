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
