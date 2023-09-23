// ==UserScript==
// @name        New script - facebook.com
// @updateURL   https://github.com/oligochrome/scripts/raw/main/New script - facebook.com.user.js
// @namespace   Violentmonkey Scripts
// @match       https://www.facebook.com/reel/*
// @match       https://snapsave.app/
// @grant       none
// @version     1.0.0
// @author      -
// @description 10/22/2022, 4:10:55 AM
// @grant       GM_setValue
// @grant       GM_getValue
// ==/UserScript==

if(window.location.href === "https://snapsave.app/"){document.querySelector("#url").value = GM_getValue("fburl")}else{
  if(window.location.href.includes("www.facebook.com/reel/")){
const fburl = window.location.href
localStorage.setItem('fburl',fburl)
GM_setValue("fburl",fburl);}
/*let idek = GM_getValue("fburl")
console.log(idek)*/

function css(element, style) {
	for (const property in style){
		element.style[property] = style[property];}
}
// Create the element
var script = document.createElement("script");
// Add script content

// script.innerHTML = "function togg(id){if(id.style.display === 'none'){id.style.display = 'flex'}else if(id.style.display === 'flex'){id.style.display = 'none'}}";
script.innerHTML = `
function togg(){
console.log("called")
var id = document.querySelector("#draglinks");
if(id.style.display === 'none'){id.style.display = 'block'}else if(id.style.display === 'block'){id.style.display = 'none'};
};
`
// Append

document.head.appendChild(script);
var draggy = document.createElement('div');
draggy.id = "mydiv";
var draggyH = document.createElement('div');
draggyH.id = "mydivheader"
draggyH.innerText = " ";

draggy.appendChild(draggyH);

var itemToAppend = document.querySelector("body")
itemToAppend.appendChild(draggy);

let dragB = document.createElement('button')
draggy.appendChild(dragB);

var draglinks = document.createElement('div');
draglinks.id = "draglinks"
draglinks.style.display = 'none'
draggy.appendChild(draglinks);

document.querySelector("#mydiv > button").outerHTML = `
<button id="dragB" onclick=togg()>click</button>
`

//Make the DIV element draggagle:
dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
css(
document.querySelector("#mydiv"), {
    'position': 'absolute',
    'left': '100px',
    'top': '300px',
    'transform': 'translate(-50%, -50%)',
    'padding': '10px'
});
css(draggy, {

 'position': 'absolute',
  'z-index': '999',
  'background-color': '#f1f1f1',
  'text-align': 'center',
  'border': '1px solid #d3d3d3'
//  'top':'0px',
//  'left':'0px'
});
css(draggy.childNodes[0], {

  'padding': '10px',
  'cursor': 'move',
 'z-index': '10',
  'background-color': '#2196F3',
  'color': '#fff'
});

let but = document.getElementById("dragB")
but.style.fontSize = "xx-large";
// but.style.fontsize = "xx-large"
var smmourl = 'https://web.simple-mmo.com/'

var lnames = [
'snap'
]

var links = [
'https://snapsave.app'
]

for (let index = 0; index < links.length; index++) {
    var a = document.createElement('a');
    a.href = links[index]
  a.innerText = lnames[index]
        var li = document.createElement('li');
    li.appendChild(a);

    var ul = document.createElement('ul');
    ul.appendChild(li);

    draglinks.appendChild(ul);
}

}