// ==UserScript==
// @name       SMMO - MODAL WINDOW ATTEMPT - simple-mmo.com
// @namespace      https://github.com/oligochrome
// @match       https://web.simple-mmo.com/*
// @grant       none
// @version     1.0
// @author      Ogliochrome
// @description 7/20/2023, 7:19:29 PM
// ==/UserScript==

function insertStyleIntoHead(cssText) {
  const styleElement = document.createElement('style');
  styleElement.type = 'text/css';
  if (styleElement.styleSheet) { // For IE < 11
    styleElement.styleSheet.cssText = cssText;
  } else {
    styleElement.appendChild(document.createTextNode(cssText));
  }

  document.head.appendChild(styleElement);
}

// Example usage:
const modalcss = `
 body {font-family: Arial, Helvetica, sans-serif;}

/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 30%;
}

/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
`;

insertStyleIntoHead(modalcss);

const tablecss = `.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-lq4x{background-color:#C0392B;color:#FFF;text-align:center;vertical-align:middle}
.tg .tg-klxa{background-color:#2980B9;color:#FFF;text-align:center;vertical-align:middle}
.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}
.tg .tg-8inb{background-color:#34495E;border-color:inherit;color:#FFF;text-align:center;vertical-align:middle}
.tg .tg-nsn4{background-color:#434343;border-color:inherit;color:#FFF;text-align:center;vertical-align:middle}
.tg .tg-dvpl{border-color:inherit;text-align:right;vertical-align:top}
.tg .tg-mnim{background-color:#434343;border-color:inherit;text-align:left;vertical-align:middle}
.tg .tg-n1sy{background-color:#34495E;color:#FFF;text-align:center;vertical-align:middle}
.tg .tg-kmgb{background-color:#E67E22;color:#FFF;text-align:center;vertical-align:middle}`

insertStyleIntoHead(tablecss);

const tabs = `/*
 CSS for the main interaction
*/
.tabset > input[type="radio"] {
  position: absolute;
  left: -200vw;
}

.tabset .tab-panel {
  display: none;
}

.tabset > input:first-child:checked ~ .tab-panels > .tab-panel:first-child,
.tabset > input:nth-child(3):checked ~ .tab-panels > .tab-panel:nth-child(2),
.tabset > input:nth-child(5):checked ~ .tab-panels > .tab-panel:nth-child(3),
.tabset > input:nth-child(7):checked ~ .tab-panels > .tab-panel:nth-child(4),
.tabset > input:nth-child(9):checked ~ .tab-panels > .tab-panel:nth-child(5),
.tabset > input:nth-child(11):checked ~ .tab-panels > .tab-panel:nth-child(6) {
  display: block;
}

/*
 Styling
*/
body {
  font: 16px/1.5em "Overpass", "Open Sans", Helvetica, sans-serif;
  color: #333;
  font-weight: 300;
}

.tabset > label {
  position: relative;
  display: inline-block;
  padding: 15px 15px 25px;
  border: 1px solid transparent;
  border-bottom: 0;
  cursor: pointer;
  font-weight: 600;
}

.tabset > label::after {
  content: "";
  position: absolute;
  left: 15px;
  bottom: 10px;
  width: 22px;
  height: 4px;
  background: #8d8d8d;
}

input:focus-visible + label {
  outline: 2px solid rgba(0,102,204,1);
  border-radius: 3px;
}

.tabset > label:hover,
.tabset > input:focus + label,
.tabset > input:checked + label {
  color: #06c;
}

.tabset > label:hover::after,
.tabset > input:focus + label::after,
.tabset > input:checked + label::after {
  background: #06c;
}

.tabset > input:checked + label {
  border-color: #ccc;
  border-bottom: 1px solid #fff;
  margin-bottom: -1px;
}

.tab-panel {
  padding: 30px 0;
  border-top: 1px solid #ccc;
}

/*
 Demo purposes only
*/
*,
*:before,
*:after {
  box-sizing: border-box;
}




.tabset {
  max-width: 65em;
}`

insertStyleIntoHead(tabs);

document.body.insertAdjacentHTML('afterend', `<div id="modal" class="modal">
  <div class="modal-content">
    <span class="close">&times;</span>

<div class="tabset">
  <!-- Tab 1 -->
  <input type="radio" name="tabset" id="tab1" aria-controls="collectors" checked>
  <label for="tab1">collectors</label>
  <!-- Tab 2 -->
  <input type="radio" name="tabset" id="tab2" aria-controls="2">
  <label for="tab2">2</label>
  <!-- Tab 3 -->
  <input type="radio" name="tabset" id="tab3" aria-controls="3">
  <label for="tab3">4</label>

  <div class="tab-panels">
    <section id="marzen" class="tab-panel">
     <table class="tg">
<thead>
  <tr>
    <th class="tg-0pky">item</th>
    <th class="tg-0pky">price</th>
    <th class="tg-0pky">player</th>
    <th class="tg-0pky"></th>
    <th class="tg-0pky">notes<br></th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-8inb"><span style="font-weight:normal;color:#FFF;background-color:#34495E">A Nice Rock</span></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">70,000</span></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">Kynkeh</span></td>
    <td class="tg-dvpl"></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">70000</span></td>
  </tr>
  <tr>
    <td class="tg-8inb"><span style="font-weight:normal;color:#FFF;background-color:#34495E">Bone</span></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">30,000</span></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">ChaseRTX</span></td>
    <td class="tg-dvpl"></td>
    <td class="tg-mnim"></td>
  </tr>
  <tr>
    <td class="tg-n1sy"><span style="font-weight:normal;color:#FFF;background-color:#34495E">Empty Milk Bottle</span></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">32,000</span></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">camil milker</span></td>
    <td class="tg-0pky"></td>
    <td class="tg-nsn4"></td>
  </tr>
  <tr>
    <td class="tg-n1sy"><span style="font-weight:normal;color:#FFF;background-color:#34495E">Fish Tail</span></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">31,000</span></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">Fufuchan</span></td>
    <td class="tg-0pky"></td>
    <td class="tg-mnim"></td>
  </tr>
  <tr>
    <td class="tg-n1sy"><span style="font-weight:normal;color:#FFF;background-color:#34495E">Forgotten Coins</span></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">30,000</span></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">Grindelhog</span></td>
    <td class="tg-0pky"></td>
    <td class="tg-mnim"></td>
  </tr>
  <tr>
    <td class="tg-n1sy"><span style="font-weight:normal;color:#FFF;background-color:#34495E">Four Leaf Clover</span></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">50,000</span></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">A Nice Name</span></td>
    <td class="tg-0pky"></td>
    <td class="tg-nsn4"></td>
  </tr>
  <tr>
    <td class="tg-n1sy"><span style="font-weight:normal;color:#FFF;background-color:#34495E">Four leaf Clover</span></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">35,000</span></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">West coast lights</span></td>
    <td class="tg-0pky"></td>
    <td class="tg-nsn4"></td>
  </tr>
  <tr>
    <td class="tg-n1sy"><span style="font-weight:normal;color:#FFF;background-color:#34495E">Gold Coin</span></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">30,000</span></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">Grindelhog</span></td>
    <td class="tg-0pky"></td>
    <td class="tg-mnim"></td>
  </tr>
  <tr>
    <td class="tg-n1sy"><span style="font-weight:normal;color:#FFF;background-color:#34495E">Ink</span></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">30,000</span></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">DisPain</span></td>
    <td class="tg-0pky"></td>
    <td class="tg-nsn4"></td>
  </tr>
  <tr>
    <td class="tg-n1sy"><span style="font-weight:normal;color:#FFF;background-color:#34495E">Iron Ball</span></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">30,000</span></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">Captain</span></td>
    <td class="tg-0pky"></td>
    <td class="tg-nsn4"></td>
  </tr>
  <tr>
    <td class="tg-n1sy"><span style="font-weight:normal;color:#FFF;background-color:#34495E">Jade</span></td>
    <td class="tg-nsn4"><span style="font-weight:normal;text-decoration:line-through;color:#FFF;background-color:#434343">100,000</span></td>
    <td class="tg-nsn4"><span style="font-weight:normal;text-decoration:line-through;color:#FFF;background-color:#434343">45000</span></td>
    <td class="tg-0pky"></td>
    <td class="tg-nsn4"></td>
  </tr>
  <tr>
    <td class="tg-n1sy"><span style="font-weight:normal;color:#FFF;background-color:#34495E">Jewel</span></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">10,000</span></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">Kinido</span></td>
    <td class="tg-0pky"></td>
    <td class="tg-nsn4"></td>
  </tr>
  <tr>
    <td class="tg-n1sy"><span style="font-weight:normal;color:#FFF;background-color:#34495E">Leaf</span></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">25,000</span></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">Wish tree</span></td>
    <td class="tg-0pky"></td>
    <td class="tg-nsn4"></td>
  </tr>
  <tr>
    <td class="tg-n1sy"><span style="font-weight:normal;color:#FFF;background-color:#34495E">Mirror</span></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">40,000</span></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">Forsaken Starsong</span></td>
    <td class="tg-0pky"></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">1k+ per for 100+ bulk</span></td>
  </tr>
  <tr>
    <td class="tg-n1sy"><span style="font-weight:normal;color:#FFF;background-color:#34495E">Mortar and Pestle</span></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">30,000</span></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">Grindelhog</span></td>
    <td class="tg-0pky"></td>
    <td class="tg-nsn4"></td>
  </tr>
  <tr>
    <td class="tg-n1sy"><span style="font-weight:normal;color:#FFF;background-color:#34495E">Mushroom</span></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">40,000</span></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">Mendel</span></td>
    <td class="tg-0pky"></td>
    <td class="tg-mnim"></td>
  </tr>
  <tr>
    <td class="tg-n1sy"><span style="font-weight:normal;color:#FFF;background-color:#34495E">Mushroom</span></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">30,000</span></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">Mendel</span></td>
    <td class="tg-0pky"></td>
    <td class="tg-nsn4"></td>
  </tr>
  <tr>
    <td class="tg-n1sy"><span style="font-weight:normal;color:#FFF;background-color:#34495E">Raw Fish</span></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">20,000</span></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">Fufuchan</span></td>
    <td class="tg-0pky"></td>
    <td class="tg-mnim"></td>
  </tr>
  <tr>
    <td class="tg-n1sy"><span style="font-weight:normal;color:#FFF;background-color:#34495E">Starfish</span></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">30,000</span></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">Raizz</span></td>
    <td class="tg-0pky"></td>
    <td class="tg-mnim"></td>
  </tr>
  <tr>
    <td class="tg-n1sy"><span style="font-weight:normal;color:#FFF;background-color:#34495E">Tentacle</span></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">30,000</span></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">Feliziux</span></td>
    <td class="tg-0pky"></td>
    <td class="tg-nsn4"></td>
  </tr>
  <tr>
    <td class="tg-n1sy"><span style="font-weight:normal;color:#FFF;background-color:#34495E">Tentacle</span></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">30,000</span></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">Forsaken Starsong</span></td>
    <td class="tg-0pky"></td>
    <td class="tg-nsn4"></td>
  </tr>
  <tr>
    <td class="tg-lq4x"><span style="font-weight:normal;color:#FFF;background-color:#C0392B">Banana</span></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">200,000</span></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">DatDoddo</span></td>
    <td class="tg-0pky"></td>
    <td class="tg-mnim"></td>
  </tr>
  <tr>
    <td class="tg-klxa"><span style="font-weight:normal;color:#FFF;background-color:#2980B9">Caramel Apple</span></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">50,000</span></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">Yakizar </span></td>
    <td class="tg-0pky"></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">(11,000 if 100+)</span></td>
  </tr>
  <tr>
    <td class="tg-kmgb"><span style="font-weight:normal;text-decoration:line-through;color:#FFF;background-color:#E67E22">Cherry</span></td>
    <td class="tg-nsn4"><span style="font-weight:normal;text-decoration:line-through;color:#FFF;background-color:#434343">40000</span></td>
    <td class="tg-nsn4"><span style="font-weight:normal;text-decoration:line-through;color:#FFF;background-color:#434343">Mastua</span></td>
    <td class="tg-0pky"></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">5 months offline</span></td>
  </tr>
  <tr>
    <td class="tg-kmgb"><span style="font-weight:normal;color:#FFF;background-color:#E67E22">Cliff Flower</span></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">350,000</span></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">Mastua</span></td>
    <td class="tg-0pky"></td>
    <td class="tg-nsn4"></td>
  </tr>
  <tr>
    <td class="tg-kmgb"><span style="font-weight:normal;color:#FFF;background-color:#E67E22">Cliff Flower</span></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">350,000</span></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">lifesabreeze</span></td>
    <td class="tg-0pky"></td>
    <td class="tg-nsn4"></td>
  </tr>
  <tr>
    <td class="tg-klxa"><span style="font-weight:normal;color:#FFF;background-color:#2980B9">Cotton Candy</span></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">100,000</span></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">lifesabreeze</span></td>
    <td class="tg-0pky"></td>
    <td class="tg-nsn4"></td>
  </tr>
  <tr>
    <td class="tg-kmgb"><span style="font-weight:normal;color:#FFF;background-color:#E67E22">Dangerous Mushroom</span></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">60,000</span></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">Mendel</span></td>
    <td class="tg-0pky"></td>
    <td class="tg-mnim"></td>
  </tr>
  <tr>
    <td class="tg-kmgb"><span style="font-weight:normal;color:#FFF;background-color:#E67E22">Fabulous Starfish</span></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">100,000</span></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">lifesabreeze</span></td>
    <td class="tg-0pky"></td>
    <td class="tg-mnim"></td>
  </tr>
  <tr>
    <td class="tg-kmgb"><span style="font-weight:normal;color:#FFF;background-color:#E67E22">Flowers</span></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">150,000</span></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">Mastua</span></td>
    <td class="tg-0pky"></td>
    <td class="tg-nsn4"></td>
  </tr>
  <tr>
    <td class="tg-klxa"><span style="font-weight:normal;color:#FFF;background-color:#2980B9">Letter of Resignation</span></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">50,000</span></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">DisPain</span></td>
    <td class="tg-0pky"></td>
    <td class="tg-nsn4"></td>
  </tr>
  <tr>
    <td class="tg-kmgb"><span style="font-weight:normal;color:#FFF;background-color:#E67E22">Powerball</span></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">100,000</span></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">Yakizar </span></td>
    <td class="tg-0pky"></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">1k+ per for 100+ bulk</span></td>
  </tr>
  <tr>
    <td class="tg-kmgb"><span style="font-weight:normal;color:#FFF;background-color:#E67E22">Powerball</span></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">100,000</span></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">lakaa3</span></td>
    <td class="tg-0pky"></td>
    <td class="tg-mnim"></td>
  </tr>
  <tr>
    <td class="tg-kmgb"><span style="font-weight:normal;color:#FFF;background-color:#E67E22">Purple Crafting Dust</span></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">200,000</span></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">Yakizar </span></td>
    <td class="tg-0pky"></td>
    <td class="tg-nsn4"></td>
  </tr>
  <tr>
    <td class="tg-klxa"><span style="font-weight:normal;color:#FFF;background-color:#2980B9">Purple Lantern</span></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">30,000</span></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">Yakizar </span></td>
    <td class="tg-0pky"></td>
    <td class="tg-mnim"></td>
  </tr>
  <tr>
    <td class="tg-kmgb"><span style="font-weight:normal;color:#FFF;background-color:#E67E22">Red Lantern</span></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">150,000</span></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">E</span></td>
    <td class="tg-0pky"></td>
    <td class="tg-mnim"></td>
  </tr>
  <tr>
    <td class="tg-klxa"><span style="font-weight:normal;color:#FFF;background-color:#2980B9">Red Shroom</span></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">50,000</span></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">Mendel</span></td>
    <td class="tg-0pky"></td>
    <td class="tg-nsn4"></td>
  </tr>
  <tr>
    <td class="tg-klxa"><span style="font-weight:normal;color:#FFF;background-color:#2980B9">Red Shroom</span></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">60,000</span></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">Mendel</span></td>
    <td class="tg-0pky"></td>
    <td class="tg-nsn4"></td>
  </tr>
  <tr>
    <td class="tg-klxa"><span style="font-weight:normal;color:#FFF;background-color:#2980B9">Single Rose</span></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">80,000</span></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">BlackoutX</span></td>
    <td class="tg-0pky"></td>
    <td class="tg-nsn4"></td>
  </tr>
  <tr>
    <td class="tg-klxa"><span style="font-weight:normal;color:#FFF;background-color:#2980B9">The Middle Finger</span></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">70,000</span></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">sophie</span></td>
    <td class="tg-0pky"></td>
    <td class="tg-nsn4"></td>
  </tr>
  <tr>
    <td class="tg-klxa"><span style="font-weight:normal;color:#FFF;background-color:#2980B9">Water Balls</span></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">45,000</span></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">lakaa2</span></td>
    <td class="tg-0pky"></td>
    <td class="tg-mnim"></td>
  </tr>
  <tr>
    <td class="tg-kmgb"><span style="font-weight:normal;color:#FFF;background-color:#E67E22">Wing</span></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">100,000</span></td>
    <td class="tg-nsn4"><span style="font-weight:normal;color:#FFF;background-color:#434343">lifesabreeze</span></td>
    <td class="tg-0pky"></td>
    <td class="tg-nsn4"></td>
  </tr>
</tbody>
</table>
  </section>
    <section id="rauchbier" class="tab-panel">
  <table id="myTable">
        <tr>
            <th>Column 1</th>
            <th>Column 2</th>
        </tr>
    </table>
    </section>
    <section id="dunkles" class="tab-panel">

    </section>
  </div>

</div>



  </div>
</div>`)


  // Get references to necessary elements
  const modal = document.getElementById('modal');
  const closeButton = modal.querySelector('.close');

  // Function to show the modal
  function showModal() {
    modal.style.display = 'block';
  }

  // Function to hide the modal
  function hideModal() {
    modal.style.display = 'none';
  }

  // Close the modal when clicking the close button or outside the modal content
  window.onclick = function(event) {
    if (event.target === modal) {
      hideModal();
    }
  };

  // Close the modal when clicking the close button
  closeButton.onclick = hideModal;

  // Make the showModal and hideModal functions accessible from the global scope
  window.showModal = showModal;
  window.hideModal = hideModal;


document.getElementsByClassName("flex flex-col flex-grow border-r border-gray-200  pt-5 bg-white dark:bg-gray-950 overflow-y-auto")[0].insertAdjacentHTML('beforebegin',`<button onclick="showModal()">Open Modal</button>`)

let shouldRun = true;

function myFunction() {
  if (shouldRun) {
    // Put your code here that you want to run every 30 minutes
   var akey = []
var bkey = []
async function lol () {
    const res = await fetch("https://web.simple-mmo.com/api/web-app", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-GB,en;q=0.9,ja;q=0.8,fr;q=0.7",
    "sec-ch-ua": "\"Not/A)Brand\";v=\"99\", \"Google Chrome\";v=\"115\", \"Chromium\";v=\"115\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin"
  },
  "referrer": "https://web.simple-mmo.com/user/view/476520",
  "referrerPolicy": "no-referrer-when-downgrade",
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "include"
}).then(res => res.json());
    for (const key of Object.keys(res)) {
    akey.push(key)
    bkey.push(res[key])}
        // Get the table element
        var table = document.getElementById('myTable');

        // Check if the arrays have the same length
        if (akey.length !== bkey.length) {
            console.error('Arrays must have the same length.');
        } else {
            // Insert elements into the table
            for (var i = 0; i < akey.length; i++) {
                var row = table.insertRow();

                var col1 = row.insertCell(0);
                col1.innerHTML = akey[i];

                var col2 = row.insertCell(1);
                col2.innerHTML = bkey[i];
            }
        }

}lol()


    // Set the flag to prevent the function from running again immediately
    shouldRun = false;

    // Schedule the function to run again after 30 minutes
    setTimeout(() => {
      shouldRun = true;
    }, 30 * 60 * 1000); // 30 minutes in milliseconds
  }
}

// Call the function initially
myFunction();


