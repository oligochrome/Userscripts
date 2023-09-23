// ==UserScript==
// @name        SMMO - modal window prefs- simple-mmo.com
// @updateURL   https://github.com/oligochrome/scripts/raw/main/SMMO - modal window prefs- simple-mmo.com.user.js
// @namespace      https://github.com/oligochrome
// @match       https://web.simple-mmo.com/*
// @grant       GM_registerMenuCommand
// @version     1.0.0
// @author      Ogliochrome
// @description 1/31/2023, 11:35:09 AM

// ==/UserScript==

// When the user clicks the button, open the modal

var script = document.createElement("script");
script.innerHTML = `
function togg() {
 if(prefm.style.display = "block"){prefm.style.display = "none"}else if(prefm.style.display = "none"){prefm.style.display = "block"}
}
`
document.head.appendChild(script);
let mht1 = document.createElement("div")
let mht = `<div id="prefprefm" class="prefm" style="display:none">
  <div id="prefm-content">
<button class="close" onclick="togg()">&times;</button>
    <p>Some text in the prefm..</p>
  </div>
</div>
`
mht1.innerHTML = mht

let n = document.createElement("div")
n.innerHTML = mht
let sidebar = document.getElementsByClassName('flex flex-col flex-grow border-r border-gray-200  pt-5 bg-white dark:bg-gray-950 overflow-y-auto')[0]
sidebar.insertAdjacentElement("beforebegin",n)
let mbut =  document.createElement("button");
mbut.setAttribute("onclick","togg")
mbut.setAttribute("id", "prefbutton");
mbut.innerText = "Click Me";



// Add the button to the document body or any desired parent element
n.appendChild(mbut);
var prefcss = document.getElementById("prefprefm").style


prefcss.display = "none";
prefcss.position = "fixed";
prefcss.zIndex = "1";
prefcss.paddingTop = "100px";
prefcss.left = "0";
prefcss.top = "0";
prefcss.width = "100%";
prefcss.height = "100%";
prefcss.overflow = "auto";
prefcss.backgroundColor = "rgb(0,0,0)";
prefcss.backgroundColor = "rgba(0,0,0,0.4)";

var prefcssa = document.getElementById("prefm-content")

prefcssa.style.backgroundColor = "#fefefe";
prefcssa.style.margin = "auto";
prefcssa.style.padding = "20px";
prefcssa.style.border = "1px solid #888";
prefcssa.style.width = "80%";


var prefcssb = document.getElementById("prefm-content").childNodes[1].style

prefcssb.color = "#aaaaaa";
prefcssb.float = "right";
prefcssb.fontSize = "28px";
prefcssb.fontWeight = "bold";





//document.head.appendChild(prefcss);



//var modal = document.getElementById("prefmodal");

//var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
//var span = document.getElementsByClassName("close")[0];



// When the user clicks on <span> (x), close the modal
//span.onclick = function() {
//  modal.style.display = "none";
//}

// When the user clicks anywhere outside of the modal, close it
/*
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
*/



//.close:hover,
//.close:focus {
//  color: #000;
//  text-decoration: none;
//  cursor: pointer;
//}
//</style>

//GM_registerMenuCommand('Prefs', togg)
