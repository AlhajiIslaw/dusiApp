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

menuBtn.addEventListener("click", () =>{

   menu.style.display ="flex"
   closeBtn.style.display = "inline-block";
   menuBtn.style.display ="none"

});

const closeNav = () =>{
   menu.style.display ="none";
   closeBtn.style.display = "none";
   menuBtn.style.display ="inline-block";
}

closeBtn.addEventListener("click", closeNav);


document.addEventListener("click", (e) => {
  const isMenuOpen = menu.style.display === "flex";
  const isClickInsideMenu = menu.contains(e.target);
  const isClickOnButtons = menuBtn.contains(e.target) || closeBtn.contains(e.target);

  if (isMenuOpen && !isClickInsideMenu && !isClickOnButtons) {
    closeNav();
  }
});


