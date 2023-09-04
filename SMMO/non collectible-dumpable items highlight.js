// ==UserScript==
// @name        SMMO - non collectible/dumpable items highlight- simple-mmo.com
// @updateURL   https://github.com/oligochrome/Userscripts/raw/master/SMMO/non%20collectible-dumpable%20items%20highlight.js
// @namespace   - simple-mmo.com -
// @include     https://web.simple-mmo.com/market/listings*
// @include     https://web.simple-mmo.com/inventory/items*
// @exclude     https://web.simple-mmo.com/market/listings?user_id=476520
// @match       https://web.simple-mmo.com/inventory/storage*
// @grant       none
// @version     1.0.0
// @author      -
// @description 8/26/2022, 4:04:41 AM
// @require     https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js
// ==/UserScript==

var baditems = ['Pie','Carrot','Special Carrot','Scalpel of Death', 'The Hamburger', 'Attuned Death', 'The Nokia', 'The Great Wall Of China', 'Hatreds Bite', 'Ivory Chestplate', 'Leather Armour', 'Weak Fishing Rod', 'Weak Shovel', 'Weak Axe', 'Weak Pickaxe', 'Fire Plate', 'Bootleg T-Shirt', 'Rusty Axe', 'Rusty Fishing Rod', 'Rusty Shovel', 'Rusty Pickaxe', 'Sword for Sloths', 'Frozen', 'Simple Dagger', 'Rotten Pumpkin', 'Delicious Candy Cane', 'Some Geezers Bow', 'Rat', 'Generic Shirt', 'Strong Shovel', 'Strong Axe', 'Strong Pickaxe', 'Strong Fishing Rod', 'Boar', 'Zombie', 'Knockoff T-shirt','A Strange Pie','Box of Chocolates','Springtime Bouquet','Easter Egg','Chocolate Egg','Balthazars Bloodstone','Delicious Pie']

/*
var collectibles =[
    "Corset",
    "Alien Eyes",
    "Balthazars Enchanted Runestone",
    "Fabulous Starfish",
    "Fangs",
    "Gravestone",
    "Powerball",
    "Rare Musical Note",
    "Wing",
    "Runestone",
    "Football",
    "Pumpkin",
    "Blue Lantern",
    "Green Lantern",
    "Red Lantern",
    "Yellow Fire In Jar",
    "Music Box",
    "Flowers",
    "Divine Peach",
    "Dead Fly",
    "Epic Rune",
    "Glorious Trophy",
    "Map",
    "Elite Rune",
    "Balthazars Runestone",
    "Purple Crafting Dust",
    "Gold Coin",
    "Mortar and Pestle",
    "Bag o' Runes",
    "Legendary Rune",
    "Triangle",
    "Ancient Crown",
    "Floppy Disk",
    "Lost Certificate",
    "Lost Letter to a King",
    "Bone",
    "Box of Chocolates",
    "Iron Ball",
    "Purple Lantern",
    "Starfish",
    "Tentacle",
    "Celestial Rune",
    "Empty Milk Bottle",
    "Cliff Flowers",
    "Death Scroll Artifact",
    "Fire Scroll Artifact",
    "Rose",
    "Wind Scroll Artifact",
    "Ruined Bronze Bar",
    "Common Musical Note",
    "Empty Chest",
    "Mysterious Token",
    "Letter of Resignation",
    "Rotten Tomato",
    "Treasure Chest",
    "Zimos Runestone",
    "Deadly Berries",
    "Marble",
    "A Nice Rock",
    "Love Letter",
    "Pumpkin Coin",
    "Single Rose",
    "Telescope",
    "Lost Girls Rabbit"
]
*/

var hasbuyers = [ "Absolute Zero", "Absolute Zero XII", "Absolute Zero XIII", "Armour Made from Nokias", "Armour Made from Nokias IX", "Armour Made from Nokias X", "Armour Made from Nokias XI", "Armour Made from Nokias IX", "Armour Made from Nokias X", "Armour Made from Nokias XI", "Avatar #79", "Bandit Bow", "Blade of the North", "Blade of the South", "Blight of Hope", "Blight of Hope XV", "Blight of Hope XVI", "Blight of Hope XVII", "Blight of Hope XVIII", "Blight of Hope XIX", "Blight of Hope XX", "Bloodlust", "Bow for Bandits", "Bow of Saint Nicholas", "Broken Crown of a God", "Broken Trapped Soul", "Bread", "Captain Camel", "Captain Hook", "Captain Hook II", "Captain Hook III", "Captain Hook IV", "Captain Hook XV", "Captain Hook XVI", "Captain Hook XVII", "Captain Thorns Toothpick", "Captain Thorns Toothpick XVIII", "Captain Thorns Toothpick XIX", "Captain Thorns Toothpick XX", "Caramel Apple", "Cherry", "Chocolate Frog", "Collectable Item Sprite #72", "Crisp Desire", "Crisp Desire II", "Crisp Desire III", "Crisp Desire IV", "Crisp Desire XII", "Crisp Desire XIII", "Crisp Desire XIV", "Crisp Desire XVIII", "Crisp Desire XIX", "Crisp Desire XX", "Crisp Desire XXI", "Crisp Desire XXII", "Crown of a God", "Damaged Crown of a God", "Darkheart", "Daves Wooden Spoon", "Death", "Defender of Fallen Souls", "Defender of Souls", "Defiler of the Forests", "Desiers Blade", "Dino with Jeans", "Embroided Footsteps of Immortal Torment", "Endbringer", "Eternal Glory", "Face of Insanity I", "Fortune", "Fortune XVIII", "Fortune XIX", "Fortune XX", "Fries", "God of Hellfire", "Golem", "Halloween Event Sprite", "Hamburger", "Headcover", "Human Eye", "Illuminati", "Illuminati V", "Illuminati VI", "Illuminati VII", "Illuminati X", "Illuminati XI", "Illuminati XII", "Illuminati XII", "Illuminati XIII", "Illuminati XIV", "Illuminati XV", "Illuminati XVI", "Illuminati XVII", "Illuminati XVIII", "Illuminati XIX", "Illuminati XX", "Illuminati XXI", "Illuminati XXII", "Illuminati XXIII", "Immortal", "Infusion of Brilliant Runes", "Infusion of Brilliant Runes X", "Infusion of Brilliant Runes XI", "Infusion of Brilliant Runes XII", "Infusion of Brilliant Runes XXI", "Infusion of Brilliant Runes XXII", "Infusion of Brilliant Runes XXIII", "Juicy Insect", "Legendary Simple Gauntlet", "Light Ender", "Magical Nut", "Manifestation of Death", "Medium Amulet of Defence", "Medium Amulet of Defence", "Medium Amulet of Strength", "Medium Amulet of Strength", "Mighty Axe of Might", "Mighty Toothpick I", "Mighty Toothpick II", "Mighty Toothpick III", "Mushroom", "Nightsky", "No Reference Here", "Oasis Camel", "Oncha", "Panty Dropper", "Panty Dropper XVIII", "Poor Mans Boots", "Queens Chest", "Rat", "Raw Fish", "Red Shroom", "Red Trimmed Wizard Hat", "Rune-Forged Bone Crown", "Rune-Forged Bone Crown II", "Rune-Forged Bone Crown III", "Rune-Forged Bone Crown IV", "Rune-Forged Bone Crown V", "Rune-Forged Bone Crown VI", "Rune-Forged Bone Crown VII", "Rune-Forged Bone Crown XV", "Rune-Forged Bone Crown XVI", "Rune-Forged Bone Crown XVII", "Rune-Forged Bone Crown XVIII", "Rune-Forged Bone Crown XIX", "Rune-Forged Bone Crown XX", "Rune-Forged Bone Crown XXI", "Rune-Forged Bone Crown XXII", "Rune-Forged Bone Crown XXIII", "Rune-Forged Flail I", "Rune-Forged Flail II", "Rune-Forged Flail III", "Rune-Forged Flail XXI", "Rune-Forged Flail XXII", "Rune-Forged Flail XXIII", "Runeblaster XV", "Runeblaster XVI", "Runeblaster XVII", "Sacred Hope", "Salted Caramel", "Salted Caramel XVIII", "Salted Caramel XIX", "Salted Caramel XX", "Setting Sun", "Setting Sun XV", "Setting Sun XVI", "Setting Sun XVII", "Setting Sun XVIII", "Setting Sun XIX", "Setting Sun XX", "Setting Sun XXI", "Setting Sun XXII", "Setting Sun XXIII", "Shadow Eater", "Shadow Silver of Death", "Shadows Strike", "Shadowsteel", "Shrek", "Shrek XII", "Shrek XIII", "Shrek XIV", "Shrek XV", "Shrek XVI", "Shrek XVII", "Shrek XVIII", "Shrek XIX", "Shrek XX", "Shrek XXI", "Shrek XXII", "Shrek XXIII", "Simple Dagger Mk II", "Simple Sword", "SimpleMMO Weapon", "Some Geezers Bow", "Soul of Fortune", "South Korea (World Football Cup 2022)", "Special Carrot", "Spicy Meat", "Spidertoast", "Stars to Throw", "Star Destroyer", "Stealer of Shadows", "Stinger", "Strong Amulet of Defence", "Strong Amulet of Defence", "Strong Amulet of Strength", "Strong Amulet of Strength", "Strongest Toothpick", "Surprise Mothertrucker", "Sun Strike", "Sun Strike IX", "Sun Strike X", "Sun Strike XI", "Sword for Sloths", "Sword for Sloths XII", "Sword for Sloths XIII", "Sword for Sloths XIV", "Sword for Sloths XXI", "Sword for Sloths XXII", "Sword for Sloths XXIII", "Sword of Doughnuts", "Swordy McSwordface", "Swordy McSwordface XII", "Swordy McSwordface XIII", "Swordy McSwordface XIV", "T-Shirt for the Homeless", "Tempting Sun", "Tempting Sun V", "Tempting Sun VI", "Tempting Sun VII", "Tempting Sun XII", "Tempting Sun XIII", "Tempting Sun XIV", "Tempting Sun XV", "Tempting Sun XVI", "Tempting Sun XVII", "Tempting Sun XXI", "Tempting Sun XXII", "Tempting Sun XXIII", "Tempting Sun XXI", "Tempting Sun XXII", "Tempting Sun XXIIII", "Tesco", "The Death Star", "The Devils Left Hand", "The Devils Right Hand", "The End", "The Hurricane", "The Hurricane X", "The Hurricane XI", "The Hurricane XII", "The Last Thing You'll Ever See", "The Middle Finger", "The Nokia", "The Scoundrel", "The Sleeper", "The Storm", "The Storm", "The Storm II", "The Storm III", "The Storm IV", "The Storm XXI", "The Storm XXII", "The Storm XXIII", "The Tank II", "The Tank XIX", "The Tank XX", "The Tank XXI", "The Tank XXII", "The Thunder", "The Thunder IX", "The Thunder X", "The Thunder XI", "The Thunder XII", "The Thunder XIII", "The Thunder XIV", "The Vacuum", "Thunderstorm", "Thunderstorm II", "Thunderstorm IX", "Thunderstorm X", "Thunderstorm XI", "Thunderstorm X", "Thunderstorm XI", "Thunderstorm XII", "Toothpick", "Twisted", "Unholy", "Voice of Pride", "Voice of the Runes", "Voice of the Runes II", "Voice of the Runes III", "Voice of the Runes IV", "Voice of the Runes V", "Voice of the Runes VI", "Voice of the Runes VII", "Voice of the Runes X", "Voice of the Runes XI", "Voice of the Runves XII", "Voice of the Runes XV", "Voice of the Runes XVI", "Voice of the Runes XVII", "Voice of the Runes XVIII", "Voice of the Runes XIX", "Voice of the Runes XX", "Warden of Sunlight I", "Warden of Sunlight II", "Warden of Sunlight III", "Warden of Sunlight IV", "Warden of Sunlight VII", "Warden of Sunlight VIII", "Warden of Sunlight XIV", "Warden of Sunlight XV", "Warden of Sunlight XVI", "Warden of Sunlight XVII", "Warden of Sunlight XVIII", "Warden of Sunlight XIX", "Warden of Sunlight XX", "Warden of Sunlight XXI", "Warden of Sunlight XXII", "Warden of Sunlight XXIII", "Warlords Reaver", "Watermelon Slice", "Weak Amulet of Defence", "Weak Amulet of Defence", "Weak Amulet of Strength", "Weak Amulet of Strength", "Wind Buckler", "Wizards Hat", "Wooden Bow", "Wooden Stick", "Yearning Footsteps of Tears", "Zero II", "Zero III"]

var gwverified = ["A Nice Rock", "Banana", "Bone", "Caramel Apple", "Cliff Flower", "Cotton Candy", "Dangerous Mushroom", "Empty Milk Bottle", "Fabulous Starfish", "Fish Tail", "Flowers", "Forgotten Coins", "Four Leaf Clover", "Gold Coin", "Iron Ball", "Jewel", "Leaf", "Letter of Resignation", "Mortar and Pestle", "Mushroom", "Not-So-Deadly-poison", "Powerball", "Purple Crafting Dust", "Purple Lantern", "Raw Fish", "Red Lantern", "Red Shroom", "Ships Helm", "Single Rose", "Starfish", "Tentacle", "The Middle Finger", "Water Balls", "Wing"]

let x = document.querySelectorAll(`[class*="-item"]`)
for (let index = 1; index < x.length; index++) {

  if(hasbuyers.includes(x[index].innerText)){x[index].parentElement.parentElement.parentElement.parentElement.style.background = "#00a2ee26";}

      if (baditems.includes(x[index].innerText)){x[index].parentElement.parentElement.parentElement.parentElement.style.background = "#b91010bf";
                                                }
  if(collectibles.includes(x[index].innerText)){x[index].parentElement.parentElement.parentElement.parentElement.style.background = "#001eff17";}
  if(gwverified.includes(x[index].innerText)){x[index].parentElement.parentElement.parentElement.parentElement.style.background = "#105c1ab8";}

  else{};index++
}
