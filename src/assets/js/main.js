import $ from 'jquery';

$(document).ready(function() {
  $('.nav').prepend('<span class="nav-button">☰</span>');

  $( ".nav-button" ).click(function() {
    var navState = $('.nav-list').hasClass('nav-list-open');
    if(navState == true) {navclose();}else{navopen();}
  });
});

function navopen() {
  $('.nav-list').addClass('nav-list-open');

  var intTime = 0;
  $('.nav-list li').each(function(i){
    var _this = this;
    window.setTimeout(function(){$(_this).addClass('nav-list-item-open');}, intTime);
    intTime += 200;
  });
}

function navclose(callback) {
  var intTime = 0;
  $('.nav-list li').each(function(i){
    var _this = this;
    window.setTimeout(function(){$(_this).removeClass('nav-list-item-open');}, intTime);
    intTime += 200;
  });
  $('.nav-list').removeClass('nav-list-open');
}
