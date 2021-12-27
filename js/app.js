const down = document.querySelector('.page-down');

down.addEventListener('click', function() {
   document.getElementById("brand-info-section").scrollIntoView({
      behavior: "smooth"
   });
});
