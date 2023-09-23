// ==UserScript==
// @name      SMMO - add menu items- simple-mmo.com
// @updateURL   https://github.com/oligochrome/scripts/raw/main/SMMO - add menu items- simple-mmo.com.user.js
// @namespace      https://github.com/oligochrome
// @match    https://web.simple-mmo.com/*
// @exclude  https://web.simple-mmo.com/login*
// @exclude   https://web.simple-mmo.com/
// @exclude   https://web.simple-mmo.com/alcool
// @version     1.0.0
// @author      Ogliochrome
// @description 9/19/2022, 8:41:40 AM
// @require     https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js
// ==/UserScript==

/*if("undefined"==typeof jQuery){function e(e,t){var a=document.createElement("script");a.src=e;var n=document.getElementsByTagName("head")[0],o=!1;a.onload=a.onreadystatechange=function(){o||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(o=!0,t(),a.onload=a.onreadystatechange=null,n.removeChild(a))},n.appendChild(a)}"function"==typeof $&&(thisPageUsingOtherJSLibrary=!0),e("http://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js",function(){"undefined"==typeof jQuery||(fancyCode(),thisPageUsingOtherJSLibrary)})}
*/
/*
if(document.querySelector("body > div.h-screen.flex.overflow-hidden.bg-gray-100 > div.hidden.md\\:flex.md\\:flex-shrink-0.bg-white.dark\\:bg-gray-950.overflow-hidden.ease-in-out.duration-500.sm\\:duration-700.transition-width.w-48.lg\\:w-64 > div > div")){
document.querySelector("body > div.h-screen.flex.overflow-hidden.bg-gray-100 > div.hidden.md\\:flex.md\\:flex-shrink-0.bg-white.dark\\:bg-gray-950.overflow-hidden.ease-in-out.duration-500.sm\\:duration-700.transition-width.w-48.lg\\:w-64 > div > div")){document.querySelector("body > div.h-screen.flex.overflow-hidden.bg-gray-100 > div.hidden.md\\:flex.md\\:flex-shrink-0.bg-white.dark\\:bg-gray-950.overflow-hidden.ease-in-out.duration-500.sm\\:duration-700.transition-width.w-48.lg\\:w-64 > div > div").style.paddingTop = '0'
}else if(document.querySelector("body > div.h-screen.flex.overflow-hidden.bg-gray-100 > div.hidden.md\\:flex.md\\:flex-shrink-0.bg-white.dark\\:bg-gray-950.overflow-hidden.ease-in-out.duration-500.sm\\:duration-700.transition-width.w-48.lg\\:w-64 > div > div > div.px-4.text-center")
){document.querySelector("body > div.h-screen.flex.overflow-hidden.bg-gray-100 > div.hidden.md\\:flex.md\\:flex-shrink-0.bg-white.dark\\:bg-gray-950.overflow-hidden.ease-in-out.duration-500.sm\\:duration-700.transition-width.w-48.lg\\:w-64 > div > div > div.px-4.text-center").style.display = "none"
}
  else if(document.querySelector("body > div.h-screen.flex.overflow-hidden.bg-gray-100 > div.hidden.md\\:flex.md\\:flex-shrink-0.bg-white.dark\\:bg-gray-950.overflow-hidden.ease-in-out.duration-500.sm\\:duration-700.transition-width.w-48.lg\\:w-64 > div > div > div.mt-5.flex-grow.flex.flex-col")

){document.querySelector("body > div.h-screen.flex.overflow-hidden.bg-gray-100 > div.hidden.md\\:flex.md\\:flex-shrink-0.bg-white.dark\\:bg-gray-950.overflow-hidden.ease-in-out.duration-500.sm\\:duration-700.transition-width.w-48.lg\\:w-64 > div > div > div.mt-5.flex-grow.flex.flex-col").style.marginTop = '0'
}
  else if(document.querySelector("body > div.h-screen.flex.overfdocument.querySelector("body > div.h-screen.flex.overflow-hidden.bg-gray-100 > div.hidden.md\\:flex.md\\:flex-shrink-0.bg-white.dark\\:bg-gray-950.overflow-hidden.ease-in-out.duration-500.sm\\:duration-700.transition-width.w-48.lg\\:w-64 > div > div > div.px-4.text-center")
){document.querySelector("body > div.h-screen.flex.overfdocument.querySelector("body > div.h-screen.flex.overflow-hidden.bg-gray-100 > div.hidden.md\\:flex.md\\:flex-shrink-0.bg-white.dark\\:bg-gray-950.overflow-hidden.ease-in-out.duration-500.sm\\:duration-700.transition-width.w-48.lg\\:w-64 > div > div > div.px-4.text-center").style.display = "none"
}

low-hidden.bg-gray-100 > div.hidden.md\\:flex.md\\:flex-shrink-0.bg-white.dark\\:bg-gray-950.overflow-hidden.ease-in-out.duration-500.sm\\:duration-700.transition-width.w-48.lg\\:w-64 > div > div > div.mt-5.flex-grow.flex.flex-col > hr").style.display = "none"

*/
let un = document.getElementsByClassName("text-sm font-medium text-gray-700 group-hover:text-gray-900")[0].innerText.split('\n                    ')[1].split('\n                  ')[0]

let guildbutton = $( 'a[href*="/guilds/menu"]' )
if(un === "alcoolemia"){


if(guildbutton.length > 1){guildbutton[1].href = "https://web.simple-mmo.com/guilds/view/39?new_page=true"}else {guildbutton[0].href = "https://web.simple-mmo.com/guilds/view/39?new_page=true"}
}else if(un === "Guides"){
  if(guildbutton.length > 1){guildbutton[1].href = "https://web.simple-mmo.com/guilds/view/971?new_page=true"}else {guildbutton[0].href = "https://web.simple-mmo.com/guilds/view/971?new_page=true"}
}
function addlink (newurl,name) {
    var newlink = document.body.getElementsByClassName(" text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 group flex items-center px-2 py-2 text-sm font-medium rounded-md")[2].cloneNode(true)
    newlink.href = newurl
    newlink.childNodes[1].nextElementSibling.innerText = ""+name+""

let x = document.body.getElementsByClassName(" text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 group flex items-center px-2 py-2 text-sm font-medium rounded-md")
x[2].insertAdjacentElement("afterend",newlink)}

//        addlink("https://web.simple-mmo.com/","",1);
//start adding
addlink("https://web.simple-mmo.com/bank?deposit","deposit");
addlink("https://web.simple-mmo.com/bank?withdraw","withdraw");
addlink("https://web.simple-mmo.com/market-menu?new_page=true","Pmarket");
addlink("https://web.simple-mmo.com/diamond-market?new_page=true","dmarket");
addlink("https://web.simple-mmo.com/maholshut/chests?new_page=true","OpenChests");
addlink("https://web.simple-mmo.com/maholshut/buy-keys?new_page=true","BuyKeys");
addlink("https://web.simple-mmo.com/healer?new_page=true","Healer");
addlink("https://web.simple-mmo.com/item-dump?new_page=true","ItemDump");
addlink("https://web.simple-mmo.com/bounties?new_page=true","Bounties");
addlink("https://web.simple-mmo.com/temple?new_page=true","Temple");
addlink("https://web.simple-mmo.com/orphanage?new_page=true","Orphanage");
addlink("https://web.simple-mmo.com/town-hall?new_page=true","TownHall");
addlink("https://web.simple-mmo.com/trades/view-all?new_page=true","Trades");
