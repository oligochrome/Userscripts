// ==UserScript==
// @name        Neopets - Nerkmid Auto-Player
// @namespace   https://github.com/oligochrome
// @description Plays the nerkmid machine automatically, using random options
// @author 		oligochrome
// @homepage	https://github.com/oligochrome
// @version		1.2
// @language	en
// @include     *neopets.com/vending*
// @grant		none
// ==/UserScript==

(function(){

var loc = document.location.href;

// click button to start
if (loc.match('neopets.com/vending.phtml')){
document.querySelector("input[value='Press me to Continue!']").click();
}

// auto complete the form values on the page with random
// then click to accept
if (loc.match('neopets.com/vending2.phtml')){
  var goin = document.getElementsByName('nerkmid_id')[0];
  if (goin){
    goin.options.selectedIndex = Math.floor((Math.random() * 1) + 1);
  }
    var goin1 = document.getElementsByName('large_button')[0];
  if (goin1){
    goin1.options.selectedIndex = Math.floor((Math.random() * 3) + 1);
  }
    var goin2 = document.getElementsByName('small_button')[0];
  if (goin2){
    goin2.options.selectedIndex = Math.floor((Math.random() * 6) + 1);
  }
    var goin3 = document.getElementsByName('button_presses')[0];
  if (goin3){
    goin3.options.selectedIndex = Math.floor((Math.random() * 5) + 1);
  }
    var goin4 = document.getElementsByName('lever_pulls')[0];
  if (goin4){
    goin4.options.selectedIndex = Math.floor((Math.random() * 6) + 1);
  }
document.querySelector("input[value='GO!!!']").click();
}

// replay after complete
if (loc.match('neopets.com/vending3.phtml')){
document.querySelector("input[value='Play Again!']").click();
}

})();
