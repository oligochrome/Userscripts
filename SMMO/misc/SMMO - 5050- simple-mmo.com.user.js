// ==UserScript==
// @name        SMMO - 5050- simple-mmo.com
// @namespace      https://github.com/oligochrome
// @match    https://web.simple-mmo.com/gamecentre/5050*
// @grant       none
// @version     1.0
// @author      Ogliochrome
// @description 9/19/2022, 4:08:35 PM
/* @require     https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js*/
// ==/UserScript==

function checkLoc(loc){
  if (localStorage.getItem(""+loc+"") === null) {
    console.log("is null")
    localStorage.setItem(""+loc+"", 0)
    console.log("set local storage: set")
}
}

checkLoc("5050_plays");
checkLoc("5050")
checkLoc("5050_losses_row")
checkLoc("5050_losses_high")

function lstorAddOne(locst){localStorage.setItem(""+locst+"",parseInt(localStorage.getItem(""+locst+"")) + 1)}
if (document.body.getElementsByClassName("text-xs sm:text-sm font-medium text-green-800")[0] !== undefined) {
//localStorage.setItem("5050_plays",parseInt(localStorage.getItem("5050_plays")) + 1)
  lstorAddOne("5050_plays");
localStorage.setItem("5050", parseInt(localStorage.getItem("5050")) + 250000);
}

if(localStorage.getItem("5050_losses_high")<localStorage.getItem("5050_losses_row")){
localStorage.setItem("5050_losses_high", localStorage.getItem("5050_losses_row"))
}else{
localStorage.setItem("5050_losses_row",0);}
if (document.body.getElementsByClassName("text-xs sm:text-sm font-medium text-red-800")[0] !== undefined) {
  document.body.getElementsByClassName("text-xs sm:text-sm font-medium text-red-800")[0]
//  localStorage.setItem("5050_plays",parseInt(localStorage.getItem("5050_plays")) + 1)
 lstorAddOne("5050_plays");
  localStorage.setItem("5050", parseInt(localStorage.getItem("5050")) - 250000)
  lstorAddOne("5050_losses_row")
}

let x = document.querySelector("body > div.h-screen.flex.overflow-hidden.bg-gray-100 > div.flex.flex-col.w-0.flex-1.overflow-hidden.relative > main > div.web-app-container > div.sm\\:mx-auto.sm\\:w-full.sm\\:max-w-md.text-center > div.px-4.py-5.bg-white.shadow.rounded-lg.overflow-hidden.sm\\:p-6 > div > div > form > div > div > input")

x.outerHTML = x.outerHTML.split(` placeholder="Enter an amount here">`)[0] + `
" value="250,000">
`