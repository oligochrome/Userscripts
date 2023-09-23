// ==UserScript==
// @name        SMMO - reverse quest order - simple-mmo.com
// @namespace   https://github.com/oligochrome
// @match       https://web.simple-mmo.com/quests/viewall*
// @require     https://github.com/oligochrome/Userscripts/raw/master/SMMO/Includes/Commonfuncs.user.js
// @updateURL   https://github.com/oligochrome/Userscripts/raw/master/SMMO/Quests Sort Order Reverse.user.js
// @grant       none
// @version     1.0.0
// @author      Ogliochrome
// @description 3/5/2023, 10:21:48 PM
// ==/UserScript==

let elem = newbutt('Reverse Order', 'javascript:;')
elem.onclick = function() {
    var qlist = document.querySelector("#change_league > div > ul > ul")
    var i = qlist.childNodes.length;
    while (i--)
        qlist.appendChild(qlist.childNodes[i]);
};
document.getElementsByClassName('px-4 mt-4 bg-white rounded-lg py-4 ring-1 ring-black ring-opacity-5 shadow-sm dark:bg-gray-950 dark:border dark:border-gray-800')[0].insertAdjacentElement('afterend', elem)
