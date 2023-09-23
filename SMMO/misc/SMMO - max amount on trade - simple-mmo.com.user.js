// ==UserScript==
// @name       SMMO - max amount on trade - simple-mmo.com
// @updateURL   https://github.com/oligochrome/scripts/raw/main/SMMO - max amount on trade - simple-mmo.com.user.js
// @namespace      https://github.com/oligochrome
// @match       https://web.simple-mmo.com/trades/view/*
// @grant       none
// @version     1.0.0
// @author      Ogliochrome
// @description 2/14/2023, 4:11:58 PM

// ==/UserScript==
if(document.querySelector("#bank-input")){


let amt = parseInt(document.body.getElementsByClassName("text-sm text-gray-400")[1].innerText.split('You have ')[1].split(' of this item')[0])
document.querySelector("#bank-input").value = amt
  }