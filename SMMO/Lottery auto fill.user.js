// ==UserScript==
// @name        SMMO - Lottery auto fill as one ticket - simple-mmo.com
// @namespace      https://github.com/oligochrome
// @match       https://web.simple-mmo.com/gamecentre/lottery/*
// @grant       none
// @version     1.0
// @author      Ogliochrome
// @description 10/3/2022, 1:03:31 AM
// ==/UserScript==
var amount = document.getElementsByName("amount")[0]
if(amount !== undefined){
amount.value = "1";
}
