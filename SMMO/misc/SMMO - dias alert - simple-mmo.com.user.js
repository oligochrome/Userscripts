// ==UserScript==
// @name        SMMO - dias alert - simple-mmo.com
// @namespace      https://github.com/oligochrome
// @match       https://web.simple-mmo.com/*
// @grant       none
// @version     1.0
// @author      Ogliochrome
// @description 2/10/2023, 2:41:43 AM
// @require     https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js
// ==/UserScript==

if(parseInt(localStorage.getItem("exlast"))+600000 <= Date.now()){
let arr = []
$.post('https://api.simple-mmo.com/v1/diamond-market?api_key=IDHXwG7yTaz7GuuG7ScIacWCpdNgxhsOe1iYLOO4LNEi9bryE7MDbhJLEBqmd4jKOVw2wfTnhobsYIW4', function(data, status){
data.forEach(element => arr.push(element.price_per_diamond))
if(Math.min(...arr) <= 1300000){
  window.open("http://localhost:1180/blahf.html")
  alert(Math.min(...arr))

}

    }

)
let execlast = Date.now();
localStorage.setItem("exlast",execlast)
}
else{
     console.log("not time yet");
  }

