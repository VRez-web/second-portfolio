// Loader
const loader = document.querySelector('.loader');
const main = document.querySelector('.main');

function init() {
  setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.display = 'none';

    main.style.display = 'flex';

    setTimeout(() => (main.style.opacity = 1), 50);
  }, 5500);
}
init();

// Section scroll
$(document).ready(function () {
  $('#pagepiling').pagepiling({
    scrollingSpeed: 1200,
    verticalCentered: false,
    direction: 'vertical',
    easing: 'swing',
    autoScrolling: false,
    navigation: false,
    normalScrollElementTouchThreshold: 10,
    normalScrollElements: '#home,#about,#skills,#portfolio,#contact',
    anchors: ['home', 'about', 'skills', 'portfolio', 'contact'],
    touchSensitivity: 15,
    menu: '.menu__nav'

  });
});

//notification close  
var FirstNotif = document.getElementById("FirstNotif");
var closeFirst = document.getElementsByClassName("close-first")[0];
var SecondNotif = document.getElementById("SecondNotif");
var closeSecond = document.getElementsByClassName("close-second")[0];

closeFirst.onclick = function () {
  FirstNotif.style.display = "none";
}
closeSecond.onclick = function () {
  SecondNotif.style.display = "none";
}

// Modal

var modal = document.getElementById("myModal");
var btn = document.getElementById("modalBtn");
var span = document.getElementsByClassName("modal-close")[0];


btn.onclick = function () {
  modal.style.display = "block";
}


span.onclick = function () {
  modal.style.display = "none";
}


window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// burger 
let navToggle = $("#navToggle");
let nav = $(".menu__nav")
navToggle.on('click', function (event) {
  event.preventDefault();

  nav.toggleClass("show");
});
