// ==UserScript==
// @name        commonfuncs
// @namespace      https://github.com/oligochrome
// @grant       none
// @version     1.0
// @author      Ogliochrome
// @description 3/5/2023, 10:26:27 PM
// ==/UserScript==

function newbutt(name,url){
    let hyp = document.createElement("a");
    hyp.href = url
    let butt = document.createElement("button");
    butt.type = "button"
    butt.className = "relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
    butt.innerText = name
    hyp.appendChild(butt);
    return hyp
}
