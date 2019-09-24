// ==UserScript==
// @name           Neopets - Stock Market - Autofill 1000 for new purchase
// @namespace      https://github.com/oligochrome
// @description    Fills 1000 for all new stock buys
// @author         oligochrome
// @copyright      2019 oligochrome
// @license        GNU GPL
// @version        1.0
// @language       en
// @include         *neopets.com/stockmarket.phtml?type=buy&ticker=*
// @grant          none
// ==/UserScript==

$("input[name=amount_shares]").val('1000');
