'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");

const navbar = document.querySelector("[data-navbar]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function (elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", () => {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  }
}

navToggleEvent(navElemArr);
navToggleEvent(navLinks);

// search toggle
const searchContent = document.querySelector("[data-search-content]");
const searchOpenBtn = document.querySelector("[data-search-open-btn]");
const searchCloseBtn = document.querySelector("[data-search-close-btn]");

// search Show
if (searchOpenBtn) {
  searchOpenBtn.addEventListener("click", () => {
    searchContent.classList.add("active");
  })
};

// // search Close
if (searchCloseBtn) {
  searchCloseBtn.addEventListener("click", () => {
    searchContent.classList.remove("active");
  })
}
/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", () => {

  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});

// SCROLL REVEAL ANIMATION
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400
})

sr.reveal(`.hero-title, .hero-text,.tour-search, .btn-group,.popular,.package,.gallery,.cta,.footer`);
