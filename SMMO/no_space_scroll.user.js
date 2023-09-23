// ==UserScript==
// @name       SMMO - no space scroll
// @namespace   https://github.com/oligochrome
// @match       https://web.simple-mmo.com/*
// @grant       none
// @version     1.0
// @author      Oligochrome
// @description Prevents scrolling of page with spacebar
// @run-at document-start
// ==/UserScript==

window.addEventListener('keydown', function(e) {
  if(e.keyCode == 32 && e.target == document.body) {
    e.preventDefault();
  }
});
