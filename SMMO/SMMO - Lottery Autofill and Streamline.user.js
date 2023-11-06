// ==UserScript==
// @name        SMMO - Lottery Autofill and Streamline - simple-mmo.com
// @namespace      https://github.com/oligochrome
// @match       https://web.simple-mmo.com/gamecentre/lottery/*
// @grant       none
// @version     1.0
// @author      Ogliochrome
// @updateURL   https://github.com/oligochrome/Userscripts/raw/master/SMMO/SMMO%20-%20Lottery%20Autofill%20and%20Streamline.user.js
// @description 10/3/2022, 1:03:31 AM

// ==/UserScript==

// get input box and autofill with 1
document.body.getElementsByClassName('focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none rounded-l-md sm:text-sm border-gray-300')[0].value = "1";

// grab all content boxes
var boxes = document.getElementsByClassName("px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6");

function hideBoxes() {
    this.style.display = "none";
}

for (var i = 0; i < boxes.length - 1; i++) {
    if(i!==1){
    hideBoxes.call(boxes[i]);
    }
}
