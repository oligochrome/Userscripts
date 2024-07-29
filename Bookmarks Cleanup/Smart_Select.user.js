// ==UserScript==
// @name         Bookmarks cleanup smart select
// @namespace   https://github.com/oligochrome
// @version      0.1
// @description  try to take over the world!
// @author      Ogliochrome
// @match        chrome-extension://oncbjlgldmiagjophlhobkogeladjijl/
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

// Find the existing button by its ID
const findBrokenButton = document.getElementById('button-menu');

// Create a new button element
const smartSelectButton = document.createElement('button');

// Set the text for the new button
smartSelectButton.textContent = 'Smart Select';

// Add an ID or class if needed (optional)
smartSelectButton.id = 'smart_select_button'; // Optional, for styling or further manipulation

// Add an event listener to call clickAllExceptFirstBox() when the new button is clicked
smartSelectButton.addEventListener('click', clickAllExceptFirstBox);

// Insert the new button next to the existing button
findBrokenButton.parentNode.insertBefore(smartSelectButton, findBrokenButton.nextSibling);

// Define the clickAllExceptFirstBox function
function clickAllExceptFirstBox() {
    document.querySelectorAll('ul.list-group.list-group-flush').forEach(ul => {
        const liElements = ul.querySelectorAll('li.list-group-item');

        if (liElements.length > 1) {
            for (let i = 1; i < liElements.length; i++) {
                const inputElement = liElements[i].querySelector('label > input[type="checkbox"]');

                if (inputElement) {
                    // Simulate a click event on the checkbox
                    inputElement.click();
                }
            }
        }
    });
}
