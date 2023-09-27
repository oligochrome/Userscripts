// ==UserScript==
// @name        SMMO - Market item in title - simple-mmo.com
// @namespace      https://github.com/oligochrome
// @match       https://web.simple-mmo.com/market/listings*
// @grant       none
// @version     1.0.1
// @author      Ogliochrome
// @description 7/27/2023, 9:53:38 PM
// @updateURL   https://github.com/oligochrome/scripts/raw/main/SMMO - Market item in title.user.js
// ==/UserScript==

var title = document.querySelector('[id^="item-id-"]').innerText
document.title = title + ' | ' + document.title