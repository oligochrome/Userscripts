// ==UserScript==
// @name       SMMO - smmo tools - simple-mmo.com
// @namespace      https://github.com/oligochrome
// @match       https://web.simple-mmo.com/travel
// @match    https://web.simple-mmo.com/discussionboards/category/*
// @match    https://web.simple-mmo.com/gamecentre/3cups
// @match       https://web.simple-mmo.com/gamecentre/lottery/*
// @match       https://web.simple-mmo.com/battle/colosseum
// @match       https://web.simple-mmo.com/quests/view/*
// @match       https://web.simple-mmo.com/item-dump/items/dump/*
// @include       https://web.simple-mmo.com/user/view/*
// @exclude     https://web.simple-mmo.com/user/view/827105*
// @match       https://web.simple-mmo.com/senditem/*
// @grant       none
// @version     1.0
// @author      Ogliochrome
// @description 3/2/2023, 2:45:31 AM
// ==/UserScript==

 var currentUrl = window.location.href;
if(currentUrl.includes('https://web.simple-mmo.com/discussionboards/category/')){
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
}
if(currentUrl.includes('https://web.simple-mmo.com/gamecentre/3cups')){
  if (localStorage.getItem("3cups") === null) {
    console.log("is null")
    localStorage.setItem("3cups", 0)
    console.log("set local storage: 3cups")
}
if (localStorage.getItem("3cups_plays") === null) {
    console.log("is null")
    localStorage.setItem("3cups_plays", 0)
    console.log("set local storage: 3cups")
}
if (localStorage.getItem("3cups_losses_row") === null) {
    console.log("is null")
    localStorage.setItem("3cups_losses_row", 0)
    console.log("set local storage: 3cups")
}
if (localStorage.getItem("3cups_losses_high") === null) {
    console.log("is null")
    localStorage.setItem("3cups_losses_high", 0)
    console.log("set local storage: 3cups")
}
function lstorAddOne(locst){localStorage.setItem(""+locst+"",parseInt(localStorage.getItem(""+locst+"")) + 1)}

if (document.body.getElementsByClassName("text-xs sm:text-sm font-medium text-green-800")[0] !== undefined) {
  document.body.getElementsByClassName("text-xs sm:text-sm font-medium text-green-800")[0].innerText === "You win 300000 gold.";
//localStorage.setItem("3cups_plays",parseInt(localStorage.getItem("3cups_plays")) + 1)
  lstorAddOne("3cups_plays");
localStorage.setItem("3cups", parseInt(localStorage.getItem("3cups")) + 200000);
if(localStorage.getItem("3cups_losses_high")<localStorage.getItem("3cups_losses_row")){localStorage.setItem("3cups_losses_high", localStorage.getItem("3cups_losses_row"))}else{
localStorage.setItem("3cups_losses_row",0);}
} else if (document.body.getElementsByClassName("text-xs sm:text-sm font-medium text-red-800")[0] !== undefined) {
  document.body.getElementsByClassName("text-xs sm:text-sm font-medium text-red-800")[0].innerText.includes("You lost your wager. The winning beverage was")
//  localStorage.setItem("3cups_plays",parseInt(localStorage.getItem("3cups_plays")) + 1)
 lstorAddOne("3cups_plays");
  localStorage.setItem("3cups", parseInt(localStorage.getItem("3cups")) - 100000)
  lstorAddOne("3cups_losses_row")
}

let i = Math.floor(Math.random() * 2)
var x = document.body.getElementsByClassName("h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500")
console.log(i)
if (x[i].checked === false){x[i].checked = 'true';}else{console.log("already chcked")}
document.querySelector("body > div.h-screen.flex.overflow-hidden.bg-gray-100 > div.flex.flex-col.w-0.flex-1.overflow-hidden.relative > main > div.web-app-container > div.sm\\:mx-auto.sm\\:w-full.sm\\:max-w-md.text-center > div.px-4.py-5.bg-white.shadow.rounded-lg.overflow-hidden.sm\\:p-6 > div > div > form > div > div > input").outerHTML = document.querySelector("body > div.h-screen.flex.overflow-hidden.bg-gray-100 > div.flex.flex-col.w-0.flex-1.overflow-hidden.relative > main > div.web-app-container > div.sm\\:mx-auto.sm\\:w-full.sm\\:max-w-md.text-center > div.px-4.py-5.bg-white.shadow.rounded-lg.overflow-hidden.sm\\:p-6 > div > div > form > div > div > input").outerHTML.split(` placeholder="Enter an amount here">`)[0] + `
" value="100,000">
`

}
if(currentUrl.includes('https://web.simple-mmo.com/gamecentre/lottery/')){
  let getit = document.body.getElementsByClassName('focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none rounded-l-md sm:text-sm border-gray-300')[0].value = "1";
}
if(currentUrl.includes('https://web.simple-mmo.com/inventory/items')){
  var multiButton = document.querySelector("body > div.h-screen.flex.overflow-hidden.bg-gray-100 > div.flex.flex-col.w-0.flex-1.overflow-hidden.relative > main > div.web-app-container > div > div.mt-8 > div.mt-4 > div.sm\\:px-6.lg\\:px-0.lg\\:col-span-10 > div:nth-child(3) > div.text-center.mt-2 > button")
var filterButton = document.querySelector("body > div.h-screen.flex.overflow-hidden.bg-gray-100 > div.flex.flex-col.w-0.flex-1.overflow-hidden.relative > main > div.web-app-container > div > div.mt-8 > form > div.text-center.mt-2 > button.nightwind-prevent.inline-flex.items-center.px-2\\.5.py-1\\.5.border.border-transparent.text-xs.sm\\:text-sm.font-medium.rounded.shadow-sm.text-white.bg-indigo-600.hover\\:bg-indigo-700.focus\\:outline-none.focus\\:ring-2.focus\\:ring-offset-2.focus\\:ring-indigo-500")
var hasRun = false

    var aa = document.querySelectorAll("input[type=checkbox]");
    for (var i = 0; i < aa.length; i++){
        aa[i].addEventListener('change', (event) => {
  if (event.currentTarget.checked) {
   if(multiButton && hasRun === false){
var clone = multiButton.cloneNode(true);
document.querySelector("body > div.h-screen.flex.overflow-hidden.bg-gray-100 > div.flex.flex-col.w-0.flex-1.overflow-hidden.relative > main > div.web-app-container > div > div.mt-8 > div.mt-4 > div.sm\\:px-6.lg\\:px-0.lg\\:col-span-10 > div.block.xl\\:hidden.text-center.mb-2").before(clone);
hasRun = true;
}
}
        }
)
    }

}
if(currentUrl.includes('https://web.simple-mmo.com/item-dump/items/dump/')){

document.querySelector("body > div.h-screen.flex.overflow-hidden.bg-gray-100 > div.flex.flex-col.w-0.flex-1.overflow-hidden.relative > main > div.web-app-container > div > div.sm\\:mx-auto.sm\\:w-full.sm\\:max-w-md.text-center > div.px-4.pb-5.pt-2.bg-white.shadow.rounded-lg.overflow-hidden > form > div > div > input").value = document.querySelector("body > div.h-screen.flex.overflow-hidden.bg-gray-100 > div.flex.flex-col.w-0.flex-1.overflow-hidden.relative > main > div.web-app-container > div > div.sm\\:mx-auto.sm\\:w-full.sm\\:max-w-md.text-center > div.px-4.py-5.bg-white.shadow.rounded-lg.overflow-hidden.sm\\:p-6 > div.text-sm.font-medium.text-gray-500").innerText.split('You have ')[1].split(' of this item')[0]
}
if(currentUrl.includes('https://web.simple-mmo.com/battle/colosseum')){
  var tabs = document.querySelector("body > div.h-screen.flex.overflow-hidden.bg-gray-100 > div.flex.flex-col.w-0.flex-1.overflow-hidden.relative > main > div.web-app-container > div > div.grid.grid-cols-1.lg\\:grid-cols-8.space-y-4.lg\\:space-y-0.lg\\:gap-4.mt-4 > div.col-span-6 > div.px-4.sm\\:px-6.lg\\:px-8 > div > table > tbody")
var tabsamnt = tabs.childElementCount * 2
for (let index = 1; index < tabsamnt; index++) {
    if(tabs.childNodes[index].innerHTML.includes('/img/icons/one/icon230.png') === true){tabs.childNodes[index].style.display = 'none'}
    index++
}
}
if(currentUrl.includes('https://web.simple-mmo.com/quests/view/')){
  document.querySelector("#questButton").style.height = "300px"
document.querySelector("#questButton").style.width = "300px"
}

if(currentUrl.includes('https://web.simple-mmo.com/user/view/')){
  function myFunction(){let x = document.getElementsByClassName("h-4 ml-2")[0].nextSibling.textContent
x = x.split('.')[0];
y = x.split(',')[0].concat( x.split(',')[1])
document.getElementById("swal2-content").parentNode.childNodes[1].value = parseInt(y)}
let yy = document.getElementsByClassName(" text-gray-700 block px-4 py-2 text-sm hover:bg-gray-50 ")
if (yy[8].innerHTML == 'Place Bounty'){yy[8].addEventListener("click", myFunction);}else{console.log("error")}
}

if(currentUrl.includes('https://web.simple-mmo.com/senditem/')){
  let amt = parseInt(document.body.getElementsByClassName("px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6 mt-4")[0].childNodes[1].childNodes[3].childNodes[3].childNodes[1].innerText)
document.querySelector("#quantity").value = amt

}

if(currentUrl.includes('')){

}

if(currentUrl.includes('')){

}

if(currentUrl.includes('')){

}

if(currentUrl.includes('')){

}

if(currentUrl.includes('')){

}

if(currentUrl.includes('')){

}




