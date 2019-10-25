const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const controls = document.querySelectorAll('.image-controls');
const auto = true;
const intervalTime = 5000;
let slideInterval;


//click next button to go to next slide
function nextSlide(){
    if(auto){
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if (current.nextElementSibling) {
        current.nextElementSibling.classList.add('current');
    } else {
       slides[0].classList.add('current'); 
    }
    setTimeout(() => current.classList.remove('current'), 200);
}


//click previous button to go to next slide
function prevSlide(){
    if(auto){
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if (current.previousElementSibling) {
        current.previousElementSibling.classList.add('current');
    } else {
       slides[slides.length - 1].classList.add('current'); 
    }
    setTimeout(() => current.classList.remove('current'), 200);
}


//auto slide on page load
function autoSlide(){
    if(auto) {
        slideInterval = setInterval(nextSlide, intervalTime);
    }
}


next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);



autoSlide();
