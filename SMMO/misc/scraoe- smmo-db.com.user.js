// ==UserScript==
// @name        scraoe- smmo-db.com
// @updateURL   https://github.com/oligochrome/scripts/raw/main/scraoe- smmo-db.com.user.js
// @namespace      https://github.com/oligochrome
// @match       https://smmo-db.com/items/search*
// @grant       none
// @version     1.0.0
// @author      Ogliochrome
// @description 10/3/2022, 12:39:50 PM

// ==/UserScript==
const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

function gonxt(){
with (location) {
    u = href.split(/(\d+)(\D*)$/);
    if (u.length != 1) {
        n = u[1];
        l = n.length;
        n = String(parseInt(n.replace(/^0*(.)/, '$1')) + 1);
        if (u[1].charAt(0) == '0')
            while (n.length < l)
                n = '0' + n;
        u[1] = n;
        href = u.join('')
    }
}
void (null)

}

const task = async () => {
var arr = [];
var arr2 = [];
var doh = document.body.getElementsByClassName("text-center font-medium tracking-wide py-1")
var retrievedData = localStorage.getItem("itemnames");
for (let index = 0; index < doh.length; index++) {
    arr.push(doh[index].innerText)
}
if(retrievedData !== 'null'){

//var storedarr = JSON.parse(localStorage.getItem('itemnames'));
var arr2 = JSON.parse(retrievedData);
//arrj = []
//console.log(JSON.stringify(localStorage.getItem('itemnames')))
   // localStorage.getItem('itemnames') + arr
for (let index = 0; index < arr.length; index++) {
    arr2.push(arr[index])
}
    localStorage.setItem('itemnames', JSON.stringify(arr2));

//localStorage.setItem('itemnames', JSON.stringify(combined));
}else{
localStorage.setItem('itemnames', JSON.stringify(arr));
    var arr2 = JSON.parse(retrievedData);
//arrj = []
//console.log(JSON.stringify(localStorage.getItem('itemnames')))
   // localStorage.getItem('itemnames') + arr
let combined = arr2.concat(arr)
localStorage.setItem('itemnames', JSON.stringify(combined));
}
await sleep(3500)
gonxt();
}

task();
