// ==UserScript==
// @name      SMMO - add menu items- simple-mmo.com
// @updateURL   https://github.com/oligochrome/Userscripts/raw/master/SMMO/add_menu_items.user.js
// @namespace      https://github.com/oligochrome
// @match    https://web.simple-mmo.com/*
// @exclude  https://web.simple-mmo.com/login*
// @exclude   https://web.simple-mmo.com/
// @exclude   https://web.simple-mmo.com/alcool
// @version     1.0.0
// @author      Ogliochrome
// @description 9/19/2022, 8:41:40 AM
// @require     https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js
// @require     https://github.com/oligochrome/Userscripts/raw/master/SMMO/bank_adjustments.user.js
// ==/UserScript==
let un = document.querySelector(".text-sm.font-medium.text-gray-700.group-hover:text-gray-900")
  .innerText.split('\n                    ')[1].split('\n                  ')[0];
let guildbutton = $('a[href*="/guilds/menu"]');


function assignGuildButtonUrl(buttons, username, guildId) {
  if (username === "Phthalcool") {
    buttons[guildId].href = "https://web.simple-mmo.com/guilds/view/39?new_page=true";
  } else if (username === "Guides") {
    buttons[guildId].href = "https://web.simple-mmo.com/guilds/view/971?new_page=true";
  }
}

if(un === "Phthalcool") {
  if(guildbutton.length > 1){
    assignGuildButtonUrl(guildbutton, un, 1);
  } else {
    assignGuildButtonUrl(guildbutton, un, 0);
  }
} else if (un === "Guides") {
  if(guildbutton.length > 1){
    assignGuildButtonUrl(guildbutton, un, 1);
  } else {
    assignGuildButtonUrl(guildbutton, un, 0);
  }
}


function addlink(newurl, name) {
  const newlink = document.body.querySelector(".text-gray-600.hover:bg-gray-50.hover:text-gray-900.dark:text-gray-300.group.flex.items-center.px-2.py-2.text-sm.font-medium.rounded-md")
    .cloneNode(true);
  newlink.href = newurl;
  newlink.childNodes[1].nextElementSibling.innerText = name;

  const x = document.body.querySelectorAll(".text-gray-600.hover:bg-gray-50.hover:text-gray-900.dark:text-gray-300.group.flex.items-center.px-2.py-2.text-sm.font-medium.rounded-md");
  x[2].insertAdjacentElement("afterend", newlink);
}


//        addlink("https://web.simple-mmo.com/","",1);
//start adding
addlink("https://web.simple-mmo.com/bank?deposit", "deposit");
addlink("https://web.simple-mmo.com/bank?withdraw", "withdraw");
addlink("https://web.simple-mmo.com/market-menu?new_page=true", "Pmarket");
addlink("https://web.simple-mmo.com/diamond-market?new_page=true", "dmarket");
addlink("https://web.simple-mmo.com/maholshut/chests?new_page=true", "OpenChests");
addlink("https://web.simple-mmo.com/maholshut/buy-keys?new_page=true", "BuyKeys");
addlink("https://web.simple-mmo.com/healer?new_page=true", "Healer");
addlink("https://web.simple-mmo.com/item-dump?new_page=true", "ItemDump");
addlink("https://web.simple-mmo.com/bounties?new_page=true", "Bounties");
addlink("https://web.simple-mmo.com/temple?new_page=true", "Temple");
addlink("https://web.simple-mmo.com/orphanage?new_page=true", "Orphanage");
addlink("https://web.simple-mmo.com/town-hall?new_page=true", "TownHall");
addlink("https://web.simple-mmo.com/trades/view-all?new_page=true", "Trades");
