// ==UserScript==
// @name           Neopets - Kiss the Mortog Autoplayer
// @namespace      https://github.com/oligochrome
// @description    Automatically plays kiss the mortog and collects 250k np
// @author         oligochrome
// @copyright      2019 oligochrome
// @license        GNU GPL
// @version        1.0
// @language       en
// @include		     *neopets.com/medieval/kissthemortog.phtml*
// @grant          none
// ==/UserScript==

var bih = document.body.innerHTML;
var x = 1000 // Adds page delay, 1000 = 1 second. Adjust to your liking.
var numFrogs = document.evaluate('count(//a[contains(@href, "type=frogprince&num=")])', document, null, XPathResult.ANY_TYPE, null); // Counts frogs on the page

function timeout() { //Page delay function

    if (bih.match('Select your Mortog')) {
        var a = document.evaluate('//a[contains(@href, "type=frogprince&num=")]', document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null); // Grabs frog links
        if (a) {
            doclick9 = a.snapshotItem(Math.floor(Math.random() * numFrogs.numberValue)); // randomise the frog selection
            doclick9.click();
        }
    } else if (document.querySelector("input[value='Collect Your Winnings - 250,000 NP']")) {
        document.querySelector("input[value='Collect Your Winnings - 250,000 NP']").click();
    } else if (bih.match('At least you only lost')) {
        $("input[value='Try again...']").click();
    } else if (bih.match('You have won')) {
        $("input[value='Continue']").click();
    }
}
window.setTimeout(timeout, x)
