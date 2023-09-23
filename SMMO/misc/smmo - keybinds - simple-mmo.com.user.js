// ==UserScript==
// @name        smmo - keybinds - simple-mmo.com
// @namespace   - simple-mmo.com - 
// @include       https://web.simple-mmo.com/*
// @grant       none
// @version     1.0
// @author      -
// @description 9/10/2022, 8:49:14 PM
// @require     https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js
// ==/UserScript==

function controlKeydown(event){
  if (event.defaultPrevented) {
    return
  }
  switch (event.key) {
    case "b":
      window.location.href = "https://web.simple-mmo.com/bank"
      break;
    case "t":
      window.location.href = "https://web.simple-mmo.com/town"
      break;
    case "c":
      window.location.href = "https://web.simple-mmo.com/collection/avatars"
      break;
    case "l":
      window.location.href = "https://web.simple-mmo.com/leaderboards"
      break;
    case "Down":
    case "ArrowDown":
    case " ":
    case "Spacebar":
    default:
      return
  }
  event.preventDefault();
}
function controlKeyup(event){
  if (event.defaultPrevented) {
    return
  }
  switch (event.key) {
    case "b":
      window.location.href = "https://web.simple-mmo.com/battle/menu"
      break;
    case "t":
      window.location.href = "https://web.simple-mmo.com/travel"
      break;
    case "i":
      window.location.href = "https://web.simple-mmo.com/inventory/items"
      break;
    case "q":
      window.location.href = "https://web.simple-mmo.com/quests/viewall"
      break;
    case "j":
      window.location.href = "https://web.simple-mmo.com/jobs/viewall"
      break;
    case "g":
      window.location.href = "https://web.simple-mmo.com/guilds/menu"
      break;
    case "c":
      window.location.href = "https://web.simple-mmo.com/character"
      break;
    case "p":
      window.location.href = "https://web.simple-mmo.com/user/view/476520"
      break;
    default:
      return
  }
  event.preventDefault()
}

window.addEventListener("keydown", function (event) {
  controlKeydown(event)
}, true)
window.addEventListener("keyup", function (event) {
  controlKeyup(event)
}, true)