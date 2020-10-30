/*jshint esversion: 6 */



// ******************************** Drop down content **************************

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it

window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};

// ******************************* Document scroll arrows **********************

// // Reference counter outside of function
// var idx = 0;
// // Collect all sections in a NodeList
// var sxn = document.querySelectorAll('section');
// // UPDATED
// /* Loop through the NodeList sxn
// || Assign a data-id attribute to each section
// || Set data-id value to current index of each
// || section
// */
// for (let i = 0; i < sxn.length; i++) {
//   sxn[i].setAttribute('data-id', i);
// }
// // Reference nav
// var nav = document.querySelector('arrow');

// // Collect all anchors into a HTMLCollection
// var lnx = document.links;
// // UPDATED
// // Register document on click event callback is move()
// document.getElementById("arrow").addEventListener('click', move, false);
// // UPDATED
// /* move() determines the direction of scroll by idx
// || If a section is clicked instead of the arrows,
// || then the data-id value of said section is now idx.
// || So when a section is clicked, nothing happens until an
// || arrow is clicked. Once that happens, scrolling starts
// || from the last section clicked.
// */
// function move(e) {
//   if (e.target == lnx[0]) {
//     idx--;
//     if (idx < 0) {
//       idx = sxn.length - 1;
//     }
//   } else if (e.target.tagName === 'SECTION') {
//     idx = e.target.getAttribute('data-id');
//   } else {
//     idx++;
//     if (idx > sxn.length - 1) {
//       idx = 0;
//     }
//   }
//   return idxScroll(idx);
// }

// // Pass idx thru idxScroll
// function idxScroll(idx) {
//   // Reference current active section
//   var act = document.querySelector('.active');
//   // Determine which section becomes active
//   var x = sxn[idx];
//   // Remove active class from current section
//   act.classList.remove('active');
//   // Add active class to new section
//   x.classList.add('active');
//   /* scrollIntoView method has a behavior option that animates
//   || scrolling
//   */
//   x.scrollIntoView({
//     behavior: 'smooth'
//   });
// }

// ********************************Go to top button*****************************

//Get the button:
let mybutton = document.getElementById("goToTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// ******************************* Modal ***************************************

let closeBtns = document.querySelectorAll(".close");

let modalBtns = document.querySelectorAll(".myBtn");

modalBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    let modal = btn.getAttribute("data-modal");

    document.getElementById(modal).style.display = "block";
  });
});

closeBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    let modal = (btn.closest(".modal").style.display = "none");
  });
});

window.addEventListener("click", function (event) {
  if (event.target.className === "modal") {
    event.target.style.display = "none";
  }
});

// Get the modal - JSLinter W083 Warning
// let modal = document.querySelectorAll(".myModal");
//
// // Get the button that opens the modal
// let btn = document.querySelectorAll(".myBtn");
//
// // Get the <button> element that closes the modal
// let button = document.querySelectorAll(".close");
// When the user clicks the button, open the modal
//
// for (let i = 0; i < btn.length; i++) {
//   btn[i].addEventListener("click", function() {
//     modal[i].style.display = "block";
//     return modal[i];
//   });
// }
// // When the user clicks on <button> (x), close the modal
// for (let i = 0; i < button.length; i++) {
//   button[i].addEventListener("click", function() {
//     modal[i].style.display = "none";
//   });
// }
//
// // When the user clicks anywhere outside of the modal, close it
// for (let i = 0; i < modal.length; i++)
//   window.addEventListener("click", function(event) {
//     if (event.target == modal[i]) {
//       modal[i].style.display = "none";
//     }
//   });

// ********************************* Slideshow *********************************

// var slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" actives", "");
//   }
//   slides[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].className += " actives";
// }

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
//   setTimeout(showSlides, 4000); // Change image every 4 seconds
// }
