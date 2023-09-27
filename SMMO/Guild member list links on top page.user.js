// ==UserScript==
// @name        SMMO - Guild member list links on top page - simple-mmo.com
// @updateURL   https://github.com/oligochrome/scripts/raw/main/SMMO - Guild member list links on top page - simple-mmo.com.user.js
// @namespace      https://github.com/oligochrome
// @match       https://web.simple-mmo.com/guilds/view/971/members*
// @match       https://web.simple-mmo.com/guilds/view/*/members?page=*
// @match       https://web.simple-mmo.com/guilds/view/39/members*
// @grant       none
// @version     1.0.0
// @author      Ogliochrome
// @description 4/14/2023, 12:33:24 AM
// @updateURL https://github.com/oligochrome/scripts/blob/raw/SMMO%20-%20Guild%20member%20list%20links%20on%20top%20page%20-%20simple-mmo.com.user.js
// ==/UserScript==

let menu = document.getElementsByClassName('divide-y divide-gray-200 dark:divide-gray-800')
let ddbutton = document.getElementsByClassName('rounded bg-white py-1 text-sm  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-800 hover:bg-gray-50 dark:bg-gray-900')
for(let index = 0; index < menu.length; index++) {

	if(menu[index].className === "divide-y divide-gray-200 dark:divide-gray-800 infinite-scroll") {} else {
		let nav = document.createElement('div')
		nav.className = "topnav"
		nav.innerHTML = menu[index].innerHTML
		if(ddbutton[index] !== undefined) {
			ddbutton[index].insertAdjacentElement('beforebegin', nav)
		}
	}

}
let gbut = document.getElementsByClassName('rounded bg-white py-1 text-sm  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-800 hover:bg-gray-50 dark:bg-gray-900')
for(let index = 0; index < gbut.length; index++) {
	if(gbut[index].attributes[1].value === "more_options=true") {
		gbut[index].style.display = "none"
	} else if(gbut[index].innerText === "Profile") {
		gbut[index].outerHTML = `<button type="button" class="rounded bg-white py-1 px-2 text-sm  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-800 hover:bg-gray-50 dark:bg-gray-900" style="
    width: -webkit-fill-available;
">Profile</button>`
	}
}
