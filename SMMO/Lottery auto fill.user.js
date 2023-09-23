// ==UserScript==
// @name        SMMO - Lottery auto fill as one ticket - simple-mmo.com
// @namespace      https://github.com/oligochrome
// @match       https://web.simple-mmo.com/gamecentre/lottery/*
// @grant       none
// @version     1.0
// @author      Ogliochrome
// @updateURL   https://github.com/oligochrome/Userscripts/raw/master/SMMO/Lottery%20auto%20fill.user.js
// @description fills each lottery with 1 for quick ticket buying
// ==/UserScript==
var amount = document.getElementsByName("amount")[0]
if(amount !== undefined){
amount.value = "1";
}
