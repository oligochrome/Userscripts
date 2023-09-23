// ==UserScript==
// @name        smmo - bounty auto min- simple-mmo.com
// @updateURL   https://github.com/oligochrome/scripts/raw/main/smmo - bounty auto min- simple-mmo.com.user.js
// @namespace   - simple-mmo.com -
// @include       https://web.simple-mmo.com/user/view/*
// @exclude     https://web.simple-mmo.com/user/view/827105*
// @grant       none
// @version     1.0.0
// @author      -
// @description 8/27/2022, 12:35:38 AM
// @require     https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js
// ==/UserScript==

function myFunction(){let x = document.getElementsByClassName("h-4 ml-2")[0].nextSibling.textContent
x = x.split('.')[0];
y = x.split(',')[0].concat( x.split(',')[1])
y = y.split(' ')[1]
document.getElementById("swal2-content").parentNode.childNodes[1].value = parseInt(y)}
let yy = document.getElementsByClassName(" text-gray-700 block px-4 py-2 text-sm hover:bg-gray-50 ")
for (let index = 0; index < yy.length; index++) {
    if(yy[index].text == 'Place Bounty'){yy[index].addEventListener("click", myFunction);}}