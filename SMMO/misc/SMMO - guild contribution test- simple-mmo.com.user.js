// ==UserScript==
// @name        SMMO - guild contribution test- simple-mmo.com
// @updateURL   https://github.com/oligochrome/scripts/raw/main/SMMO - guild contribution test- simple-mmo.com.user.js
// @namespace      https://github.com/oligochrome
// @match       https://web.simple-mmo.com/p-api/home
// @grant       none
// @version     1.0.0
// @author      Ogliochrome
// @description 4/14/2023, 6:05:12 AM

// ==/UserScript==
if (dataArr === undefined){var dataArr = [];}else{}
//var arr = [];
function grabcontribution(id) {console.log(id);
    const res = fetch(`https://api.simple-mmo.com/v1/guilds/members/39/contribution/${id}?api_key=IDHXwG7yTaz7GuuG7ScIacWCpdNgxhsOe1iYLOO4LNEi9bryE7MDbhJLEBqmd4jKOVw2wfTnhobsYIW4`, {
				method: 'POST',
			}).then(res => res.json());
                                     console.log(res)
                                     const gold = res["gold_deposited"];
                                     const pp = res["power_points_deposited"];
                                     const pvek = res["pve_kills"];
                                     const pvee = res["pve_exp"];
                                     const pvpk = res["pvp_kills"];
                                     const pvpe = res["pvp_exp"];
                       return [gold,pp,pvek,pvee,pvpk,pvpe] }
async function getguildmemberinfo(num){const res = await fetch(`https://api.simple-mmo.com/v1/guilds/members/39?api_key=IDHXwG7yTaz7GuuG7ScIacWCpdNgxhsOe1iYLOO4LNEi9bryE7MDbhJLEBqmd4jKOVw2wfTnhobsYIW4`, {
				method: 'POST',
			}).then(res => res.json());


                                     // var userIDs = res.map(user => user.user_id);
                            dataArr.push(...userIDs);
                                     for (let index = 0; index < userIDs.length; index++) {ids.push(userIDs[index])}






                                     }

async function getguildids(){const res = await fetch(`https://api.simple-mmo.com/v1/guilds/members/39?api_key=IDHXwG7yTaz7GuuG7ScIacWCpdNgxhsOe1iYLOO4LNEi9bryE7MDbhJLEBqmd4jKOVw2wfTnhobsYIW4`, {
				method: 'POST',
			}
      ).then(res => res.json())
                  var userIDs = res.map(user => user.user_id);
                             for (let index = 0; index < userIDs.length; index++) {
                                  if (dataArr.includes(userIDs[index]) === true)
                                  {null}else{ dataArr.push(userIDs[index])}
                             }







                            //  console.log(arr)






                                     }






getguildids()
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}


    function test(index) {
         console.log(grabcontribution(dataArr[index]))}

for (let index = 0; index < dataArr.length; index++) {
setTimeout(test(index), 3000)

}



console.log(dataArr)
//console.log(arr["0"])