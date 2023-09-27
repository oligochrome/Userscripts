// ==UserScript==
// @name        SMMO - smmo inv buttons
// @updateURL   https://github.com/oligochrome/scripts/raw/main/SMMO - smmo inv buttons.user.js
// @namespace   smmo inv buttons
// @match       https://web.simple-mmo.com/inventory
// @match       https://web.simple-mmo.com/inventory/*
// @match       https://web.simple-mmo.com/inventory/storage*
/*// @match       https://web.simple-mmo.com/market/listings* */
// @version     1.0.0
// @require     https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js
// @description 8/8/2022, 9:20:10 PM
// ==/UserScript==
// check which user is logged in
document.getElementsByClassName('text-center mt-2')[0].style.display = ''

/*

let user = document.getElementsByClassName("text-sm font-medium text-gray-700 group-hover:text-gray-900")[0].textContent.split(`\n                    ``)[1].split('\n                  ')[0]
if(user === "Alcoolemia"){localStorage.setItem("smmoUN","Alcoolemia")}
if(user === "lazyriches"){localStorage.setItem("smmoUN","lazyriches")}
if(user === "Guides"){localStorage.setItem("smmoUN","Guides")}
"lazyriches" === localStorage.getItem("smmoUN") && (un = 0), "Alcoolemia" === localStorage.getItem("smmoUN") && (un = 0), "Guides" === localStorage.getItem("smmoUN") && (un = 0);
 *
 * */

// start script into head
var script = document.createElement("script");
script.innerHTML = `

    const sleep = (milliseconds) => {
      return new Promise(resolve => setTimeout(resolve, milliseconds))
     }

 var un = 0;
 var mbank = localStorage.getItem("marketbank");

  async function task(mp){
    if(document.querySelector("#swal-input1")){ document.querySelector("#swal-input1").value = document.querySelector("#swal-input1").max};
      if(mbank === "true"){ if(document.querySelector("#bank_payment")){document.querySelector("#bank_payment").checked = true;}}
        if(document.querySelector("#swal-input2")){document.querySelector("#swal-input2").value = mp-500}
  }

async function taska(){
if(document.body.getElementsByClassName('swal2-input')[0])
{
    document.body.getElementsByClassName('swal2-input')[0].value = document.body.getElementsByClassName('swal2-input')[0].max
}
  }
 `;
document.head.appendChild(script); // end head script
/*
 * let getColl = document.body.getElementsByClassName("inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs sm:text-sm font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500");
for(let index = 1; index < 20; index += 1) {
	getColl[index].setAttribute('onclick', getColl[index].getAttribute('onclick') + ";taska();");
}
*/
if(window.location.href.includes('Material')){
if(document.querySelector("body > div.h-screen.flex.overflow-hidden.bg-gray-100 > div.flex.flex-col.w-0.flex-1.overflow-hidden.relative > main > div.web-app-container > div > div.mt-8 > div.mt-4 > div.sm\\:px-6.lg\\:px-0.lg\\:col-span-10 > div.text-center.text-xs.mt-4")){document.querySelector("body > div.h-screen.flex.overflow-hidden.bg-gray-100 > div.flex.flex-col.w-0.flex-1.overflow-hidden.relative > main > div.web-app-container > div > div.mt-8 > div.mt-4 > div.sm\\:px-6.lg\\:px-0.lg\\:col-span-10 > div.text-center.text-xs.mt-4").remove()}
  document.body.getElementsByClassName('sm:px-6 lg:px-0 lg:col-span-10')[0].firstChild.remove()
}

function hideworseeq() {
	for(let index = 2; index < document.getElementsByTagName("i").length; index += 1) {
		if(document.getElementsByTagName("i")[index].outerHTML.includes("fa fa-caret-down")) {
			document.getElementsByTagName("i")[index].parentElement.parentElement.style.display = "none";
		}
	}
}

function GetMarketVals() {
	(async function() {
		const lastColumnHeader = document.querySelector('table thead th:last-child');
		lastColumnHeader.insertAdjacentHTML('beforebegin', `
<th scope="col" class="hidden xl:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
<a class="text-indigo-800 font-semibold hover:text-indigo-900" href="#!">
  Market Value
</a>
</th>
  `.trim());
		const items = document.querySelectorAll('tr[id^="item-"]');
		items.forEach(async(item) => {
			const id = item.id.slice(5);
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
			const lastColumn = item.querySelector('td:last-child');
			lastColumn.classList.remove('text-right');
			lastColumn.classList.add('text-left');
			lastColumn.insertAdjacentHTML('afterbegin', `
<a onclick="if (!window.__cfRLUnblockHandlers) return false; marketSellItem(${itemId}, '${name}', '${icon}', ${quantity});task(parseFloat('${marketPrice}'.replace(/,/g, '')));" href="javascript:;">
<button type="button" class="dark:text-white relative inline-flex items-center px-4 py-2 rounded-md border border-gray-300 bg-green-400 text-sm font-medium text-white hover:bg-green-500 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
  Sell
</button>
</a>
  `.trim());
		});
	})();
}
document.querySelector("body > div.h-screen.flex.overflow-hidden.bg-gray-100 > div.flex.flex-col.w-0.flex-1.overflow-hidden.relative > main > div.web-app-container > div > div.mt-8 > div > div > div.block.xl\\:hidden.text-center.mb-2").style.display = "inline-flex";
let buttons = document.body.getElementsByClassName('sm:px-6 lg:px-0 lg:col-span-10')[0].childNodes[3];
buttons.setAttribute("style","margin-bottom: 0;display: inline-flex;")
let invButtons = document.createElement('div');
invButtons.setAttribute('class',"block xl:hidden text-center mb-2")
invButtons.setAttribute('style',"display: flex;")
buttons.insertAdjacentElement("afterEnd", invButtons);
var element = invButtons;

function makeButt(newLink, newName, mVals) {
	if(mVals === undefined) {
		let x = document.createElement('a');
		x.innerHTML = "\<a href=\"" + newLink + "\" class=\"inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500\">" + newName + "</a>";
		element.appendChild(x);
	} else if(mVals === "1") {
		let x = document.createElement('a');
		x.innerHTML = "\<a href=\"" + newLink + "\" class=\"inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500\">" + newName + "</a>";
		x.addEventListener("click", GetMarketVals);
		element.appendChild(x);
	}
  else if(mVals === "2") {
110
    let x = document.createElement('a');
111
    x.innerHTML = "\<a href=\"" + newLink + "\" class=\"inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500\">" + newName + "</a>";
112
    x.addEventListener("click", toggle);
113
    element.appendChild(x);
114
  }
}
var heq = document.createElement('a');
heq.innerHTML = "\<a href=\#\" class=\"inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500\">\"hideworseeq\"</a>";
heq.addEventListener("click", hideworseeq);
element.appendChild(heq);
var HlDisableBut = document.createElement('div');
HlDisableBut.innerHTML = "<a href=\"javascript:;\" onclick=\"dooo()\" class=\"inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500\">Enable Highlighting</a>";
element.appendChild(HlDisableBut);

let i = document.createElement('i')
i.setAttribute("class", "fa fa-caret-down");

let qtybutton = document.body.getElementsByClassName('sm:px-6 lg:px-0 lg:col-span-10')[0].childNodes[3].childNodes[1]

let qtydesc = document.createElement('a');
qtydesc.innerText = "Qty"
qtydesc.appendChild(i)
qtydesc.setAttribute("class","inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500")
qtydesc.href = qtybutton.href.replace("asc", "desc");


qtydesc.appendChild(i)

qtybutton.insertAdjacentElement("afterEnd", qtydesc);
qtybutton.href = qtybutton.href.replace("desc", "asc");
  //.split('asc')[0] + "desc";

qtybutton.insertAdjacentElement("afterEnd", qtydesc);


function toggle () {

    $( '#container input[type="checkbox"]' ).prop('checked', this.checked)

  }
if(window.location.href.includes("https://web.simple-mmo.com/inventory/items")){
document.getElementById('check_all').parentElement.parentElement.className = "xl:table-row"}
if(window.location.href.includes("storage")){
  makeButt("https://web.simple-mmo.com/inventory/storage?item_name=%5C%28tradable%5C%29&min_level=&max_level=","Tradables")
}
makeButt("https://web.simple-mmo.com/inventory/items?itemname=&minlevel=&maxlevel=&type%5B%5D=Weapon&type%5B%5D=Armour&type%5B%5D=Amulet&type%5B%5D=Shield&type%5B%5D=Boots&type%5B%5D=Helmet&type%5B%5D=Greaves&type%5B%5D=Gauntlet", "EQS");
makeButt("https://web.simple-mmo.com/inventory/items?itemname=Mushroom+of+Energy+%2B1&minlevel=&maxlevel=", "MoE+1");
makeButt("#", "GetMarketValues", "1");
makeButt("#", "togglecheck", "2");
makeButt("https://web.simple-mmo.com/inventory/items?type%5B0%5D=Food&order_col=amount&order=desc&page=1", "Food");