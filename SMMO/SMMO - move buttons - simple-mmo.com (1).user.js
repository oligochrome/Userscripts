// ==UserScript==
// @name        SMMO - move buttons - simple-mmo.com
// @updateURL   https://github.com/oligochrome/scripts/raw/main/SMMO - move buttons - simple-mmo.com.user.js
// @namespace      https://github.com/oligochrome
// @match       https://web.simple-mmo.com/user/view/*
// @grant       none
// @version     1.0.0
// @author      Ogliochrome
// @description 3/6/2023, 5:17:50 AM

// ==/UserScript==
let nav = document.createElement('div')
nav.className = "topnav"
nav.id = "myTopnav"
nav.innerHTML = document.querySelector("body > div.h-screen.flex.overflow-hidden.bg-gray-100 > div.flex.flex-col.w-0.flex-1.overflow-hidden.relative > main > div.web-app-container > div.py-6.max-w-6xl.mx-auto.px-4.sm\\:px-6.md\\:px-8 > div:nth-child(2) > div.max-w-5xl.mx-auto.px-4.sm\\:px-6.lg\\:px-8 > div.-mt-12.sm\\:-mt-16.sm\\:flex.sm\\:items-end.sm\\:space-x-5 > div.mt-6.sm\\:flex-1.sm\\:min-w-0.sm\\:flex.sm\\:items-center.sm\\:justify-end.sm\\:space-x-6.sm\\:pb-1 > div.mt-6.flex.flex-col.justify-stretch.sm\\:flex-row.sm\\:space-y-0 > span > span > div > div:nth-child(1)").innerHTML
document.querySelector("body > div.h-screen.flex.overflow-hidden.bg-gray-100 > div.flex.flex-col.w-0.flex-1.overflow-hidden.relative > main > div.web-app-container > div.py-6.max-w-6xl.mx-auto.px-4.sm\\:px-6.md\\:px-8 > div:nth-child(2) > div.text-gray-400.text-xs.sm\\:text-sm.ml-4.dark\\:text-gray-400.mt-4").insertAdjacentElement('beforebegin',nav)
/*
let navn = document.getElementsByClassName(' text-gray-700 block px-4 py-2 text-sm hover:bg-gray-50 ')
for (let index = 0; index < navn.length; index++) {
  navn[index].setAttribute("class"," relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500")

   }*/
let x = document.querySelector("#myTopnav").childNodes
for (let index = 0; index < x.length; index++) {
    x[index].className = "relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
}