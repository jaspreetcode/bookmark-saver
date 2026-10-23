// DOM Elements
const addBookmarkBtn = document.getElementById("add-bookmark");
const bookmarkList = document.getElementById("bookmark-list");
const bookmarkNameInput = document.getElementById("bookmark-name");
const bookmarkUrlInput = document.getElementById("bookmark-url");

// Once the website is loaded, load the bookmarks
document.addEventListener("DOMContentLoaded", loadBookmarks);

function loadBookmarks() {}

// When the "Add bookmark" button is clicked, then add the bookmark and save it
addBookmarkBtn.addEventListener("click", function () {
  const name = bookmarkNameInput.value.trim();
  const url = bookmarkUrlInput.value.trim();

  // if any of the name input or url input is not provide then show an alert with appropriate message
  if (!name || !url) {
    alert("Please enter both name and URL.");
    return;
  } else {
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      alert("Please enter a valid URL starting with http:// or https://");
      return;
    }

    addBookmark(name, url);
    saveBookmark(name, url);
    bookmarkNameInput.value = "";
    bookmarkUrlInput.value = "";
  }
});

function addBookmark(name, url) {}
function saveBookmark(name, url) {}
