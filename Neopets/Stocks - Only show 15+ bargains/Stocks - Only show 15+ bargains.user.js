// ==UserScript==
// @name        Neopets - Only show 15+ stocks on Bargains page
// @namespace   Violentmonkey Scripts
// @match       http://www.neopets.com/stockmarket.phtml?type=list&search=%&bargain=true
// @grant       none
// @version     1.0
// @author      -
// @description 24/12/2019, 03:55:34
// ==/UserScript==

let i;
for (i = 0; i < 35; i++) {
if (document.querySelector("#content > table > tbody > tr > td.content > table > tbody > tr:nth-child(2) > td:nth-child(6)").innerText < 15) {document.querySelector("#content > table > tbody > tr > td.content > table").deleteRow(1)}
}
