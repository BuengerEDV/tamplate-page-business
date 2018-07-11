import $ from 'jquery';

$(document).ready(function() {
  $('html').addClass('js'); // Check for javascript
  $('.nav').prepend('<span class="nav-button">☰</span>');

  $( "#menu_btn" ).click(function() {
    navState = $('#nav').hasClass('nav_open');
    if(navState == true) {navclose();}else{navopen();}
  });
});
