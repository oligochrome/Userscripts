// ==UserScript==
// @name       SMMO - add to bank - simple-mmo.com
// @namespace      https://github.com/oligochrome
// @match       https://web.simple-mmo.com/inventory/items
// @grant       none
// @version     1.0
// @author      Ogliochrome
// @description 10/4/2022, 5:45:25 AM
/* @require     https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js*/
// ==/UserScript==
document.querySelector("body > script:nth-child(8)").innerHTML = 'function check(box){box.checked=1-box.checked}'