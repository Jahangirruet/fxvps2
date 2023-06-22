window.onclick = function (e) {
  if (e.target.matches(".mobile-overlay")) {
    let overlay = document.querySelector(".mobile-overlay");
    let navbar = document.querySelector("#navbar");
    if (overlay.classList.contains("block")) {
      overlay.classList.add("hidden");
    }
    if (navbar.classList.contains("active")) {
      navbar.classList.remove("active");
    }
  }
};

// mobile nav
let burger = document.querySelector("#burger");
let close = document.querySelector("#close");
let navbar = document.querySelector("#navbar");
let overlay = document.querySelector(".mobile-overlay");
let cross = document.querySelector("#cross");
burger.addEventListener("click", () => {
  if (overlay.classList.contains("hidden")) {
    overlay.classList.remove("hidden");
    overlay.classList.add("block");
  } else {
    overlay.classList.add("hidden");
    overlay.classList.remove("block");
  }
  if (navbar.classList.contains("active")) {
    navbar.classList.remove("active");
  } else {
    navbar.classList.add("active");
  }
});
close.addEventListener("click", () => {
   let overlay = document.querySelector(".mobile-overlay");
   let navbar = document.querySelector("#navbar");
   if (overlay.classList.contains("block")) {
     overlay.classList.add("hidden");
   }
   if (navbar.classList.contains("active")) {
     navbar.classList.remove("active");
   }
});


let openModal = document.querySelectorAll('.open-modal')
if (openModal.length > 0) {
  let closeModal = document.querySelector(".close-modal");
  let modal = document.querySelector("#modal");

  openModal.forEach(function (el) {
    el.addEventListener("click", () => {
      modal.classList.add("modal-active");
    });
  });

  closeModal.addEventListener("click", () => {
    modal.classList.remove("modal-active");
  });

}



const swiper = new Swiper(".banner", {
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


// start coding for accordion 
var headers = document.querySelectorAll(".accordion-btn");
if (headers.length > 1) {
  var parent = headers[0].parentElement;
  var article = headers[0].nextElementSibling;
  parent.classList.add("open");
  article.style.maxHeight = (article.scrollHeight + 30) + "px";
  for (var i = 0; i < headers.length; i++) {
    headers[i].addEventListener("click", openAccordion);
  }
}
//Use this as the callback if you would like no more than one dropdown to be open
function openAccordion(e) {
  for (var i = 0; i < headers.length; i++) {
    var parent = headers[i].parentElement;
    var article = headers[i].nextElementSibling;

    if (this === headers[i] && !parent.classList.contains("open")) {
      parent.classList.add("open");
      article.style.maxHeight = article.scrollHeight + "px";
    } else {
      parent.classList.remove("open");
      article.style.maxHeight = "0px";
    }
  }
}

function stickyElement(e) {
  
  var header = document.querySelector('.header'); 
  var headerHeight = getComputedStyle(header).height.split('px')[0];
  var navbar = document.querySelector('.navigation');  
  var scrollValue = window.scrollY + 59;
  
  if (scrollValue > headerHeight ){
    navbar.classList.add('is-fixed'); 
    
  } else if (scrollValue < headerHeight){
    navbar.classList.remove('is-fixed'); 
    
  }

}

window.addEventListener('scroll', stickyElement);