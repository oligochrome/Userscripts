// ==UserScript==
// @name        Neopets Autokiss The Mortog
// @namespace   https://github.com/oligochrome
// @description Auto selects a mortog and kisses it
// @author      oligochrome
// @license     GNU GPL
// @version 	0.9
// @language    en
// @include     *neopets.com/medieval/kissthemortog.phtml*
// @include     *neopets.com/medieval/process_kissthemortog.phtml*
// @require	    http://code.jquery.com/jquery-latest.min.js
// @grant       none
// ==/UserScript==

var bih = document.body.innerHTML;
/*
 if (document.location.href.search("neopets.com/medieval/process_kissthemortog.phtml")!=-1){
$('a[href*="history"]').each(function() {
    document.location.href="javascript:history.back();"
});
}
*/
// if($("input[value='Collect Your Winnings - 5,200 NP']")){
//	$("input[value='Collect Your Winnings - 5,200 NP']").click();
// } else



if($('img[src="http://images.neopets.com/items/pet_mortog.gif"]')) {
    window.setTimeout(
	function(){$('img[src="http://images.neopets.com/items/pet_mortog.gif"]').click();}
        ,2000);
}

window.setTimeout(
    function(){
if (bih.match('You have won')){
   $("input[value='Continue']").click();
  } else if (bih.match('At least you only lost')){
$("input[value='Try again...']").click();
}
  }
  ,2000);
