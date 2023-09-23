// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://web.simple-mmo.com/armoury/backgrounds
// @icon         https://www.google.com/s2/favicons?sz=64&domain=simple-mmo.com
// @grant        GM_xmlhttpRequest
// ==/UserScript==

async function GetMarketVals(id) {



      // Use GM_xmlhttpRequest for the HTTP request
      GM_xmlhttpRequest({
        method: 'POST',
        url: `/api/item/stats/${id}`,
        onload: function (response) {
          if (response.status === 200) {
            const res = JSON.parse(response.responseText);
            console.log(res);

            const name = res[0];
            const type = res["type"];
            const marketPrice = res["market"].split(' to ')[0];
            const acollected = res["avatar_collection"];
            const collected = res["item_collection"];
            const bcollected = res["background_collection"];
            const scollected = res["sprite_collection"];
            const ccollected = res["collectible_collection"];
            console.log(marketPrice);
        }
      }
  })
}

GetMarketVals(9413);