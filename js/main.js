// Menu toggle
hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function() {
    document.querySelector(".nav-bar").classList.toggle("active");
})
//--------------------------------------------------------

//Menu smooth scrolling
function scroll() {
    var element = document.querySelector("#about-us");

    element.scrollIntoView();
}
//------------------------------------------------------- 

// On scroll animations
const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('animate__animated');
        entry.target.classList.add('animate__zoomIn');
      }
    });
  });
  
const animated_obj = document.querySelectorAll(".card");

animated_obj.forEach((obj) => {
    observer.observe(obj);
})
//-----------------------------------------------------------


