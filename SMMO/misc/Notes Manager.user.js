// ==UserScript==
// @name         Notes Manager
// @namespace    http://yournamespace.com
// @version      1.0
// @description  Create and manage notes with hotkey "ALT + 1"
// @match        *://*/*
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==

(function () {
  'use strict';

  // CSS styles for the modal (same as previous code)
  const modalStyles = `
    .notes-modal {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 1000;
    }

    .notes-modal-content {
      background-color: #fff;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 20px;
      border: 1px solid #ccc;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    }

    .note-button {
      background-color: #007BFF;
      color: #fff;
      border: none;
      padding: 5px 10px;
      margin-right: 10px;
      cursor: pointer;
    }

    .delete-button {
      background-color: #FF3333;
      color: #fff;
      border: none;
      padding: 5px 10px;
      cursor: pointer;
    }
  `;

  // Helper function to add styles (same as previous code)
  function addStyles(styles) {
    const styleElement = document.createElement('style');
    styleElement.textContent = styles;
    document.head.appendChild(styleElement);
  }

  addStyles(modalStyles);

  // Create the modal element and append it to the document body
  const modal = document.createElement('div');
  modal.className = 'notes-modal';
  modal.innerHTML = '<div class="notes-modal-content"></div>';
  document.body.appendChild(modal);

  // Helper function to toggle modal display
  function toggleModal() {
    const modal = document.querySelector('.notes-modal');
    if (modal.style.display === 'block' || modal.style.display === '') {
      modal.style.display = 'none';
    } else {
      modal.style.display = 'block';
      displayNotes();
    }
  }

  // Function to display notes in the modal
  function displayNotes() {
    const notes = GM_getValue('notes', []);
    const currentUrl = window.location.href;
    const filteredNotes = notes.filter((note) => note.url === currentUrl || note.url === getTopLevelDomain(currentUrl));
    let notesHTML = '<ul>';
    filteredNotes.forEach((note, index) => {
      notesHTML += `
        <li>
          <button class="note-button" data-index="${index}">${note.title}</button>
          <button class="delete-button" data-index="${index}">Delete</button>
        </li>
      `;
    });
    notesHTML += '</ul>';
    notesHTML += `
      <form id="new-note-form">
        <input type="text" id="note-title" placeholder="Title (optional)">
        <textarea id="note-content" placeholder="Enter your note"></textarea>
        <button type="submit">Save</button>
      </form>
    `;
    showModal(notesHTML);
  }

  // Helper function to get top-level domain (same as previous code)
  function getTopLevelDomain(url) {
    const hostname = new URL(url).hostname;
    const parts = hostname.split('.');
    return parts.slice(-2).join('.');
  }

  // Event listener for the hotkey "ALT + 1" to toggle modal display (same as previous code)
  document.addEventListener('keydown', (e) => {
    if (e.altKey && e.key === '1') {
      toggleModal();
    }
  });

  // Event listener for submitting the new note form
  document.addEventListener('submit', (e) => {
    e.preventDefault();
    const noteTitle = document.getElementById('note-title').value;
    const noteContent = document.getElementById('note-content').value;
    const note = { title: noteTitle || noteContent.substring(0, 50), content: noteContent, url: window.location.href };
    const notes = GM_getValue('notes', []);
    notes.push(note);
    GM_setValue('notes', notes);
    displayNotes();
  });

  // Event listener for the hotkey "ALT + 1" to toggle modal display
  document.addEventListener('keydown', (e) => {
    if (e.altKey && e.key === '1') {
      toggleModal();
    }
  });

  // Helper function to display a modal
  function showModal(content) {
    const modal = document.createElement('div');
    modal.className = 'notes-modal';
    modal.innerHTML = `
      <div class="notes-modal-content">
        ${content}
      </div>
    `;
    document.body.appendChild(modal);
  }

  // Helper function to create a note
  function createNote() {
    const noteTitle = prompt('Enter a title (optional):');
    const noteContent = prompt('Enter your note:');
    const note = { title: noteTitle || noteContent.substring(0, 50), content: noteContent };
    const notes = GM_getValue('notes', []);
    notes.push(note);
    GM_setValue('notes', notes);
    displayNotes();
  }


  // Event listener for the hotkey "ALT + 1"
  document.addEventListener('keydown', (e) => {
    if (e.shiftKey && e.key === '1') {
      displayNotes();
    }
  });

  // Event listener for creating a new note
  document.addEventListener('click', (e) => {
    if (e.target.id === 'create-note-button') {
      createNote();
    }
  });

  // Event listener for opening a note
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('note-button')) {
      const notes = GM_getValue('notes', []);
      const index = parseInt(e.target.getAttribute('data-index'));
      const note = notes[index];
      const noteTitle = prompt('Edit title (optional):', note.title);
      const noteContent = prompt('Edit note:', note.content);
      notes[index] = { title: noteTitle || noteContent.substring(0, 50), content: noteContent, url: window.location.href };
      GM_setValue('notes', notes);
      displayNotes();
    }
  });

  // Event listener for deleting a note
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-button')) {
      const notes = GM_getValue('notes', []);
      const index = parseInt(e.target.getAttribute('data-index'));
      notes.splice(index, 1);
      GM_setValue('notes', notes);
      displayNotes();
    }
  });
})();
