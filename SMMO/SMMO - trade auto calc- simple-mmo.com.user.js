// ==UserScript==
// @name        SMMO - trade auto calc- simple-mmo.com
// @updateURL   https://github.com/oligochrome/scripts/raw/main/SMMO - trade auto calc- simple-mmo.com.user.js
// @namespace      https://github.com/oligochrome
// @match       https://web.simple-mmo.com/chat/private?user_id=*
// @match       https://web.simple-mmo.com/trades/view/*
// @grant       none
// @version     1.0.0
// @author      Ogliochrome
// @description 7/15/2023, 4:56:07 AM

// ==/UserScript==

var tradeqty = document.getElementById("textq").innerText
let common = parseInt(tradeqty.split("Common: ")[1].split("\n")[0])
let uncommon = parseInt(tradeqty.split("Uncommon: ")[1].split("\n")[0])
let rare = parseInt(tradeqty.split("Rare: ")[1].split("\n")[0])
let elite = parseInt(tradeqty.split("Elite: ")[1].split("\n")[0])
let epic = parseInt(tradeqty.split("Epic: ")[1].split("\n")[0])
let legendary = parseInt(tradeqty.split("Legendary: ")[1].split("\n")[0])
let celestial = parseInt(tradeqty.split("Celestial: ")[1].split("\n")[0])

function numberWithCommas(num) {
    num = Math.trunc(num)
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

var css = `.tradecalc {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.tradecalc-content {
  background-color: #fefefe;
  margin: 10% auto;
  padding: 20px;
  border: 1px solid #888;
      width: 70%;
    height: 60%;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.cost-input {
  margin-bottom: 10px;
  width: 100%;
}

.mattype {
	display: flex;
}

#result {
  font-weight: bold;
  color: green;
}`;

var htmlDiv = document.createElement('div');
htmlDiv.innerHTML = '<p>foo</p><style>' + css + '</style>';
document.getElementsByTagName('head')[0].appendChild(htmlDiv.childNodes[1]);


let sidebar = document.getElementsByClassName('flex flex-col flex-grow border-r border-gray-200  pt-5 bg-white dark:bg-gray-950 overflow-y-auto')[0]

let mbut = `<button id="opentradecalcBtn">Open tradecalc</button>`

sidebar.insertAdjacentHTML("afterend",mbut)

document.body.insertAdjacentHTML("afterend",`  <div id="tradecalc" class="tradecalc">
    <div class="tradecalc-content">
      <span class="close">&times;</span>
      <h2>Cost Calculator</h2>

      <div class="mats">
	  <div class="mattype">
        <label for="ccost1">common</label>
        <input type="number" class="matamnt" id="ccost1" >
		        <label for="ccost2">price</label>
        <input type="number" class="matprice" id="ccost2" >
				        <label for="ctotal1">total</label>
        <input type="number" id="ctotal1" class="cost-input">
</div>
<br>	  <div class="mattype">

        <label for="cost1">uncommon</label>
        <input type="number" class="matamnt" id="uccost1" >
		        <label for="cost2">price</label>
        <input type="number" class="matprice" id="uccost2" >
				        <label for="total1">total</label>
        <input type="number" id="uctotal1" class="cost-input">

</div><br>	  <div class="mattype">

        <label for="rcost1">rare</label>
        <input type="number" class="matamnt" id="rcost1" >
		        <label for="rcost2">price</label>
        <input type="number" class="matprice" id="rcost2" >
				        <label for="rtotal1">total</label>
        <input type="number" id="rtotal1" class="cost-input">

</div><br>	  <div class="mattype">

        <label for="ecost1">elite</label>
        <input type="number" class="matamnt" id="ecost1" >
		        <label for="ecost2">price</label>
        <input type="number" class="matprice" id="ecost2" >
				        <label for="etotal1">total</label>
        <input type="number" id="etotal1" class="cost-input">

</div><br>	  <div class="mattype">

        <label for="epcost1">epic</label>
        <input type="number" class="matamnt" id="epcost1" >
		        <label for="epcost2">price</label>
        <input type="number" class="matprice" id="epcost2" >
				        <label for="eptotal1">total</label>
        <input type="number" id="eptotal1" class="cost-input">

</div><br>	  <div class="mattype">

        <label for="lcost1">legendary</label>
        <input type="number" class="matamnt" id="lcost1" >
		        <label for="lcost2">price</label>
        <input type="number" class="matprice" id="lcost2" >
				        <label for="ltotal1">total</label>
        <input type="number" id="ltotal1" class="cost-input">

</div><br>	  <div class="mattype">

        <label for="cecost1">celestial</label>
        <input type="number" class="matamnt" id="cecost1" >
		        <label for="cecost2">price</label>
        <input type="number" class="matprice" id="cecost2" >
				        <label for="cetotal1">total</label>
        <input type="number" id="cetotal1" class="cost-input">
      </div>
</div>

      <div>
        <label for="result">Result:</label>
        <input type="number" id="result" class="cost-input">
      </div>
    </div>
  </div>`)

  // Get the tradecalc and the button that opens it
const tradecalc = document.getElementById("tradecalc");
const opentradecalcBtn = document.getElementById("opentradecalcBtn");

// Get the close button, cost inputs, and result input
const closeBtn = tradecalc.querySelector(".close");
const costInputs = tradecalc.querySelectorAll(".cost-input");
const matamnts = tradecalc.querySelectorAll(".matamnt");
const matprices = tradecalc.querySelectorAll(".matprice");
const resultInput = document.getElementById("result");

//values from trade page
document.querySelector("#ccost1").value = common
document.querySelector("#uccost1").value = uncommon
document.querySelector("#rcost1").value = rare
document.querySelector("#ecost1").value = elite
document.querySelector("#epcost1").value = epic
document.querySelector("#lcost1").value = legendary
document.querySelector("#cecost1").value = celestial
function calc1(){
let x = document.querySelectorAll(".matamnt")
 let y = document.querySelectorAll(".matprice")
 let z = document.querySelectorAll(".cost-input")
 let tota = 0
for (let i = 0; i < x.length; i++) {
    if(x[i].value === 0){null}else{
     let q = x[i].value * y[i].value;
    z[i].value = q;
    }
}
}


function calc() {
  let result = 0;

  matamnts.forEach((input) => {
    const cost = input.nextElementSibling.nextElementSibling.value;
    if (!isNaN(cost)) {
      result = document.querySelectorAll(".matamnt").forEach((input) => {result = result * parseInt(input.value)})
    }
       input.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.value = isNaN(result) ? "" : result.toFixed(2);
  });
let alltots = document.querySelectorAll(".cost-input")
for (let index = 0; index < alltots.length; index++) {
     alltots[index].value =  parseInt(alltots[index].value)
      alltots[index].value = numberWithCommas(alltots[index].value)

}

}

// Function to calculate the multiplication and update the result
function calculateResult() {
  let result = 1;

  costInputs.forEach((input) => {
    const cost = parseFloat(input.value);
    if (!isNaN(cost)) {
      result = parseInt(document.querySelectorAll(".cost-input")[1].value) + parseInt(document.querySelectorAll(".cost-input")[0].value) + parseInt(document.querySelectorAll(".cost-input")[2].value) + parseInt(document.querySelectorAll(".cost-input")[3].value) + parseInt(document.querySelectorAll(".cost-input")[4].value) + parseInt(document.querySelectorAll(".cost-input")[5].value);
    }
  });

  resultInput.value = isNaN(result) ? "" : result.toFixed(2);
}

// Open the tradecalc when the button is clicked
opentradecalcBtn.addEventListener("click", () => {
  tradecalc.style.display = "block";
});

// Close the tradecalc when the close button is clicked
closeBtn.addEventListener("click", () => {
  tradecalc.style.display = "none";
});

// Close the tradecalc if the user clicks outside of it
window.addEventListener("click", (event) => {
  if (event.target === tradecalc) {
    tradecalc.style.display = "none";
  }
});

// Listen for input changes in the cost inputs
costInputs.forEach((input) => {
  input.addEventListener("input",calc1);
    input.addEventListener("input",calculateResult);
})

const invokeMe = () => calc1();
const alsoInvokeMe = () => calculateResult();
matprices.forEach((input) => {
  input.addEventListener("input", () => {
     invokeMe();
     alsoInvokeMe();
  })});