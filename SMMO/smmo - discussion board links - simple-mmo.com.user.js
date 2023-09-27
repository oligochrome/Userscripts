// ==UserScript==
// @name       smmo - discussion board links - simple-mmo.com
// @updateURL   https://github.com/oligochrome/scripts/raw/main/smmo - discussion board links - simple-mmo.com.user.js
// @namespace      https://github.com/oligochrome
// @match    https://web.simple-mmo.com/discussionboards/category/*
// @grant       none
// @version     1.0.0
// @author      Ogliochrome
// @description 9/18/2022, 9:25:16 PM

// ==/UserScript==
const smmourlbase = "https://web.simple-mmo.com"
let x = document.body.getElementsByClassName("bg-white rounded-lg")[1].childNodes[1].childNodes
let all = x.length
for (let i = 1;i < all;i+=2) {
    //let rr = x.childNodes[1].childNodes[1].childNodes[3].childNodes[1].childNodes[2].textContent;
let newurl = smmourlbase + x[i].attributes.onclick.value.split('location=\'')[1].split('\';')[0];
let rr = x[i].childNodes[1].childNodes[1].childNodes[3].childNodes[1];
x[i].childNodes[1].childNodes[1].childNodes[3].childNodes[1].outerHTML = "<a href=\""+newurl+"\" class=\"truncate text-indigo-600\">"+rr.innerText+"</a>";
x[i].removeAttribute(onclick);
};