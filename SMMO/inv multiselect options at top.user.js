// ==UserScript==
// @name        SMMO - inv multiselect options at top -  simple-mmo.com
// @updateURL   https://github.com/oligochrome/scripts/raw/main/SMMO - inv multiselect options at top -  simple-mmo.com.user.js
// @namespace      https://github.com/oligochrome
// @match       https://web.simple-mmo.com/inventory/items*
// @grant       none
// @version     1.0.0
// @author      Ogliochrome
// @description 2/9/2023, 7:54:52 PM
// ==/UserScript==
let foo = document.body.getElementsByClassName('mt-1 inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs sm:text-sm font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500')[0].parentElement
let fooa = foo.cloneNode(true)
let bar = document.body.getElementsByClassName("block xl:hidden text-center mb-2")[0]
bar.insertAdjacentElement('afterEnd',fooa)
