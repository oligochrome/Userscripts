// ==UserScript==
// @name        SMMO - Award completes toggle - simple-mmo.com
// @namespace      https://github.com/oligochrome
// @match       https://web.simple-mmo.com/character/awards/progression*
// @require     https://github.com/oligochrome/Userscripts/raw/master/SMMO/Includes/Commonfuncs.user.js
// @grant       none
// @version     1.0
// @author      Ogliochrome
// @description 7/20/2023, 3:11:41 AM
// ==/UserScript==

let items = document.getElementsByClassName("relative rounded-lg shadow-sm bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 mt-2")
var awardtogg = false
function hidedone(){
for (let index = 0; index < items.length - 1; index++) {
   if(items[index].childNodes[5].childNodes[1].childNodes[1].className == "text-gray-800 font-semibold"){}else{items[index].style.display = "none"}
}
    awardtogg = true
}
function showdone(){
for (let index = 0; index < items.length - 1; index++) {
    items[index].style.display = "flex"
}
    awardtogg = false
}
function toggaward() {if (awardtogg === false){hidedone()}else{showdone()}

};
let elem = newbutt('Toggle Completed', 'javascript:;')
elem.onclick = toggaward
document.getElementsByClassName('dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:text-white inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600  dark:text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500')[0].insertAdjacentElement('afterend', elem)
