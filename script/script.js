
function copying() {
    var copied = document.getElementById("mail").innerText;
    navigator.clipboard.writeText(copied)
}

function dropDown() {
    document.getElementById("deDrop").classList.toggle("show");
}


// let slideIndexAbout = 1;
// toonSlideAbout(slideIndexAbout);

// function slideTellenAbout(n) {
//     toonSlideAbout(slideIndexAbout += n);
// }

// function huidigeSlideAbout(n) {
//     toonSlideAbout(slideIndexAbout = n);
// }

// function toonSlideAbout(n) {
//     let index;
//     let slide = document.getElementsByClassName("about-content");

//     if (n > slide.length) {
//         slideIndexAbout = 1
//     }

//     if (n < 1)  {
//         slideIndexAbout = slide.length
//     }

//     for (index = 0; index < slide.length; index++) {
//         slide[index].style.display = "none"
//     }
        
//     slide[slideIndexAbout-1].style.display = "flex";
// }


let slideIndex = 1;
toonSlideProject(slideIndex);

function slideTellen(n) {
    toonSlideProject(slideIndex += n);
}

function huidigeSlide(n) {
    toonSlideProject(slideIndex = n);
}

function toonSlideProject(n) {
    let i;
    let slides = document.getElementsByClassName("project-content");

    if (n > slides.length) {
        slideIndex = 1
    }

    if (n < 1)  {
        slideIndex = slides.length
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }

    slides[slideIndex-1].style.display = "flex";
}
