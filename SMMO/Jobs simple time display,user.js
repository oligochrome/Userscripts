// ==UserScript==
// @name        SMMO - Jobs simple time display - simple-mmo.com
// @namespace   https://github.com/oligochrome
// @updateURL   https://github.com/oligochrome/Userscripts/blob/master/SMMO/Jobs%20simple%20time%20display%2Cuser.js
// @match       https://web.simple-mmo.com/jobs/view/*
// @match       https://web.simple-mmo.com/jobs/viewall
// @match       https://web.simple-mmo.com/home
// @grant       none
// @version     1.0
// @author      Ogliochrome
// @description 3/1/2023, 4:15:49 PM
// ==/UserScript==

var mins;
var d;
var n;
var minsa;
var minsb;

if (window.location.href === "https://web.simple-mmo.com/jobs/viewall") {
    minsa = document.getElementsByClassName('text-center text-xs  sm:text-sm bg-white rounded-lg px-3 py-4 mt-2 ring-1 ring-black ring-opacity-5 shadow-sm dark:border dark:border-gray-800 dark:bg-gray-950')[0];
    minsb = minsa.childNodes[8].innerText.split('in ')[1].split(' minutes.')[0];
} else if (window.location.href === "https://web.simple-mmo.com/home") {
    minsa = document.getElementsByClassName('text-center text-xs  sm:text-sm bg-white rounded-lg px-3 py-4 mt-2 ring-1 ring-black ring-opacity-5 shadow-sm dark:border dark:border-gray-800 dark:bg-gray-950')[0];
    minsb = minsa.childNodes[8].innerText.split('in ')[1].split(' minutes.')[0];
} else {
    minsa = document.getElementsByClassName('px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6')[0].childNodes[7].childNodes[7];
    minsb = minsa.innerText.split('in ')[1].split(' minutes.')[0];
}
mins = parseInt(minsb, 10) * 60000;
var d = new Date(Date.now() + mins);
var n = d.toLocaleTimeString();

if (window.location.href.indexOf("https://web.simple-mmo.com/jobs/view/") !== -1) {
    minsa.innerText = "Finish in " + minsb + " minutes / " + n;
} else {
    minsa.childNodes[8].innerText = "Finish in " + minsb + " minutes / " + n;
}
