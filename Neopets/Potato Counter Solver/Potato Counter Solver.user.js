// ==UserScript==
// @name		   Neopets - Potato Counter Solver
// @namespace      https://github.com/oligochrome
// @description    Automatically plays Potato Counter
// @author         oligochrome
// @copyright      2019 oligochrome
// @license        GNU GPL
// @version        1.0
// @language       en
// @include		   *.neopets.com/medieval/potatocounter.*
// @grant          none
// ==/UserScript==


// Okay so it's not pretty, but this is an effective way to count the potatoes. Previously the value was accessible via the source.
value=document.evaluate("count(/html/body/div/div[3]/table/tbody/tr/td[2]/table/tbody/tr/td/img)",document,null,1,null).numberValue
// The guess should be in the box now..So we'll click the button
$("input[value='Guess!']").click();
// Well if we're here then it's worked so far. Last bit of code restarts it ^__^
$("input[value='Play Again']").click();
