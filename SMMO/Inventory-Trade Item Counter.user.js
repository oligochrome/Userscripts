// ==UserScript==
// @name        SMMO - Inventory/Trade Item Counter - simple-mmo.com
// @namespace   https://github.com/oligochrome
// @match       https://web.simple-mmo.com/inventory/items*
// @match       https://web.simple-mmo.com/trades/view/*

// @exclude     https://web.simple-mmo.com/trades/view/*/add/gold
// @grant       none
// @version     1.0
// @author      Ogliochrome
// @description 10/4/2022, 9:39:32 AM
// ==/UserScript==
let x = document.querySelectorAll('[id*="-qty"]')
var itemq = 0;
var itemc = 0;
var itemuc = 0;
var itemr = 0;
var iteme = 0;
var itemep = 0;
var iteml = 0;
var itemcel = 0;
var url = window.location.href


if (url.includes('/inventory/items')) {
    for (let index = 0; index < x.length; index++) {
        itemq = itemq + parseInt(x[index].innerText)
    }
    alert(itemq)
}
let y = document.getElementsByClassName('font-semibold text-sm text-gray-900')
if (url.includes('trades/view/')) {
    for (let index = 0; index < y.length; index++) {
        if (y[index].childElementCount === 0) {
            let rarity = y[index].parentElement.parentElement.childNodes[3].childNodes[1].childNodes[3].className.split('-item')[0]
            switch (rarity) {
                case "common":
                    itemc = itemc + parseInt(y[index].innerText.replace(',',''))
                    break;
                case "uncommon":
                    itemuc = itemuc + parseInt(y[index].innerText.replace(',',''))
                    break;
                case "rare":
                    itemr = itemr + parseInt(y[index].innerText.replace(',',''))
                    break;
                case "elite":
                    iteme = iteme + parseInt(y[index].innerText.replace(',',''))
                    break;
                case "epic":
                    itemep = itemep + parseInt(y[index].innerText.replace(',',''))
                    break;
                case "legendary":
                    iteml = iteml + parseInt(y[index].innerText.replace(',',''))
                    break;
                case "celestial":
                    itemcel = itemcel + parseInt(y[index].innerText.replace(',',''))
                    break;
            }

        }
    }
    document.getElementsByClassName('mt-8')[0].insertAdjacentHTML('beforebegin', `<div class="text-center bg-white px-5 py-3 rounded-md mb-4 ring-1 ring-black ring-opacity-5 shadow-sm dark:border dark:border-gray-800 dark:bg-gray-950">
    <h3 class="mt-2 text-sm font-medium text-gray-900">Trade Quantity:</h3>
    <p id="textq" class="mt-1 text-sm text-gray-500">
    </p>
</div>
`)

    let itemtotal = itemc + itemuc + itemr + iteme + itemep + iteml + itemcel

    document.getElementById('textq').innerHTML = "Common: " + itemc + "<br /> Uncommon: " + itemuc + "<br /> Rare: " + itemr + "<br /> Elite: " + iteme + "<br />Epic: " + itemep + "<br /> Legendary: " + iteml + "<br /> Celestial: " + itemcel + "<br /><br /> Total: " + itemtotal + ""

}
