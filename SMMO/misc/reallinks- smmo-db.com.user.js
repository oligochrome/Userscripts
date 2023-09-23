// ==UserScript==
// @name        reallinks- smmo-db.com
// @updateURL   https://github.com/oligochrome/scripts/raw/main/reallinks- smmo-db.com.user.js
// @namespace      https://github.com/oligochrome
// @match       https://smmo-db.com/items/show/*
// @grant       none
// @version     1.0.0
// @author      Ogliochrome
// @description 5/17/2023, 8:43:27 AM

// ==/UserScript==
/*
let but1 = document.querySelector("body > div > main > div > div > div > div.mt-4 > div > button:nth-child(1)")
let but2 = document.querySelector("body > div > main > div > div > div > div.mt-4 > div > button:nth-child(2)")
let x = but1.attributes[1].value.replace("openLink('","openLink('https://web.simple-mmo.com")
let y = but2.attributes[1].value.replace("openLink('","openLink('https://web.simple-mmo.com")
but1.setAttribute("onclick", x)
but2.setAttribute("onclick", y)


but1.setAttribute("href",but1.attributes[1].value.split('openLink(\'')[1].split('\')'))

but1.removeAttribute("onclick")
*/

let but1 = document.querySelector("body > div > main > div > div > div > div.mt-4 > div > button:nth-child(1)");
let onclickAttributeValue1 = but1.getAttribute("onclick");
but1.removeAttribute("onclick")
let link1 = onclickAttributeValue1.split('openLink(\'')[1].split('\')')[0];
link1 = link1.replace(',', '');
link1 = link1.replace('?new_page=true','')// Fix: Replace the comma
let anchorTag1 = `<a href="https://web.simple-mmo.com${link1}">${but1.outerHTML}</a>`;
but1.outerHTML = anchorTag1;
but1.removeAttribute("onclick");


let but2 = document.querySelector("body > div > main > div > div > div > div.mt-4 > div > button:nth-child(2)");
let onclickAttributeValue2 = but2.getAttribute("onclick");
but2.removeAttribute("onclick")
let link = onclickAttributeValue2.split('openLink(\'')[1].split('\')')[0];
link = link.replace(',', ''); // Fix: Replace the comma
let anchorTag = `<a href="https://web.simple-mmo.com${link}">${but2.outerHTML}</a>`;
but2.outerHTML = anchorTag;
but2.removeAttribute("onclick");
