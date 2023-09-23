// ==UserScript==
// @name        aaaa- simple-mmo.com
// @namespace  aa    https://github.com/oligochrome
// @match       https://web.simple-mmo.com/alcool
// @grant       none
// @version     1.0
// @author      Ogliochrome
// @description 9/3/2023, 2:51:10 PM
// @require     https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js
// @require     https://cdn.datatables.net/1.11.10/css/jquery.dataTables.css
// @require     https://cdn.datatables.net/1.11.10/js/jquery.dataTables.js
// ==/UserScript==

function JSONToHTMLTable(jsonData, elementToBind) {
    // This Code gets all columns for header and stores them in an array col
    var col = [];
    for (var i = 0; i < jsonData.length; i++) {
        for (var key in jsonData[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }

    // This Code creates an HTML table
    var table = document.createElement("table");

    // This Code gets rows for the header created above.
    var tr = table.insertRow(-1);

    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th");
        th.innerHTML = col[i];
        tr.appendChild(th);
    }

    // This Code adds data to the table as rows
    for (var i = 0; i < jsonData.length; i++) {
        tr = table.insertRow(-1);

        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = jsonData[i][col[j]];
        }
    }

    // This Code gets the element where the table should be bound
    var divContainer = document.getElementById(elementToBind);
    divContainer.innerHTML = "";
    divContainer.appendChild(table);

    // Apply DataTables.js to the table for sorting and styling
    $(table).DataTable();
}

var url = "https://api.simple-mmo.com/v1/guilds/members/971";

var xhr = new XMLHttpRequest();
xhr.open("POST", url);
xhr.setRequestHeader("Content-Type", "application/json");

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        console.log(xhr.status);
        console.log(xhr.responseText);
        JSONToHTMLTable(JSON.parse(xhr.responseText), "mlist");
    }
};

var data = '{"api_key":"IDHXwG7yTaz7GuuG7ScIacWCpdNgxhsOe1iYLOO4LNEi9bryE7MDbhJLEBqmd4jKOVw2wfTnhobsYIW4"}';

xhr.send(data);
