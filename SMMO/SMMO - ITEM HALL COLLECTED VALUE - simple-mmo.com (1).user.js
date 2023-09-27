// ==UserScript==
// @name       SMMO - ITEM HALL COLLECTED VALUE - simple-mmo.com
// @namespace      https://github.com/oligochrome
// @match    https://web.simple-mmo.com/armoury/*
// @grant       none
// @version     1.0
// @author      Ogliochrome
// @description Lists if item is collected or not and the market price if uncollected in item hall
// @require     https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js
// ==/UserScript==


async function getMarketVals() {
  const lastColumnHeader = document.querySelector('table thead th:last-child');

  lastColumnHeader.insertAdjacentHTML('beforebegin', `
    <th scope="col" class="hidden xl:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
      <a class="text-indigo-800 font-semibold hover:text-indigo-900" href="#!">
        Collected?
      </a>
    </th>
  `);

  const items = document.querySelectorAll('tr[id^="item-"]');

  for (const item of items) {
    const id = item.id.slice(5);
    const res = await fetch(`/api/item/stats/${id}`, {
      method: 'POST',
    }).then(res => res.json());

    const { name, type, market, avatar_collection, item_collection, background_collection, sprite_collection, collectible_collection } = res;
    const marketPrice = market.split(' to ')[0];
    const collected = avatar_collection || item_collection || background_collection || sprite_collection || collectible_collection;

    const collectedHTML = collected === 1
      ? `<span>COLLECTED</span>`
      : `<span>NOT COLLECTED</span>
         <td class="px-6 py-4 whitespace-nowrap text-left text-sm font-medium dark:text-white hidden xl:table-cell">
           <span>${marketPrice}</span>
         </td>`;

    const lastColumn = item.querySelector('td:last-child');
    lastColumn.classList.remove('text-right');
    lastColumn.classList.add('text-left');

    lastColumn.insertAdjacentHTML('afterbegin', `<p>${collectedHTML}</p>`);
  }
}

getMarketVals();

