// ==UserScript==
// @name        SMMO - count tradables - simple-mmo.com
// @namespace   github.com/ogliochrome
// @match       https://web.simple-mmo.com/inventory/storage?item_name=%5C%28tradable%5C%29&min_level=&max_level=*
// @grant       none
// @version     1.0
// @author      ogliochrome
// @description counts the number of tradables in your storage
// @updateURL   https://github.com/oligochrome/Userscripts/raw/master/SMMO/count%20tradables.user.js
// ==/UserScript==
var total = 0;
let x = document.body.getElementsByClassName('inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-bold bg-gray-800 text-gray-100 absolute bottom-0 right-0 bg-opacity-70	 -mb-2 -mr-4')
for (let index = 0; index < x.length; index++) {
   total = total + parseInt(x[index].innerText.split('x\n')[1])
}
document.querySelector("#draglinks").childNodes[2].insertAdjacentHTML('afterEnd','<li>'+total+'</li>')