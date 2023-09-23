// ==UserScript==
// @name        SMMO - failed storage auto attempt- simple-mmo.com
// @namespace      https://github.com/oligochrome
// @match       https://web.simple-mmo.com/inventory/storage
// @grant       none
// @version     1.0
// @author      Ogliochrome
// @description 12/6/2022, 12:13:24 AM
/* @require     https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js*/
// ==/UserScript==

var storageqty = document.body.getElementsByClassName('text-gray-500 font-semibold mr-4 text-xs sm:text-sm  flex-shrink-0')[0]
var script = document.createElement("script");
script.innerHTML = `
  async function storagerem(){
    if(storageqty){ document.querySelector("#amount").value = tstorageqty.innerText}
 }
`

let buttons = $("[Id^='storage_button_']")
for (let index = 0; index < buttons.length; index++) {
    buttons[index].childNodes[1].setAttribute('onclick', "null;storagerem();")
}