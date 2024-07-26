var indexvalue=0;
function slideShow(){
    setTimeout (slideShow,4000);
    var x;
    const p=document.querySelectorAll("#img1");
    for(x=0;x<p.length;x++){
        p[x].style.display="none";
    }
    indexvalue++;
if(indexvalue>p.length){
    indexvalue=1;
}
p[indexvalue -1].style.display="block";

}
slideShow();






// let currentSlide = 0;
// const p = document.querySelectorAll("#img1")
// const dots = document.querySelectorAll('.dot')

// const init = (n) => {
//   p.forEach((slide, index) => {
//     slide.style.display = "none"
//     dots.forEach((dot, index) => {
//       dot.classList.remove("active")
//     })
//   })
//   p[n].style.display = "block"
//   dots[n].classList.add("active")
// }
// document.addEventListener("DOMContentLoaded", init(currentSlide))

// const next = () => {
//   currentSlide >= p.length - 1 ? currentSlide = 0 : currentSlide++
//   init(currentSlide)
// }

// const prev = () => {
//   currentSlide <= 0 ? currentSlide = p.length - 1 : currentSlide--
//   init(currentSlide)
// }

// document.querySelector(".next").addEventListener('click', next)

// document.querySelector(".prev").addEventListener('click', prev)
// setInterval(() => {
//   next()
// }, 2000);

// dots.forEach((dot, i) => {
//   dot.addEventListener("click", () => {
//     console.log(currentSlide)
//     init(i)
//     currentSlide = i
//   })
// })










let currentSlide = 0;
const p = document.querySelectorAll("#img1")
const dots = document.querySelectorAll('.dot')

const init = (n) => {
  p.forEach((main, index) => {
    main.style.display = "none"
    dots.forEach((dot, index) => {
      dot.classList.remove("active")
    })
  })
  p[n].style.display = "block"
  dots[n].classList.add("active")
}
document.addEventListener("DOMContentLoaded", init(currentSlide))

const next = () => {
  currentSlide >= p.length - 1 ? currentSlide = 0 : currentSlide++
  init(currentSlide)
}

const prev = () => {
  currentSlide <= 0 ? currentSlide = p.length - 1 : currentSlide--
  init(currentSlide)
}

document.querySelector(".next").addEventListener('click', next)

document.querySelector(".prev").addEventListener('click', prev)
setInterval(() => {
  next()
}, 2000);

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    console.log(currentSlide)
    init(i)
    currentSlide = i
  })
})












const mission1 = document.querySelector("#mission");
const future1 = document.querySelector("#future");
const staff1 = document.querySelector("#staff");

         mission1.addEventListener("click",() => {
            window.location.href = "http://127.0.0.1:5501/about.html";
        });
        future1.addEventListener("click",() => {
                    window.location.href = "http://127.0.0.1:5501/future.html";
                });
        staff1.addEventListener("click",()=>
        {
            window.location.href = "http://127.0.0.1:5501/staff.html"
        });


        const scrollContent = document.querySelector('.scroll-content');

scrollContent.addEventListener('mouseenter', () => {
    scrollContent.style.animationPlayState = 'paused';
});

scrollContent.addEventListener('mouseleave', () => {
    scrollContent.style.animationPlayState = 'running';
});










// let currentSlide = 0;
// const slides = document.querySelectorAll("#img1")
// const dots = document.querySelectorAll('.dot')

// const init = (n) => {
//   slides.forEach((slide, index) => {
//     slide.style.display = "none"
//     dots.forEach((dot, index) => {
//       dot.classList.remove("active")
//     })
//   })
//   slides[n].style.display = "block"
//   dots[n].classList.add("active")
// }
// document.addEventListener("DOMContentLoaded", init(currentSlide))

// const next = () => {
//   currentSlide >= slides.length - 1 ? currentSlide = 0 : currentSlide++
//   init(currentSlide)
// }

// const prev = () => {
//   currentSlide <= 0 ? currentSlide = slides.length - 1 : currentSlide--
//   init(currentSlide)
// }

// document.querySelector(".next").addEventListener('click', next)

// document.querySelector(".prev").addEventListener('click', prev)


// setInterval(() => {
//   next()
// }, 5000);

// dots.forEach((dot, i) => {
//   dot.addEventListener("click", () => {
//     console.log(currentSlide)
//     init(i)
//     currentSlide = i
//   })
// })









// const missionslider = document.querySelectorAll('.missiontextslider');
// const missiondot = document.querySelectorAll('.missiondot');
// let missioncounter = 0; // Counter initialized to 0 for correct indexing

// slidefun(missioncounter);

// let missiontimer = setInterval(autoslide, 7000);

// function autoslide() {
//     missioncounter += 1;
//     slidefun(missioncounter);
// }

// function plusSlides(n) {
//     missioncounter += n;
//     slidefun(missioncounter);
//     resetTimer();
// }

// function missioncurrentSlide(n) {
//     missioncounter = n;
//     slidefun(missioncounter);
//     resetTimer();
// }

// function resetTimer() {
//     clearInterval(timer);
//     timer = setInterval(autoslide, 8000);
// }

// function slidefun(n) {
//     let i;
//     for (i = 0; i < missionslider.length; i++) {
//         missionslider[i].style.display = "none";
//         missionslider[i].style.display;
//     }

//     for (i = 0; i < missiondot.length; i++) {
//         missiondot[i].classList.remove('active');
//     }

//     if (n >= missionslider.length) {
//         missioncounter = 0; // Reset counter if it exceeds the length of slides
//     }
//     if (n < 0) {
//         missioncounter = missionslider.length - 1; // Set counter to last slide index if it goes below 0
//     }
//     missionslider[missioncounter].style.display = "block";
//     missiondot[missioncounter].classList.add('active');
// }
