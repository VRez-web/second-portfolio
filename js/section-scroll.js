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
  
// burger 
let navToggle = $("#navToggle");
let nav = $(".menu__nav")
navToggle.on('click', function (event) {
  event.preventDefault();

  nav.toggleClass("show");
});


// mail send
$("form").submit(function() { //Change
  var th = $(this);
  $.ajax({
    type: "POST",
    url: "mail.php", //Change
    data: th.serialize()
  }).done(function() {
    alert("Thank you!");
    setTimeout(function() {
      // Done Functions
      th.trigger("reset");
    }, 1000);
  });
  return false;
});
