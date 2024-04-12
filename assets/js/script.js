'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");

const navbar = document.querySelector("[data-navbar]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navLinks = document.querySelectorAll("[data-nav-link]");

// search toggle
const searchContent = document.getElementById("[data-search-content]");
const searchOpenBtn = document.getElementById("[data-search-open-btn]");
const searchCloseBtn = document.getElementById("[data-search-close-btn]");

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


// search Show
if (searchOpenBtn) {
  searchOpenBtn.addEventListener("click", () => {
    searchContent.classList.add("show-search");

    console.log("search-open")
  })
};

// // search Close
if (searchContent) {
  searchCloseBtn.addEventListener("click", () => {
    searchContent.classList.add("show-search");

    console.log("search-close")

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
