// ==UserScript==
// @name       SMMO - market value on my listings - simple-mmo.com
// @namespace      https://github.com/oligochrome
// @match       https://web.simple-mmo.com/market/listings
/* @match       https://web.simple-mmo.com/inventory/storage* */
// @exclude     https://web.simple-mmo.com/market/listings?rarity%5B0%5D=*&type%5B0%5D=Material&item_name=%5C%28tradable%5C%29&order_col=cost&order=asc&page=1
// @grant       none
// @version     1.0
// @author      Ogliochrome
// @description 10/22/2022, 9:49:04 AM
/* @require     https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js*/
// ==/UserScript==
document.querySelector("body > div.h-screen.flex.overflow-hidden.bg-gray-100 > div.flex.flex-col.w-0.flex-1.overflow-hidden.relative > main > div.web-app-container > div > div.lg\\:grid.lg\\:grid-cols-12.lg\\:gap-x-5 > div > div > div").style.overflowX = "visible"
function removeCommas(str) {
    while (str.search(",") >= 0) {
        str = (str + "").replace(',', '');
    }
    return str;
};
function higher(){
  var da = document.body.getElementsByClassName('px-6 py-4 whitespace-nowrap text-left text-sm font-medium dark:text-white hidden xl:table-cell')
for (let index = 0; index < da.length; index++) {
    if(removeCommas(document.body.getElementsByClassName('px-6 py-4 whitespace-nowrap text-left text-sm font-medium dark:text-white hidden xl:table-cell')[index].innerText.split(' to ')[0].substr(1)) < removeCommas(document.body.getElementsByClassName('px-6 py-4 whitespace-nowrap text-left text-sm font-medium dark:text-white hidden xl:table-cell')[index].previousElementSibling.innerText.substr(1))){document.body.getElementsByClassName('px-6 py-4 whitespace-nowrap text-left text-sm font-medium dark:text-white hidden xl:table-cell')[index].style.background = "red"}}}
function GetMarketValue(){
(async function () {
  const lastColumnHeader = document.querySelector('table thead th:last-child')
  lastColumnHeader.insertAdjacentHTML('beforebegin', `
<th scope="col" class="hidden xl:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
<a class="text-indigo-800 font-semibold hover:text-indigo-900" href="#!">
  Market Value
</a>
</th>
  `.trim());

  const items = document.querySelectorAll('tr[id^="listing-"]');

  items.forEach(async (item) => {
    const id =  document.querySelector("#"+item.id+"").outerHTML.split('retrieveItem(')[1].split(', &quot;')[0]
    const res = await fetch(`/api/item/${id}`, {
      method: 'POST',
    }).then(res => res.json());

    const name = atob(res[0]).replace(/'/g, "\\'");
    const icon = res[1];
    const marketPrice = res[8];
    const quantity = res[9];
    const itemId = res[11];

    item.querySelector('td:last-child').insertAdjacentHTML('beforebegin', `
<td class="px-6 py-4 whitespace-nowrap text-left text-sm font-medium dark:text-white hidden xl:table-cell">
<img src="/img/icons/I_GoldCoin.png" class="h-4 inline-block"> ${marketPrice}
</td>
  `.trim());

/*    const lastColumn = item.querySelector('td:last-child');
    lastColumn.classList.remove('text-right');
    lastColumn.classList.add('text-left');

    lastColumn.insertAdjacentHTML('afterbegin', `
<a onclick="if (!window.__cfRLUnblockHandlers) return false; marketSellItem(${itemId}, '${name}', '${icon}', ${quantity});task();" href="javascript:;">
<button type="button" class="dark:text-white relative inline-flex items-center px-4 py-2 rounded-md border border-gray-300 bg-green-400 text-sm font-medium text-white hover:bg-green-500 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
  Sell
</button>
</a>
  `.trim());*/
  });
})();
}

function css(element, style) {
	for (const property in style)
		element.style[property] = style[property];
}
// Create the element
var script = document.createElement("script");
// Add script content

// script.innerHTML = "function togg(id){if(id.style.display === 'none'){id.style.display = 'flex'}else if(id.style.display === 'flex'){id.style.display = 'none'}}";
script.innerHTML = `
function togg(){
console.log("called")
var id = document.querySelector("#draglinks");
if(id.style.display === 'none'){id.style.display = 'block'}else if(id.style.display === 'block'){id.style.display = 'none'};
};
`
// Append

document.head.appendChild(script);
var draggy = document.createElement('div');
draggy.id = "mydiv";
var draggyH = document.createElement('div');
draggyH.id = "mydivheader"
draggyH.innerText = " ";

draggy.appendChild(draggyH);

var itemToAppend = document.querySelector("body")
itemToAppend.appendChild(draggy);

let dragB = document.createElement('button')
draggy.appendChild(dragB);

var draglinks = document.createElement('div');
draglinks.id = "draglinks"
draglinks.style.display = 'none'
draggy.appendChild(draglinks);

document.querySelector("#mydiv > button").outerHTML = `
<button id="dragB" onclick=togg()>click</button>
`

//Make the DIV element draggagle:
dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
css(
document.querySelector("#mydiv"), {
    'position': 'absolute',
    'left': '290px',
    'top': '300px',
    'transform': 'translate(-50%, -50%)',
    'padding': '10px'
});
css(draggy, {

 'position': 'absolute',
  'z-index': '999',
  'background-color': '#f1f1f1',
  'text-align': 'center',
  'border': '1px solid #d3d3d3'
//  'top':'0px',
//  'left':'0px'
});
css(draggy.childNodes[0], {

  'padding': '10px',
  'cursor': 'move',
 'z-index': '10',
  'background-color': '#2196F3',
  'color': '#fff'
});

let but = document.getElementById("dragB")
but.style.fontSize = "xx-large";
// but.style.fontsize = "xx-large"
var smmourl = 'https://web.simple-mmo.com/'

var lnames = [
'marketval',
'highlight beaten prices',
'coll'
]

var links = [
'#',
'#',
'#'
]

for (let index = 0; index < links.length; index++) {
    var a = document.createElement('a');
    a.href = links[index]
  a.innerText = lnames[index]
        var li = document.createElement('li');
  var ul = document.createElement('ul');
    li.appendChild(a);
    ul.appendChild(li);
  draglinks.appendChild(ul);
}
function colltogg(){
  if(document.getElementById("colltab").style.display === 'none'){document.getElementById("colltab").style.display = 'block';document.querySelector("#mydiv").style.top = "1500px"}else if(document.getElementById("colltab").style.display === 'block'){document.getElementById("colltab").style.display = 'none';document.querySelector("#mydiv").style.top = "300px"};
}
document.querySelector("#draglinks").childNodes[0].childNodes[0].childNodes[0].addEventListener("click", GetMarketValue);
document.querySelector("#draglinks").childNodes[1].childNodes[0].childNodes[0].addEventListener("click", higher);
document.querySelector("#draglinks").childNodes[2].childNodes[0].childNodes[0].addEventListener("click", colltogg);

html = `<table id="colltab" border="1">
<thead>
<tr><th>item</th><th>cpst</th></tr>
</thead>
<tbody>
<tr><td>A Nice Rock</td><td>70,000</td></tr>
<tr><td>Banana</td><td>200,000</td></tr>
<tr><td>Cliff Flower</td><td>350,000</td></tr>
<tr><td>Cliff Flower</td><td>350,000</td></tr>
<tr><td>Cotton Candy</td><td>100,000</td></tr>
<tr><td>Damaged Scroll</td><td>60,000</td></tr>
<tr><td>Dangerous Mushroom</td><td>60,000</td></tr>
<tr><td>Fabulous Starfish</td><td>100,000</td></tr>
<tr><td>Flowers</td><td>150,000</td></tr>
<tr><td>Ink</td><td>30,000</td></tr>
<tr><td>Iron Ball</td><td>30,000</td></tr>
<tr><td>Jewel</td><td>10,000 (11,000 if 100+)</td></tr>
<tr><td>Letter of Resignation</td><td>50,000</td></tr>
<tr><td>Mirror</td><td>30,000</td></tr>
<tr><td>Mushroom</td><td>30,000</td></tr>
<tr><td>Red Shroom</td><td>50,000</td></tr>
<tr><td>Single Rose</td><td>80,000</td></tr>
<tr><td>Starfish</td><td>30,000</td></tr>
<tr><td>Tentacle</td><td>30,000</td></tr>
<tr><td>Tentacle</td><td>30,000</td></tr>
<tr><td>The Middle Finger</td><td>70,000</td></tr>
<tr><td>Wing</td><td>100,000</td></tr>
<tr><td>Empty Milk Bottle</td><td>32,000</td></tr>
<tr><td>Bone</td><td>30,000</td></tr>
<tr><td>Purple Crafting Dust</td><td>200,000</td></tr>
<tr><td>Powerball</td><td>100,000</td></tr>
<tr><td>Purple Lantern</td><td>30,000</td></tr>
<tr><td>Gold Coin</td><td>30,000</td></tr>
<tr><td>Mortar and Pestle</td><td>30,000</td></tr>
<tr><td>Forgotten Coins</td><td>30,000</td></tr>
<tr><td>Fish Tail</td><td>31,000</td></tr>
<tr><td>Raw Fish</td><td>20,000</td></tr>
<tr><td>Four Leaf Clover</td><td>30,000</td></tr>
<tr><td>Red Shroom</td><td>60,000</td></tr>
<tr><td>Mushroom</td><td>30,000</td></tr>
<tr><td>Leaf</td><td>25,000</td></tr>
<tr><td>Water Balls</td><td>45,000</td></tr>
<tr><td>Powerball</td><td>100,000</td></tr>
<tr><td>A Wall Watch</td><td>60,000</td></tr>
<tr><td>Ships Helm</td><td>60,000</td></tr>
<tr><td>Not-So-Deadly-poison</td><td>60,000</td></tr>
<tr><td>Flute</td><td>60,000</td></tr>
<tr><td>Compass</td><td>60,000</td></tr>
<tr><td>Red Lantern</td><td>150,000</td></tr>
<tr><td>Jade</td><td>100,000</td></tr>
<tr><td>Four leaf Clover</td><td>35,000</td></tr>
<tr><td>Caramel Apple</td><td>50,000</td></tr>
<tr><td>A Nice Rock</td><td>70,000</td></tr>
<tr><td>Banana</td><td>200,000</td></tr>
<tr><td>Cliff Flower</td><td>350,000</td></tr>
<tr><td>Cliff Flower</td><td>350,000</td></tr>
<tr><td>Cotton Candy</td><td>100,000</td></tr>
<tr><td>Damaged Scroll</td><td>60,000</td></tr>
<tr><td>Dangerous Mushroom</td><td>60,000</td></tr>
<tr><td>Fabulous Starfish</td><td>100,000</td></tr>
<tr><td>Flowers</td><td>150,000</td></tr>
<tr><td>Ink</td><td>30,000</td></tr>
<tr><td>Iron Ball</td><td>30,000</td></tr>
<tr><td>Jewel</td><td>10,000 (11,000 if 100+)</td></tr>
<tr><td>Letter of Resignation</td><td>50,000</td></tr>
<tr><td>Mirror</td><td>30,000</td></tr>
<tr><td>Mushroom</td><td>30,000</td></tr>
<tr><td>Red Shroom</td><td>50,000</td></tr>
<tr><td>Single Rose</td><td>80,000</td></tr>
<tr><td>Starfish</td><td>30,000</td></tr>
<tr><td>Tentacle</td><td>30,000</td></tr>
<tr><td>Tentacle</td><td>30,000</td></tr>
<tr><td>The Middle Finger</td><td>70,000</td></tr>
<tr><td>Wing</td><td>100,000</td></tr>
<tr><td>Empty Milk Bottle</td><td>32,000</td></tr>
<tr><td>Bone</td><td>30,000</td></tr>
<tr><td>Purple Crafting Dust</td><td>200,000</td></tr>
<tr><td>Powerball</td><td>100,000</td></tr>
<tr><td>Purple Lantern</td><td>30,000</td></tr>
<tr><td>Gold Coin</td><td>30,000</td></tr>
<tr><td>Mortar and Pestle</td><td>30,000</td></tr>
<tr><td>Forgotten Coins</td><td>30,000</td></tr>
<tr><td>Fish Tail</td><td>31,000</td></tr>
<tr><td>Raw Fish</td><td>20,000</td></tr>
<tr><td>Four Leaf Clover</td><td>30,000</td></tr>
<tr><td>Red Shroom</td><td>60,000</td></tr>
<tr><td>Mushroom</td><td>30,000</td></tr>
<tr><td>Leaf</td><td>25,000</td></tr>
<tr><td>Water Balls</td><td>45,000</td></tr>
<tr><td>Powerball</td><td>100,000</td></tr>
<tr><td>A Wall Watch</td><td>60,000</td></tr>
<tr><td>Ships Helm</td><td>60,000</td></tr>
<tr><td>Not-So-Deadly-poison</td><td>60,000</td></tr>
<tr><td>Flute</td><td>60,000</td></tr>
<tr><td>Compass</td><td>60,000</td></tr>
<tr><td>Red Lantern</td><td>150,000</td></tr>
<tr><td>Jade</td><td>100,000</td></tr>
<tr><td>Four leaf Clover</td><td>35,000</td></tr>
<tr><td>Caramel Apple</td><td>50,000</td></tr>
</tbody>
</table>`
document.querySelector("#draglinks").childNodes[2].childNodes[0].childNodes[0].insertAdjacentHTML("afterend", html);
  document.getElementById("colltab").style.display = "none"
