// Menu toggle
hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function() {
    document.querySelector(".nav-bar").classList.toggle("active");
    console.log("open");
})

navbar_items = document.querySelectorAll(".nav-bar ul li a");
navbar_items.forEach(element => {
  element.addEventListener("click", function() {
    document.querySelector(".nav-bar").classList.remove("active");
  })
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

const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".cookie-btn");

cookieButton.addEventListener("click", () => {
  cookieContainer.classList.remove("active");
  localStorage.setItem("cookieBannerDisplayed", "true")
})

setTimeout( () => {
  if(!localStorage.getItem("cookieBannerDisplayed")) {
    cookieContainer.classList.add("active");
  }
  
}, 2000);
