// ==UserScript==
// @name         SMMO - Swap accept/deny buttons in guild armoury
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://web.simple-mmo.com/guilds/view/*/armoury-requests*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=simple-mmo.com
// @grant        none
// ==/UserScript==

const button1 = document.querySelectorAll('[x-on\\:click="action=\'accept\'"]');
const button2 = document.querySelectorAll('[x-on\\:click="action=\'deny\'"]');
const parentElement = button1.parentElement;
button1.forEach(myFunction)
function myFunction(item, index, arr) {
  let parentElement = button1[index].parentElement;
    parentElement.insertBefore(button2[index],button1[index])
}