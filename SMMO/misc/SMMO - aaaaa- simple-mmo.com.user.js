// ==UserScript==
// @name        SMMO - aaaaa- simple-mmo.com
// @updateURL   https://github.com/oligochrome/scripts/raw/main/SMMO - aaaaa- simple-mmo.com.user.js
// @namespace      https://github.com/oligochrome
// @match       https://web.simple-mmo.com/user/view/265320
// @grant       none
// @version     1.0.0
// @author      Ogliochrome
// @description 5/12/2023, 11:47:56 AM

// ==/UserScript==

// This userscript allows you to store and insert canned text in text inputs.

// Variables
var cannedText = {}; // A dictionary of canned text.
var currentInput = null; // The current text input.

// Functions
function addCannedText(text) {
  // Add a new canned text entry.
  cannedText[text] = text;
}

function insertCannedText(text) {
  // Insert the specified canned text into the current text input.
  if (currentInput) {
    currentInput.value = currentInput.value.replace(/^\s*|\s*$/g, '') + text;
  }
}

// Events
document.addEventListener('keydown', function(event) {
  // Check if the user pressed the `Ctrl`+`Space` keyboard shortcut.
  if (event.ctrlKey && event.keyCode === 32) {
    // Open the canned text menu.
    var menu = document.createElement('div');
    menu.className = 'canned-text-menu';
    for (var text in cannedText) {
      var item = document.createElement('a');
      item.textContent = text;
      item.addEventListener('click', function() {
        insertCannedText(this.textContent);
      });
      menu.appendChild(item);
    }
    document.body.appendChild(menu);
    menu.style.display = 'block';
    event.preventDefault();
  }
});

document.addEventListener('keyup', function(event) {
  // Close the canned text menu if the user pressed a key other than `Enter`.
  if (event.keyCode !== 13) {
    document.querySelector('.canned-text-menu').style.display = 'none';
  }
});

// Initialization
addCannedText('This is a canned text entry.');
addCannedText('Another canned text entry.');