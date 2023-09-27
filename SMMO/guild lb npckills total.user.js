// ==UserScript==
// @name        SMMO - guild lb npckills total- simple-mmo.com
// @namespace      https://github.com/oligochrome
// @match       https://web.simple-mmo.com/leaderboards/view/npc-kills/*
// @grant       none
// @version     1.0
// @author      Ogliochrome
// @description 8/5/2023, 3:22:25 AM
// ==/UserScript==

var total = 0
let kills = document.getElementsByClassName("px-6 py-4 whitespace-nowrap text-gray-500 text-sm")
for (let index = 0; index < kills.length; index++) {
    let stp = kills[index].innerText.split(' kills')[0].replace(',','')
    total = total + parseInt(stp)
}
console.log(total)
