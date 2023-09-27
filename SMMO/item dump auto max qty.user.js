// ==UserScript==
// @name        SMMO - item dump auto max qty - simple-mmo.com
// @updateURL   https://github.com/oligochrome/scripts/raw/main/SMMO - item dump auto max qty - simple-mmo.com.user.js
// @namespace      https://github.com/oligochrome
// @match       https://web.simple-mmo.com/item-dump/items/dump/*
// @grant       none
// @version     1.0.0
// @author      Ogliochrome
// @description 10/21/2022, 9:48:35 PM

// ==/UserScript==

document.querySelector("body > div.h-screen.flex.overflow-hidden.bg-gray-100 > div.flex.flex-col.w-0.flex-1.overflow-hidden.relative > main > div.web-app-container > div > div.sm\\:mx-auto.sm\\:w-full.sm\\:max-w-md.text-center > div.px-4.pb-5.pt-2.bg-white.shadow.rounded-lg.overflow-hidden > form > div > div > input").value = document.querySelector("body > div.h-screen.flex.overflow-hidden.bg-gray-100 > div.flex.flex-col.w-0.flex-1.overflow-hidden.relative > main > div.web-app-container > div > div.sm\\:mx-auto.sm\\:w-full.sm\\:max-w-md.text-center > div.px-4.py-5.bg-white.shadow.rounded-lg.overflow-hidden.sm\\:p-6 > div.text-sm.font-medium.text-gray-500").innerText.split('You have ')[1].split(' of this item')[0]
