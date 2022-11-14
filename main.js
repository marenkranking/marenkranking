// NAV BAR SCROLL EFFECT (from https://stackoverflow.com/questions/8218159/javascript-check-if-page-is-at-the-top)

window.addEventListener("scroll", function(){
    if (window.scrollY == 0) {
        document.querySelector('nav').className = "nav-bar";
    } else {
        document.querySelector('nav').className = "nav-bar nav-bar-scroll";
    }
})

// FILTERING ON HOMEPAGE

function filterResults(event) {
    console.log(event.target.innerHTML);
    let category = event.target.innerHTML

    document.querySelectorAll(".homepage-project-link").forEach(function(card) {
        if (card.classList.contains(category)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none'
        }
    })
}

function toggleClass(event) {
    var tagList = document.querySelectorAll(".section-name")
    for (let tag of tagList) {
        tag.classList.remove("clicked")
    }
    event.target.classList.toggle("clicked");
}

var tagList = document.querySelectorAll(".section-name")
for (let tag of tagList) {
    tag.addEventListener("click", filterResults);
    tag.addEventListener("click", toggleClass);
}

// AUTOMATIC SLIDESHOW

let slideshowIndex = 0;
automaticSlidesCD();

function automaticSlidesCD() {
  let i;
  let slides = document.getElementsByClassName("cd-image");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideshowIndex++;
  if (slideshowIndex > slides.length) {slideshowIndex = 1}
  slides[slideshowIndex-1].style.display = "block";
  setTimeout(automaticSlidesCD, 1500);
}


let slowerSlideshowIndex = 0;
automaticSlides();

function automaticSlides() {
  let i;
  let slides = document.getElementsByClassName("layout-image");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slowerSlideshowIndex++;
  if (slowerSlideshowIndex > slides.length) {slowerSlideshowIndex = 1}
  slides[slowerSlideshowIndex-1].style.display = "block";
  setTimeout(automaticSlides, 2500);
}


let illoSlideshowIndex = 0;
automaticSlidesIllos();

function automaticSlidesIllos() {
  let i;
  let slides = document.getElementsByClassName("illo-image");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  illoSlideshowIndex++;
  if (illoSlideshowIndex > slides.length) {illoSlideshowIndex = 1}
  slides[illoSlideshowIndex-1].style.display = "block";
  setTimeout(automaticSlidesIllos, 2500);
}

// GALLERY LIGHTBOX: https://www.w3schools.com/howto/howto_js_lightbox.asp

function openModal() {
    document.getElementById("myModal").style.display = "block";
}
  
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// next / previous

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("gallery-image");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
    captionText.innerHTML = dots[slideIndex-1].alt;
}

const closingModal = (ev) => {
    var modal = document.getElementById("myModal");    
    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
     }
    } 
};

document.querySelector('#myModal').onclick = closingModal;

const modal = document.getElementById("myModal");
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
     }
}


// AUTOMATIC SLIDESHOW

// var slideshowIndex = 0;
// carousel();

// function carousel() {
//   var i;
//   var x = document.querySelectorAll(".project-page-image");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   slideshowIndex++;
//   if (slideshowIndex > x.length) {slideshowIndex = 1}
//   console.log(x[slideshowIndex-1].style.display)
//   x[slideshowIndex-1].style.display = "block";
//   setTimeout(carousel, 2000);
// }

