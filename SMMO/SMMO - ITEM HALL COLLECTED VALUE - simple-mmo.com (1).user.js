// ==UserScript==
// @name       ITEM HALL COLLECTED VALUE - simple-mmo.com
// @namespace      https://github.com/oligochrome
// @match    https://web.simple-mmo.com/armoury/*
// @grant       none
// @version     1.0
// @author      Ogliochrome
// @description 9/18/2022, 10:47:10 PM
// @require     https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js
// ==/UserScript==
//const ur = "https://web.simple-mmo.com/armoury/"
//const curURL = window.location.href.split(''+ur+'')[1].substr(0,curURL-1)

// function creg(item,q){
// let text = item
//     if(q === 1){
// const pattern = /Avatar|Collectible|Background|Sprite/g;
// return pattern.test(text);
//     }
// }

function GetMarketVals(){

(async function () {
  const lastColumnHeader = document.querySelector('table thead th:last-child');

  lastColumnHeader.insertAdjacentHTML('beforebegin', `
<th scope="col" class="hidden xl:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
<a class="text-indigo-800 font-semibold hover:text-indigo-900" href="#!">
  Collected?
</a>
</th>
  `.trim());

  const items = document.querySelectorAll('tr[id^="item-"]');

  items.forEach(async (item) => {
    const id = item.id.slice(5);
    const res = await fetch(`/api/item/stats/${id}`, {
      method: 'POST',
    }).then(res => res.json());
    console.log(res)
  const name = res[0]
const type = res["type"]
//console.log(type)
// function check(){if(creg(type,1) === true){ let p = res[""+type+"_collection"];return p}else{let p = res["item_collection"];return p}}
// const acollected = check();
  //  console.log(""+type.toLowerCase()+"_collection")
//const collected = res[""+type.toLowerCase()+"_collection"]
const marketPrice = res["market"].split(' to ')[0]
const acollected = res["avatar_collection"]
const collected = res["item_collection"]
const bcollected = res["background_collection"]
const scollected = res["sprite_collection"]
const ccollected = res["collectible_collection"]
console.log(marketPrice)
    const itemId = res[11];

if((acollected||collected||bcollected||scollected||ccollected) === 1){
item.querySelector('td:last-child').insertAdjacentHTML('beforebegin',`
<td class="px-6 py-4 whitespace-nowrap text-left text-sm font-medium dark:text-white hidden xl:table-cell">
<span>COLLECTED</span>
</td>
  `.trim());
}else{item.querySelector('td:last-child').insertAdjacentHTML('beforebegin', `
<td class="px-6 py-4 whitespace-nowrap text-left text-sm font-medium dark:text-white hidden xl:table-cell">
<span>NOT COLLECTED</span>
</td>
<td class="px-6 py-4 whitespace-nowrap text-left text-sm font-medium dark:text-white hidden xl:table-cell">
<span>${marketPrice}</span>
</td>
  `.trim());}
    const lastColumn = item.querySelector('td:last-child');
    lastColumn.classList.remove('text-right');
    lastColumn.classList.add('text-left');

    lastColumn.insertAdjacentHTML('afterbegin', `
<p>${collected}</p>
  `.trim());
  });
})();
}

function tableSort(){

        // Select the table
        const table = document.querySelector('table.divide-y');
        if (!table) return;

        // Select the 6th column header
        const sixthColumnHeader = table.querySelectorAll('th')[5];
        if (!sixthColumnHeader) return;

        // Add click event to the 6th column header to trigger sorting
        sixthColumnHeader.style.cursor = 'pointer';
        sixthColumnHeader.addEventListener('click', () => {
            sortTableBySixthColumn(table);
        });


    function sortTableBySixthColumn(table) {
        // Select the rows in the table body
        const rows = Array.from(table.querySelectorAll('tbody tr'));

      // Sort rows by the 6th column
    rows.sort(function (rowA, rowB) {
        const cellA = rowA.querySelectorAll('td')[5];
        const cellB = rowB.querySelectorAll('td')[5];

        // Get the text content of the cells
        const textA = cellA ? cellA.textContent.trim().toUpperCase() : '';
        const textB = cellB ? cellB.textContent.trim().toUpperCase() : '';

        // Convert values to numbers if they contain commas, otherwise compare as text
        const valueA = parseCellContent(textA);
        const valueB = parseCellContent(textB);

        // Sort by numerical value first; fallback to text-based sorting
        if (valueA !== null && valueB !== null) {
            return valueA - valueB;
        } else if (valueA !== null) {
            return -1;
        } else if (valueB !== null) {
            return 1;
        }

        // Adjust sorting order (e.g., COLLECTED vs other text) if both are non-numeric
        return textA.localeCompare(textB);
    });

    // Re-append sorted rows to the table body
    const tbody = table.querySelector('tbody');
    rows.forEach(function (row) {
        tbody.appendChild(row);
    });
}

function parseCellContent(text) {
    // Check if the text is numeric (e.g., "4,999,999") and convert it to an integer
    const numericText = text.replace(/,/g, '');
    return isNaN(numericText) ? null : parseInt(numericText, 10);
}

}
GetMarketVals();
tableSort();
