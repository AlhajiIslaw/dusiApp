// change nav style on scroll

window.addEventListener('scroll', () =>{
   const nav = document.querySelector("nav");
   nav.classList.toggle("window-scroll", window.scrollY > 0);


});


// show/hide faq answer

const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
   faq.addEventListener('click', ()=>{
      faq.classList.toggle("open");

      // change icon

      const i = faq.querySelector(".faq__icon i");
      
      if(i.className === "uil uil-plus"){
         i.className = "uil uil-minus";
          i.style.color ="red";
      } else{
          i.className = "uil uil-plus";
          i.style.color ="";

      }

   })
});

// show / hide menu

const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

// Open the menu when the menu button is clicked
menuBtn.addEventListener("click", () => {
    menu.classList.add("open"); // Show menu with sliding animation
    closeBtn.classList.add("open"); // Show close button
    menuBtn.style.display = "none"; // Hide the open menu button
});

// Close the menu when the close button is clicked
const closeNav = () => {
    menu.classList.remove("open"); // Hide menu with sliding animation
    closeBtn.classList.remove("open"); // Hide close button
    menuBtn.style.display = "inline-block"; // Show the open menu button again
};

// Event listener for the close button
closeBtn.addEventListener("click", closeNav);

// Close the menu if a click happens outside of the menu or buttons
document.addEventListener("click", (e) => {
    const isMenuOpen = menu.classList.contains("open");
    const isClickInsideMenu = menu.contains(e.target);
    const isClickOnButtons = menuBtn.contains(e.target) || closeBtn.contains(e.target);

    if (isMenuOpen && !isClickInsideMenu && !isClickOnButtons) {
        closeNav();
    }
});


