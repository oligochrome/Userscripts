// ==UserScript==
// @name        smmo - keybinds - simple-mmo.com
// @namespace   - simple-mmo.com - 
// @match       https://web.simple-mmo.com/armoury/*
// @grant       none
// @version     1.0
// @author      -
// @description 9/10/2022, 8:49:14 PM
// ==/UserScript==
function increasePageNumber() {
    const activeElement = document.activeElement;

    // Check if the active element is an input or text area
    if (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA') {
        return; // Do nothing if an input or text area has focus
    }

    const { href } = location;
    const u = href.split(/(\d+)(\D*)$/);

    if (u.length !== 1) {
        let n = u[1];
        const l = n.length;
        n = String(parseInt(n.replace(/^0*(.)/, '$1')) + 1);

        if (u[1].charAt(0) === '0') {
            while (n.length < l) {
                n = '0' + n;
            }
        }

        u[1] = n;
        location.href = u.join('');
    }
}


 function decreasePageNumber() {
 const { href } = location;
    const u = href.split(/(\d+)(\D*)$/);

    if (u.length !== 1) {
        let n = u[1];
        const l = n.length;
        n = String(parseInt(n.replace(/^0*(.)/, '$1')) - 1);

        if (u[1].charAt(0) === '0') {
            while (n.length < l) {
                n = '0' + n;
            }
        }

        u[1] = n;
        location.href = u.join('');
    }
    }
function controlKeydown(event){
  if (event.defaultPrevented) {
    return
  }
  switch (event.key) {
  /*  case "b":
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
*/
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
  /*  case "b":
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
      break;*/
      case "2":
          increasePageNumber()
          break;
      case "1":
          decreasePageNumber()
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