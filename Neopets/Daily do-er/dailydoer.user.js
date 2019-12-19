
// ==UserScript==
// @name           Neopets - Dailies do-er
// @namespace      https://github.com/oligochrome
// @description    Automates tedious daily functions
// @author         oligochrome
// @copyright      2019 oligochrome
// @license        GNU GPL
// @version        1.1.1
// @language       en
// @match http://www.neopets.com/faerieland/springs.phtml
// @match http://www.neopets.com/wishing.phtml
// @match http://www.neopets.com/wishing.phtml?thanks=21&xt=
// @match http://www.neopets.com/games/lottery.phtml
// @match http://www.neopets.com/games/process_lottery.phtml
// @match http://www.neopets.com/medieval/turdlebetting.phtml
// @match http://www.neopets.com/medieval/turmaculus.phtml
// @match http://www.neopets.com/altador/council.phtml
// @match http://www.neopets.com/altador/council.phtml?prhv=a60ef8d87426ebb141660602ac9a77dd
// @match http://www.neopets.com/halloween/scratch.phtml
// @match http://www.neopets.com/halloween/scratch2.phtml
// @match http://www.neopets.com/water/fishing.phtml
// @match http://www.neopets.com/jelly/jelly.phtml
// @match http://www.neopets.com/worlds/geraptiku/tomb.phtml
// @match http://www.neopets.com/prehistoric/omelette.phtml
// @match http://www.neopets.com/halloween/applebobbing.phtml
// @match http://www.neopets.com/pirates/anchormanagement.phtml
// @match http://www.neopets.com/halloween/gravedanger/index.phtml
// @match http://www.neopets.com/winter/adventcalendar.phtml
// @match http://www.neopets.com/island/tombola.phtml
// @match http://www.neopets.com/medieval/guessmarrow.phtml
// @match http://www.neopets.com/medieval/wiseking.phtml
// @match http://www.neopets.com/medieval/grumpyking.phtml
// @match http://www.neopets.com/desert/fruit/index.phtml
// @match http://www.neopets.com/desert/shrine.phtml
// @match http://www.neopets.com/faerieland/tdmbgpop.phtml
// @match http://www.neopets.com/moon/meteor.phtml
// @match http://www.neopets.com/moon/meteor.phtml?getclose=1
// @match http://www.neopets.com/pirates/buriedtreasure/index.phtml
// @match http://www.neopets.com/pirates/buriedtreasure/buriedtreasure.phtml?
// @match http://www.neopets.com/medieval/symolhole.phtml
// @match http://www.neopets.com/bank.phtml
// @history 1.1.1 Added bank interest script
// @grant          none
// ==/UserScript==

/*
*************************************************************************************
*                                                                                   *
*                                Update log                                         *
*                                                                                   *
*                                                                                   *
*************************************************************************************
1.1.1: 
19/12/2019 - Actually started logging these.
1.1.1 is a minor update, added bank interest script
*/


var expr = window.location.href;
switch (expr) {
    case 'http://www.neopets.com/faerieland/springs.phtml':
        $("input[value='Heal my Pets']").click();
        break;

    case 'http://www.neopets.com/wishing.phtml':
        var bet = 21;
        var item = 'Halloween Y14 Goodie Bag';
        var bih = document.body.innerHTML;

        $("input[name='donation']").val(bet);
        $("input[name='wish']").val(item);

        if (bih.match('Wish Count: 7')) {
            console.log("All done")
        } else {
            document.querySelector("input[value='Make a Wish']").click();
        }
        break;

    case 'http://www.neopets.com/wishing.phtml?thanks=21&xt=':
        var bet = 21;
        var item = 'Halloween Y14 Goodie Bag';
        var bih = document.body.innerHTML;

        $("input[name='donation']").val(bet);
        $("input[name='wish']").val(item);

        if (bih.match('Wish Count: 7')) {
            console.log("All done")
        } else {
            document.querySelector("input[value='Make a Wish']").click();
        }
        break;

    case 'http://www.neopets.com/games/lottery.phtml':
        if (document.location.href.match('neopets.com/games/lottery.phtml')) {
            allForms = document.evaluate('//form[@action="process_lottery.phtml"]', document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
            for (var x = 0, thisForm; thisForm = allForms.snapshotItem(x); x++) {
                var pick, pickArray = new Array(0, 0, 0, 0, 0, 0);

                for (var y = 0; y < 6; y++) {
                    while (pickArray[y] == 0) {
                        pick = Math.ceil(Math.random() * 30);
                        for (var z = 0; z < y; z++) {
                            if (pick == pickArray[z]) {
                                pick = 0
                            }
                        }
                        pickArray[y] = pick;
                    }
                }

                function sortNumber(a, b) {
                    return a - b;
                }
                pickArray = pickArray.sort(sortNumber);

                for (var y = 0; y < 6; y++) {
                    thisForm.elements[y].value = pickArray[y];
                }
            }

            //   return;
            $("input[value='Buy a Lottery Ticket!']").click();
        }
        break;

    case 'http://www.neopets.com/games/process_lottery.phtml':
        if (document.body.innerHTML.match('check back tomorrow')) {
            document.links[0].href = 'http://www.neopets.com/games/lottery.phtml';
        }
        return;
        break;

    case 'http://www.neopets.com/medieval/turdlebetting.phtml':
        var turdle = document.getElementsByName('turdle')[0];
        if (turdle) {
            turdle.options.selectedIndex = Math.floor((Math.random() * 5) + 1);
        }
        $("input[name='bet']").val(1500);
        $("input[value='Place your Bet!']").click();
        break;

    case 'http://www.neopets.com/medieval/turmaculus.phtml':
        var turm = document.getElementsByName('wakeup')[0];
        if (turm) {
            turm.options.selectedIndex = Math.floor((Math.random() * 10) + 1);
        }
        document.querySelector("input[value='Wake Up!']").click();
        return;
        break;

    case 'http://www.neopets.com/altador/council.phtml':
        window.location.assign("http://www.neopets.com/altador/council.phtml?prhv=a60ef8d87426ebb141660602ac9a77dd")
        break;

    case 'http://www.neopets.com/altador/council.phtml?prhv=a60ef8d87426ebb141660602ac9a77dd':
        $("input[value='Collect your gift']").click();
        break;

    case 'http://www.neopets.com/halloween/scratch.phtml':
        /* This is such a dirty function. For some reason the ' would not escape with backslash... */
        var take = document.querySelector("#content > table > tbody > tr > td.content > center:nth-child(10) > form")
        take.innerHTML = '<form action=\"process_scratch.phtml\" method=\"post\" onsubmit=\"return one_submit();\"><input type=\"submit\" value=\"take\"></form>'
        $("input[value='take']").click();
        break;

    case 'http://www.neopets.com/halloween/scratch2.phtml':
        var scratchLoc = document.evaluate('count(//a[contains(@href, "type=scratch&loc=")])', document, null, XPathResult.ANY_TYPE, null);
        var a = document.evaluate('//a[contains(@href, "type=scratch&loc=")]', document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
        if (a) {
            locClick = a.snapshotItem(Math.floor(Math.random() * scratchLoc.numberValue));
            locClick.click();
        }
        break;

    case 'http://www.neopets.com/water/fishing.phtml':
        document.querySelector("input[value='Reel In Your Line']").click();
        break;
    
    case 'http://www.neopets.com/jelly/jelly.phtml':
        $("input[value='Grab some Jelly']").click();
        break;
    
    case 'http://www.neopets.com/worlds/geraptiku/tomb.phtml':
        window.location.assign("http://www.neopets.com/worlds/geraptiku/process_tomb.phtml")
        break;
    
    case 'http://www.neopets.com/prehistoric/omelette.phtml':
        $("input[value='Grab some Omelette']").click();
        break;
    
    case 'http://www.neopets.com/halloween/applebobbing.phtml':
        window.location.assign("http://www.neopets.com/halloween/applebobbing.phtml?bobbing=1")
        break;
    
    case 'http://www.neopets.com/pirates/anchormanagement.phtml':
        var el = document.getElementById('form-fire-cannon');
        el.submit();
        el.parentNode.removeChild(el);
        return false; // this is the code the page uses
        break;
    
        /* 
   Grave danger code
   todo:
   more functionality for selecting a petpet and sending them
*/
    case 'http://www.neopets.com/halloween/gravedanger/index.phtml':
        $("input[value='Adventure again!']").click();
        break;
    case 'http://www.neopets.com/winter/adventcalendar.phtml':
        $("input[value='Collect My Prize!!!']").click();
        break;
    case 'http://www.neopets.com/island/tombola.phtml':
        $("input[value='Play Tombola!']").click();
        break;
    case 'http://www.neopets.com/medieval/guessmarrow.phtml':
        function getRndInteger(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        x = getRndInteger(200, 800);
        $("input[name=guess]").val(x);

        function timeout() {
            $("input[value='Guess!']").click();
        }
        window.setTimeout(timeout, 3000)
        break;
    case 'http://www.neopets.com/medieval/wiseking.phtml':
        var loc = document.location.href;

        if (loc.match('neopets.com/medieval/wiseking.phtml')) {
            for (var x = 0, thisForm; thisForm = document.forms[x]; x++) {
                if (thisForm.action.match('process_wiseking.phtml')) {
                    for (var y = 0, thisElement; thisElement = thisForm.elements[y]; y++) {
                        if (thisElement.name) {
                            thisElement.options.selectedIndex = Math.ceil(Math.random() * (thisElement.options.length - 1));
                        }
                    }
                }
            }
            $("input[value='Impress King Hagan with your wisdom!']").click();
        }
        break;

    case 'http://www.neopets.com/medieval/grumpyking.phtml':
        if (loc.match('neopets.com/medieval/grumpyking.phtml')) {
            for (var x = 0, thisForm; thisForm = document.forms[x]; x++) {
                if (thisForm.action.match('grumpyking2.phtml')) {
                    selections = new Array('What', 'do', 'you do if', '', 'fierce', 'Peophins', '', 'has eaten too much', '', 'tin of olives')
                    //      selections = new Array('What', 'do', 'you do if', '', 'fierce', 'Peophins', '', 'has eaten too much', '', 'tin of olives', 'You', 'offering', 'a', 'tin of', '', 'what what what', '', '')
                    for (var y = 0; y < 18; y++) {
                        for (var z = 0; z < thisForm.elements[y].options.length; z++) {
                            if (thisForm.elements[y].options[z].value == selections[y]) {
                                thisForm.elements[y].options.selectedIndex = z;
                                break;
                            } else {
                                var thisChoice = Math.ceil(Math.random() * (thisForm.elements[y].options.length - 1));
                                thisForm.elements[y].options.selectedIndex = thisChoice;
                            }
                            $("input[value='Tell the King your joke!']").click();
                        }
                    }
                }
            }
        }
        break;
    
    case 'http://www.neopets.com/desert/fruit/index.phtml':
        $("input[value='Spin, spin, spin!']").click();
        break;
    
    case 'http://www.neopets.com/desert/shrine.phtml':
        $("input[value='Approach the Shrine']").click();
        break;
    
    case 'http://www.neopets.com/faerieland/tdmbgpop.phtml':
        $("input[value='Talk to the Plushie']").click();
        break;
    
    case 'http://www.neopets.com/moon/meteor.phtml':
        $("input[value='Take a chance']").click();
        break;
    
    case 'http://www.neopets.com/moon/meteor.phtml?getclose=1':
        $("input[value='Submit']").click();
        break;
    
    case 'http://www.neopets.com/pirates/buriedtreasure/index.phtml':
        $("input[value='Click to Play!  Only 300 NP a game!']").click();
        break;
    
    case ('http://www.neopets.com/pirates/buriedtreasure/buriedtreasure.phtml?'):
        window.location.assign("http://www.neopets.com/pirates/buriedtreasure/buriedtreasure.phtml?" + (Math.round(Math.random() * 449) + 26) + "," + (Math.round(Math.random() * 454) + 31))
        break;

    case ('http://www.neopets.com/medieval/symolhole.phtml'):
        let goin = document.getElementsByName('goin')[0];
        if (goin) {
            goin.options.selectedIndex = Math.floor((Math.random() * 5));
        }
        $("input[value='ENTER!']").click();
        break;
    
        // new bank script start
    case ('http://www.neopets.com/bank.phtml') :
document.body.innerHTML += '<form id="bank" action="http://www.neopets.com/process_bank.phtml" method="post"><input type="hidden" name="type" value="interest"></form>';
document.getElementById("bank").submit();
break;
    // new bank script end
    
    
    default:
        console.log(expr);
}

