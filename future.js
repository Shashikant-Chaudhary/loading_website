const slider = document.querySelectorAll('.textslider');
const dot = document.querySelectorAll('.dot');
let counter = 0; // Counter initialized to 0 for correct indexing

slidefun(counter);

let timer = setInterval(autoslide, 4000);

function autoslide() {
    counter += 1;
    slidefun(counter);
}

function plusSlides(n) {
    counter += n;
    slidefun(counter);
    resetTimer();
}

function currentSlide(n) {
    counter = n;
    slidefun(counter);
    resetTimer();
}

function resetTimer() {
    clearInterval(timer);
    timer = setInterval(autoslide, 4000);
}

function slidefun(n) {
    let i;
    for (i = 0; i < slider.length; i++) {
        slider[i].style.display = "none";
    }

    for (i = 0; i < dot.length; i++) {
        dot[i].classList.remove('active');
    }

    if (n >= slider.length) {
        counter = 0; // Reset counter if it exceeds the length of slides
    }
    if (n < 0) {
        counter = slider.length - 1; // Set counter to last slide index if it goes below 0
    }
    slider[counter].style.display = "block";
    dot[counter].classList.add('active');
}
