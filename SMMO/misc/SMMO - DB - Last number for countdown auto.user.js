// ==UserScript==
// @name         SMMO - DB - Last number for countdown auto
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://web.simple-mmo.com/discussionboards/view/39404*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=simple-mmo.com
// @grant        none
// ==/UserScript==

var previousNumber = document.querySelector("body > div.h-screen.flex.overflow-hidden.bg-gray-100 > div.flex.flex-col.w-0.flex-1.overflow-hidden.relative > main > div.web-app-container > div.py-6.max-w-6xl.mx-auto.px-4.sm\\:px-6.md\\:px-8 > div:nth-child(5) > div > div > div:nth-child(2) > div > div > div > span > div:nth-child(1)").innerText

var number = parseFloat(previousNumber.replace(',','')) - 1

var textBox = document.querySelector("body > div.h-screen.flex.overflow-hidden.bg-gray-100 > div.flex.flex-col.w-0.flex-1.overflow-hidden.relative > main > div.web-app-container > div.py-6.max-w-6xl.mx-auto.px-4.sm\\:px-6.md\\:px-8 > div:nth-child(5) > div > div > div:nth-child(1) > div > textarea")

let a = `<textarea type="text" wire:model.defer="reply" class="dark:bg-gray-800 dark:text-white shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full text-xs sm:text-sm border-gray-300 rounded-lg" placeholder="Enter your reply here" x-on:keyup="replyBtn=true">`

let b = `</textarea>`

textBox.outerHTML = a + number + b