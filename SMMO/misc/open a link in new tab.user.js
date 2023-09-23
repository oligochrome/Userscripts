// ==UserScript==
// @name           open a link in new tab
// @namespace      https://github.com/oligochrome
// @description    sdfds
// @author         oligochrome
// @copyright      2019 oligochrome
// @license        GNU GPL
// @version        1.0
// @language       en
// @match https://www.google.com/
// @grant          GM_openInTab
// ==/UserScript==

var i = 1;

if (i == '1'){
  GM_openInTab("https://www.google.com/", openInBackground = true)
}