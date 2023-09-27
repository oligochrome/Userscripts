// ==UserScript==
// @name        SMMO - LB filter guild members- simple-mmo.com
// @updateURL   https://github.com/oligochrome/scripts/raw/main/SMMO - LB filter guild members- simple-mmo.com.user.js
// @namespace      https://github.com/oligochrome
// @match       https://web.simple-mmo.com/leaderboards/view/*
// @exclude     https://web.simple-mmo.com/leaderboards/view/*/daily?new_page=true&guild=39*
// @exclude     https://web.simple-mmo.com/leaderboards/view/crafting-diamonds*
// @grant       none
// @version     1.0.0
// @author      Ogliochrome
// @description 1/23/2023, 2:23:52 AM
// @require     https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js
// ==/UserScript==
if(localStorage.getItem("lbhide") === "true"){
for (let index = 0; index < $("tbody > tr").length; index++) {
    if($("tbody > tr")[index].childNodes[3].childNodes[1].childNodes[3].childNodes[1].childNodes[2].innerText.includes('[') === true){$("tbody > tr")[index].style.display = "none";}
}}


let urls = $( "table" ).find("a").filter(":visible")
let arr = []
for (let index = 0; index < urls.length; index++) {
   let q = urls[index].href
    arr.push(q)
}
let uniqueChars = [];
arr.forEach((element) => {
    if (!uniqueChars.includes(element)) {
        uniqueChars.push(element);
    }
});

console.log(uniqueChars);