// ==UserScript==
// @name           SMMO - add another multiselect button at top - - simple-mmo.com
// @updateURL   https://github.com/oligochrome/scripts/raw/main/SMMO - add another multiselect button at top - - simple-mmo.com.user.js
// @namespace      https://github.com/oligochrome
// @match          https://web.simple-mmo.com/inventory/items*
// @grant          none
// @version        1.0
// @author         Ogliochrome
// @license        GNU GPL
// @version        1.0
// @language       en
// @description    15/09/2022, 19:52:50
// ==/UserScript==

var multiButton = document.querySelector("body > div.h-screen.flex.overflow-hidden.bg-gray-100 > div.flex.flex-col.w-0.flex-1.overflow-hidden.relative > main > div.web-app-container > div > div.mt-8 > div.mt-4 > div.sm\\:px-6.lg\\:px-0.lg\\:col-span-10 > div:nth-child(3) > div.text-center.mt-2 > button")
var filterButton = document.querySelector("body > div.h-screen.flex.overflow-hidden.bg-gray-100 > div.flex.flex-col.w-0.flex-1.overflow-hidden.relative > main > div.web-app-container > div > div.mt-8 > form > div.text-center.mt-2 > button.nightwind-prevent.inline-flex.items-center.px-2\\.5.py-1\\.5.border.border-transparent.text-xs.sm\\:text-sm.font-medium.rounded.shadow-sm.text-white.bg-indigo-600.hover\\:bg-indigo-700.focus\\:outline-none.focus\\:ring-2.focus\\:ring-offset-2.focus\\:ring-indigo-500")
var hasRun = false

    var aa = document.querySelectorAll("input[type=checkbox]");
    for (var i = 0; i < aa.length; i++){
        aa[i].addEventListener('change', (event) => {
  if (event.currentTarget.checked) {
   if(multiButton && hasRun === false){
var clone = multiButton.cloneNode(true);
document.querySelector("body > div.h-screen.flex.overflow-hidden.bg-gray-100 > div.flex.flex-col.w-0.flex-1.overflow-hidden.relative > main > div.web-app-container > div > div.mt-8 > div.mt-4 > div.sm\\:px-6.lg\\:px-0.lg\\:col-span-10 > div.block.xl\\:hidden.text-center.mb-2").before(clone);
hasRun = true;
}
}
        }
)
    }
