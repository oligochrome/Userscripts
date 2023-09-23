// ==UserScript==
// @name        SMMO - make remove auto remove - simple-mmo.com
// @namespace      https://github.com/oligochrome
// @match       https://web.simple-mmo.com/market/listings?user_id=476520*
// @grant       none
// @version     1.0
// @author      Ogliochrome
// @description 11/12/2022, 9:26:36 AM
// @require     https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js
// @inject-into page
// ==/UserScript==

var script = document.createElement("script");
script.innerHTML = `
async function changebutton(newid){
fetch('/api/market/remove/'+newid,{method: 'POST',}).then(response => response.json()).then(function(data){if (data.type != 'success');return Swal.fire(data.title,data.result,data.type);document.getElementById('listing-'+item.id).remove();return Swal.fire(data.title,data.result,data.type)});
}
`
document.head.appendChild(script);
var getrows = $('[class*="dark:hover:bg-gray-850"]')
var newid
for (let index = 0; index < getrows.length; index++) {
    newid = $('[class*="dark:hover:bg-gray-850"]')[index].id.split('-')[1];
$('[class*="dark:hover:bg-gray-850"]')[index].childNodes[9].childNodes[1].setAttribute("x-on:click","changebutton(newid)")
}