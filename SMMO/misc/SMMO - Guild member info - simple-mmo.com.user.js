// ==UserScript==
// @name        SMMO - Guild member info - simple-mmo.com
// @namespace      https://github.com/oligochrome
// @match       https://web.simple-mmo.com/alcool
// @grant       none
// @version     1.0
// @author      Ogliochrome
// @description 8/5/2023, 1:36:03 PM
/* @require     https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js*/
// ==/UserScript==
let pinfo = [];
document.body.innerHTML = `<div id="table-container"></div>`
async function sleep(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

async function getguildids() {
  const res = await fetch(`https://api.simple-mmo.com/v1/guilds/members/39?api_key=IDHXwG7yTaz7GuuG7ScIacWCpdNgxhsOe1iYLOO4LNEi9bryE7MDbhJLEBqmd4jKOVw2wfTnhobsYIW4`, {
    method: 'POST',
  });
  const data = await res.json();
  return data.map(member => member.user_id);
}

async function getginfo(id) {
  const res = await fetch(`https://api.simple-mmo.com/v1/player/info/${id}?api_key=IDHXwG7yTaz7GuuG7ScIacWCpdNgxhsOe1iYLOO4LNEi9bryE7MDbhJLEBqmd4jKOVw2wfTnhobsYIW4`, {
    method: 'POST',
  });
  return res.json();
}

async function myFunction(value) {
  await sleep(5000);
  const playerInfo = await getginfo(value);
  pinfo.push(playerInfo);
}

(async () => {
  const arr = await getguildids();
  for (const value of arr) {
    await myFunction(value);
  }


})();

for (let index = 0; index < pinfo.length; index++) {
   pinfo[index].current_location = pinfo[index].current_location.name
}

        function objectToHtmlTable(pinfo) {
            // Create a table element
            const table = document.createElement('table');
            table.border = '1';

            // Create a header row
            const headers = Object.keys(pinfo[0]);
            const headerRow = document.createElement('tr');
            headers.forEach(header => {
                const th = document.createElement('th');
                th.textContent = header;
                headerRow.appendChild(th);
            });
            table.appendChild(headerRow);

            // Create rows for each item
            pinfo.forEach(item => {
                const row = document.createElement('tr');
                headers.forEach(header => {
                    const cell = document.createElement('td');
                    cell.textContent = item[header];
                    row.appendChild(cell);
                });
                table.appendChild(row);
            });

            return table;
        }

        // Get the table container element
        const tableContainer = document.getElementById('table-container');

        // Convert the object to an HTML table and append it to the container
        const htmlTable = objectToHtmlTable(pinfo);
        tableContainer.appendChild(htmlTable);