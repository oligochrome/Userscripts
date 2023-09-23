// ==UserScript==
// @name        New script - jinjaccalgkegednnccohejagnlnfdag
// @namespace   Violentmonkey Scripts
// @match       https://web.simple-mmo.com/inventory/storage*
// @grant       none
// @version     1.0
// @author      -
// @description 09/09/2023, 08:15:00
// ==/UserScript==
//let selector = tem-95257-block
//document.getElementById("checkboxInput").checked
document.getElementsByClassName("hidden xl:table-row")[0].className= "xl:table-row"
let xxx = document.getElementsByClassName("hidden xl:table-cell")
for (let index = 0;index<xxx.length;index++){if(xxx[index].innerHTML.includes("checkbox")){xxx[index].className = "xl:table-cell"}}