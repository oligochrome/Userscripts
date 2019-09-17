// ==UserScript==
// @name		   items.jellyneo.net - _blank to _self
// @namespace      https://github.com/oligochrome
// @description    Forces links on items.jellyneo.net to open in the same window
// @author         oligochrome
// @copyright      2019 oligochrome
// @license        GNU GPL
// @version        1.0
// @language       en
// @include        https://items.jellyneo.net/item/*
// @grant          none
// ==/UserScript==

var a = document.getElementsByTagName('a');
for (i = 0; i < a.length; i++) a[i].setAttribute('target','_self');
