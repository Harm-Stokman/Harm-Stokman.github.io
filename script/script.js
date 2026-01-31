
function copying() {
    var copied = document.getElementById("mail").innerText;
    navigator.clipboard.writeText(copied)
}

function dropDown() {
    document.getElementById("deDrop").classList.toggle("show");
}

// de index voor de slides wordt voor beide slideshows op 1 gezet
let slideIndex = 1;

let slideIndexAbout = 1;
toonSlideAbout(slideIndexAbout);

// hier wordt de index aangepast na het klikken van de witte pijlen 
function slideTellenAbout(a) {
    toonSlideAbout(slideIndexAbout += a);
}

// hier baseert de functie op de index welke pagina er vertoond moet worden door middel van de index na het klikken van een van de pijlen
// dit geldt ook voor de functie toonSlideProject()
function toonSlideAbout(a) {
    let index;
    let slide = document.getElementsByClassName("about-content");

    if (a > slide.length) {
        slideIndexAbout = 1;
    }

    if (a < 1) {
        slideIndexAbout = slide.length;
    }

    for (index = 0; index < slide.length; index++) {
        slide[index].style.display = "none";
    }

    slide[slideIndexAbout - 1].style.display = "flex";
}

toonSlideProject(slideIndex);

function slideTellen(n) {
    toonSlideProject(slideIndex += n);
}

function toonSlideProject(n) {
    let i;
    let slides = document.getElementsByClassName("project-content");

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "flex";
}
