// Get the modal
var htmlModal = document.getElementById("htmlModal");

// Get the button that opens the modal
var htmlBnt = document.getElementById("htmlBtn");

// Get the <span> element that closes the modal
var button = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
htmlBtn.onclick = function() {
  htmlModal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
button.onclick = function() {
  htmlModal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == htmlModal) {
    htmlModal.style.display = "none";
  }
};

// *********************** CSS Modal ******************************

// Get the modal
var cssModal = document.getElementById("cssModal");

// Get the button that opens the modal
var cssBnt = document.getElementById("cssBtn");


// When the user clicks the button, open the modal
cssBtn.onclick = function() {
  cssModal.style.display = "block";
};
