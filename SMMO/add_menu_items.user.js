// ==UserScript==
// @name        SMMO - Additional Menu Links - simple-mmo.com
// @updateURL   https://github.com/oligochrome/Userscripts/raw/master/SMMO/add_menu_items.user.js
// @namespace   https://github.com/oligochrome
// @match       https://web.simple-mmo.com/*
// @exclude     https://web.simple-mmo.com/login*
// @exclude     https://web.simple-mmo.com/
// @exclude     https://web.simple-mmo.com/alcool
// @version     1.2.1
// @author      Ogliochrome
// @description 9/19/2022, 8:41:40 AM
// @require     https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js
// @require     https://github.com/oligochrome/Userscripts/raw/master/SMMO/bank_adjustments.user.js
// ==/UserScript==

let elements = document.getElementsByClassName('text-sm font-medium text-gray-700 group-hover:text-gray-900');
let un = Array.from(elements)[0].innerText.split('\n                    ')[1].split('\n                  ')[0];
let guildButtons = document.querySelectorAll('a[href*="/guilds/menu"]');

if (un === 'Phthalcool') {
    if (guildButtons.length > 1) {
        guildButtons[1].href = 'https://web.simple-mmo.com/guilds/view/39?new_page=true';
    } else {
        guildButtons[0].href = 'https://web.simple-mmo.com/guilds/view/39?new_page=true';
    }
} else if (un === 'Guides') {
    if (guildButtons.length > 1) {
        guildButtons[1].href = 'https://web.simple-mmo.com/guilds/view/971?new_page=true';
    } else {
        guildButtons[0].href = 'https://web.simple-mmo.com/guilds/view/971?new_page=true';
    }
}



function addlink (newurl,name) {
    var newlink = document.body.getElementsByClassName(" text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 group flex items-center px-2 py-2 text-sm font-medium rounded-md")[2].cloneNode(true)
    newlink.href = newurl
    newlink.childNodes[1].nextElementSibling.innerText = ""+name+""
    let x = document.getElementsByClassName("my-4 border-gray-100 dark:border-gray-800")[0]
    x.insertAdjacentElement("beforebegin",newlink)
}

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
addlink("https://web.simple-mmo.com/market/listings?item_name=cheese&order_col=cost&order=asc&page=1","Cheese");
addlink("https://web.simple-mmo.com/market/listings?user_id=476520","my Listings");
