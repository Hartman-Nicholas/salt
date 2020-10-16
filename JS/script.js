/*jshint esversion: 6 */

// Get the modal
let modal = document.getElementsByClassName("myModal");

// Get the button that opens the modal
let btn = document.getElementsByClassName("myBtn");

// Get the <button> element that closes the modal
let button = document.getElementsByClassName("close");

// When the user clicks the button, open the modal

for (let i = 0; i < btn.length; i++) {
  btn[i].onclick = function() {
    modal[i].style.display = "block";
    return modal[i];
  };
}

// When the user clicks on <button> (x), close the modal
for (let i = 0; i < button.length; i++) {
  button[i].onclick = function() {
    modal[i].style.display = "none";
    console.log("My value:" + i);
  };
}

// When the user clicks anywhere outside of the modal, close it
for (let i = 0; i < modal.length; i++)
  window.addEventListener("click", function(event) {
    if (event.target == modal[i]) {
      modal[i].style.display = "none";
    }
  });

// *********************************slideshow**************************

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
//
// var slideIndex = 0;
// showSlides();
//
// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1;}
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 5000); // Change image every 5 seconds
// }
