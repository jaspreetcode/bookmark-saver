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

function addBookmark(name, url) {
  const li = document.createElement("li");
  const link = document.createElement("a");

  link.href = url;
  link.textContent = name;
  link.target = "_blank"; // open the link in a new tab

  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.addEventListener("click", function () {
    bookmarkList.removeChild(li);
    removeBookmarkFromStorage(name, url); // remove the bookmark from local storage.
  });

  li.appendChild(link);
  li.appendChild(removeButton);

  bookmarkList.appendChild(li);
}

function getBookmarksFromStorage() {
  const bookmarks = localStorage.getItem("bookmarks");
  return bookmarks ? JSON.parse(bookmarks) : [];
}

function saveBookmark(name, url) {
  const bookmarks = getBookmarksFromStorage();
  bookmarks.push({ name, url });
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}

function loadBookmarks() {
  const bookmarks = getBookmarksFromStorage();
  bookmarks.forEach((bookmark) => {
    addBookmark(bookmark.name, bookmark.url);
  });
}

function removeBookmarkFromStorage(name, url) {
  let bookmarks = getBookmarksFromStorage();
  bookmarks = bookmarks.filter(
    (bookmark) => bookmark.name !== name || bookmark.url !== url,
  );
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}
