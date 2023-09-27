// ==UserScript==
// @name        smmo - colliseum dead player hider - simple-mmo.com
// @updateURL   https://github.com/oligochrome/scripts/raw/main/smmo - colliseum dead player hider - simple-mmo.com.user.js
// @namespace      https://github.com/oligochrome
// @match       https://web.simple-mmo.com/battle/colosseum
// @grant       none
// @version     1.0.0
// @author      Ogliochrome
// @description 10/21/2022, 10:23:46 PM

// ==/UserScript==

var tabs = document.querySelector("body > div.h-screen.flex.overflow-hidden.bg-gray-100 > div.flex.flex-col.w-0.flex-1.overflow-hidden.relative > main > div.web-app-container > div > div.grid.grid-cols-1.lg\\:grid-cols-8.space-y-4.lg\\:space-y-0.lg\\:gap-4.mt-4 > div.col-span-6 > div.px-4.sm\\:px-6.lg\\:px-8 > div > table > tbody")
var tabsamnt = tabs.childElementCount * 2
for (let index = 1; index < tabsamnt; index++) {
    if(tabs.childNodes[index].innerHTML.includes('/img/icons/one/icon230.png') === true){tabs.childNodes[index].style.display = 'none'}
    index++
}