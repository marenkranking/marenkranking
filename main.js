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

