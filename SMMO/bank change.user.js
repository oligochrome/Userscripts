// ==UserScript==
// @name          SMMO -  bank change- simple-mmo.com
// @updateURL   https://github.com/oligochrome/scripts/raw/main/SMMO -  bank change- simple-mmo.com.user.js
// @namespace      https://github.com/oligochrome
// @match          https://web.simple-mmo.com/bank*
// @grant          none
// @version        1.0
// @author         Ogliochrome
// @license        GNU GPL
// @version        1.0
// @language       en
// @description    09/05/2023, 23:31:18
// @updateURL      https://github.com/oligochrome/scripts/raw/main/SMMO%20-%20%20bank%20change-%20simple-mmo.com.user.js

// ==/UserScript==
if(window.location.href === "https://web.simple-mmo.com/bank?withdraw"){document.querySelector("body > div.h-screen.flex.overflow-hidden.bg-gray-100 > div.flex.flex-col.w-0.flex-1.overflow-hidden.relative > main > div.web-app-container > div.sm\\:mx-auto.sm\\:w-full.sm\\:max-w-md > div > div:nth-child(7)").style.display = "block"
document.querySelector("body > div.h-screen.flex.overflow-hidden.bg-gray-100 > div.flex.flex-col.w-0.flex-1.overflow-hidden.relative > main > div.web-app-container > div.sm\\:mx-auto.sm\\:w-full.sm\\:max-w-md > div > div:nth-child(6)").style.display = "none"}else if(window.location.href === "https://web.simple-mmo.com/bank?deposit"){document.querySelector("body > div.h-screen.flex.overflow-hidden.bg-gray-100 > div.flex.flex-col.w-0.flex-1.overflow-hidden.relative > main > div.web-app-container > div.sm\\:mx-auto.sm\\:w-full.sm\\:max-w-md > div > div:nth-child(7)").style.display = "none"
document.querySelector("body > div.h-screen.flex.overflow-hidden.bg-gray-100 > div.flex.flex-col.w-0.flex-1.overflow-hidden.relative > main > div.web-app-container > div.sm\\:mx-auto.sm\\:w-full.sm\\:max-w-md > div > div:nth-child(6)").style.display = "block"}
