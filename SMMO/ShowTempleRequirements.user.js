// ==UserScript==
// @name       temple show reqs - simple-mmo.com
// @namespace      https://github.com/oligochrome
// @match       https://web.simple-mmo.com/temple
// @update-url  https://github.com/oligochrome/Userscripts/raw/master/SMMO/ShowTempleRequirements.user.js
// @grant       none
// @version     1.0
// @author      Ogliochrome
// @description 10/3/2022, 10:39:12 PM
// @run-at      document-idle
// ==/UserScript==

let a = document.getElementsByClassName('divide-y divide-gray-200 dark:divide-gray-800')[0]
let p = document.getElementsByClassName('py-6 max-w-6xl mx-auto px-4 sm:px-6 md:px-8')[0].nextElementSibling

let itemreq = p.innerHTML.split(' 1x ')[1]
itemreq = itemreq.split('\',\n')[0];

let b = a.firstElementChild.cloneNode(true)
a.appendChild(b)
b.childNodes[1].href = "https://web.simple-mmo.com/market/listings?item_name=" + itemreq + "&order_col=cost&order=asc&page=1"
let q1 = document.getElementsByClassName('text-sm font-medium text-indigo-600 truncate')[6]
let q2 = document.getElementsByClassName('flex items-center text-sm text-gray-500')[6]

q1.innerText = "Requirement: "
q1.style.fontSize = "x-large";
q2.id = "reqq"
q2.childNodes[1].remove()
document.getElementById("reqq").innerText = itemreq
document.getElementById("reqq").style.fontSize = "x-large";
let x = document.getElementsByClassName('w-12 mr-4')
x[x.length - 1].firstChild.src = "https://web.simple-mmo.com/img/icons/I_Leaf.png"
