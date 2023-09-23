// ==UserScript==
// @name        astats replace run link with install- astats.nl
// @updateURL   https://github.com/oligochrome/scripts/raw/main/astats replace run link with install- astats.nl.user.js
// @namespace      https://github.com/oligochrome
// @match       https://astats.astats.nl/astats/Steam_Game_Info.php
// @grant       none
// @version     1.0.0
// @author      Ogliochrome
// @description 4/15/2023, 2:31:02 AM

// ==/UserScript==
let link = document.getElementsByClassName('content')[0]
let newlink = link.href.split('steam://run/')[1]
newlink = "steam://install/" + newlink
link.href = newlink