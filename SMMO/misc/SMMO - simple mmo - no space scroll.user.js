// ==UserScript==
// @name       SMMO -  simple mmo - no space scroll
// @namespace  smmoscroll
// @include       https://web.simple-mmo.com/*
// @grant       none
// @version     1.0
// @author      -
// @description 26/10/2020, 20:16:55
// @run-at document-start
// ==/UserScript==

window.addEventListener('keydown', function(e) {
  if(e.keyCode == 32 && e.target == document.body) {
    e.preventDefault();
  }
});