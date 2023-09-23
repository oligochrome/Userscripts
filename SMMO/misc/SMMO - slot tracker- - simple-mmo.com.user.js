// ==UserScript==
// @name           SMMO - slot tracker- - simple-mmo.com
// @updateURL   https://github.com/oligochrome/scripts/raw/main/SMMO - slot tracker- - simple-mmo.com.user.js
// @namespace      https://github.com/oligochrome
// @match          https://web.simple-mmo.com/gamecentre/slots
// @grant          none
// @version        1.0
// @author         Ogliochrome
// @license        GNU GPL
// @version        1.0
// @language       en
// @description    26/03/2023, 21:14:41
// @require        https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js
// ==/UserScript==
    var counts = localStorage.getItem('click-counts');
var gold = localStorage.getItem('slot-gold');
var spent = localStorage.getItem('spent');
var profit = localStorage.getItem('profit');
if (gold==null){localStorage.setItem('slot-gold', "0");}
spentF = () => {
let x = parseInt(counts) * 50;
  return x

};
if (spent==null){localStorage.setItem('spent', "0");}
else{localStorage.setItem('spent', spentF())}
profit = () => {
let x = parseInt(gold) - parseInt(spent);
return x}
if (profit==null){localStorage.setItem('profit', "0");}
else{localStorage.setItem('profit', profit())}

function countClicks(){



    if (counts!==null){
        var newClick = parseInt(counts) + 1;
        localStorage.setItem('click-counts', newClick);
    }
    else{
        localStorage.setItem('click-counts', "1");
    }

 }
if(document.getElementsByClassName('text-xs sm:text-sm font-medium text-green-800')[0] != undefined){
let goldamt = document.getElementsByClassName('text-xs sm:text-sm font-medium text-green-800')[0].innerText.split('won  ')[1].replace(' gold!','').replace(',','')

        var newGold = parseInt(gold) + parseInt(goldamt);
        localStorage.setItem('slot-gold', newGold);

  }
document.querySelector("body > div.h-screen.flex.overflow-hidden.bg-gray-100 > div.flex.flex-col.w-0.flex-1.overflow-hidden.relative > main > div.web-app-container > div.sm\\:mx-auto.sm\\:w-full.sm\\:max-w-md.text-center > div.mt-4.px-4.py-5.bg-white.shadow.rounded-lg.overflow-hidden.sm\\:p-6 > div > div > a > button").addEventListener("click", countClicks);

var slotStatBox = document.createElement('div')
slotStatBox.innerHTML = `<div class="mt-4 px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
                          <div class="text-center">
                              <span class="text-s sm:text-sm font-semibold text-gray-700 dark:text-gray-100" >You take a step...</span>
                              <span class="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-100" ><ul><li>Spins: `+localStorage.getItem('click-counts')+`</ br><li>Profit: `+localStorage.getItem('profit')+`</li></ul>

                              </span>
    <div>kdsfjlksdlkdfsjk</div><span class="ml-2">Use Item</span>
                          </div> </div>
                                                                            `
document.querySelector("body > div.h-screen.flex.overflow-hidden.bg-gray-100 > div.flex.flex-col.w-0.flex-1.overflow-hidden.relative > main > div.web-app-container > div.sm\\:mx-auto.sm\\:w-full.sm\\:max-w-md.text-center > div.mt-4.px-4.py-5.bg-white.shadow.rounded-lg.overflow-hidden.sm\\:p-6").insertAdjacentElement('afterEnd',slotStatBox)
