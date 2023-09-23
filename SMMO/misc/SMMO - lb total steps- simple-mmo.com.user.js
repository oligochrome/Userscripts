// ==UserScript==
// @name        SMMO - lb total steps- simple-mmo.com
// @updateURL   https://github.com/oligochrome/scripts/raw/main/SMMO - lb total steps- simple-mmo.com.user.js
// @namespace      https://github.com/oligochrome
// @match       https://web.simple-mmo.com/leaderboards/view/steps/*
// @grant       none
// @version     1.0.0
// @author      Ogliochrome
// @description 5/18/2023, 12:13:39 AM

// ==/UserScript==

var total = 0
let kills = document.getElementsByClassName("px-6 py-4 whitespace-nowrap text-gray-500 text-sm")
for (let index = 0; index < kills.length; index++) {
    let stp = kills[index].innerText.split(' kills')[0].replace(',','')
    total = total + parseInt(stp)
}
console.log(total)