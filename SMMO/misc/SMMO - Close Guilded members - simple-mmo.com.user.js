// ==UserScript==
// @name           SMMO - Close Guilded members - simple-mmo.com
// @updateURL   https://github.com/oligochrome/scripts/raw/main/SMMO - Close Guilded members - simple-mmo.com.user.js
// @namespace      https://github.com/oligochrome
// @match          https://web.simple-mmo.com/user/view/*
// @grant          none
// @version        1.0
// @author         Ogliochrome
// @license        GNU GPL
// @version        1.0
// @language       en
// @description    09/05/2023, 17:36:25
// @updateURL https://github.com/oligochrome/scripts/blob/raw/SMMO%20-%20Close%20Guilded%20members%20-%20simple-mmo.com.user.js
// ==/UserScript==
const savedValue = localStorage.getItem("lbhide");
if (savedValue && savedValue === "true") {
    if(document.getElementsByClassName("inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs sm:text-sm font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500")[0].innerText == "View Guild"){window.close()}
}
