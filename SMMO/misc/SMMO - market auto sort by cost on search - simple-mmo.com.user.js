// ==UserScript==
// @name        SMMO -  market auto sort by cost on search - simple-mmo.com
// @namespace      https://github.com/oligochrome
// @match       https://web.simple-mmo.com/market/listings*
// @exclude     https://web.simple-mmo.com/market/listings?user_id=476520
// @exclude     https://web.simple-mmo.com/market/listings?type[]=
// @grant       none
// @version     1.0
// @author      Ogliochrome
// @description 10/6/2022, 10:14:50 PM
/* @require     https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js*/
// ==/UserScript==
if(window.location.href.includes("order_col=cost&order=asc")){null}else{
if(window.location.href.includes("page= || new_page=true")){null}else{window.location.href = window.location.href + '&order_col=cost&order=asc&page=1'}

}
//
