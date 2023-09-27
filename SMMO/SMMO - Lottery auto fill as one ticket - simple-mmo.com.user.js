// ==UserScript==
// @name        SMMO - Lottery auto fill as one ticket - simple-mmo.com
// @namespace      https://github.com/oligochrome
// @match       https://web.simple-mmo.com/gamecentre/lottery/*
// @grant       none
// @version     1.0
// @author      Ogliochrome
// @description 10/3/2022, 1:03:31 AM

// ==/UserScript==

let getit = document.body.getElementsByClassName('focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none rounded-l-md sm:text-sm border-gray-300')[0].value = "1";