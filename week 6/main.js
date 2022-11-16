const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

//Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//counter
let counter = 1;
const size = carouselImages[0].clientWidth;
if (counter >= carouselImages.length - 1) return;
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//Button Listeners
nextBtn.addEventListener('click',()=>{
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'tanslateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click',() => {
    
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'tanslateX(' + (-size * counter) + 'px)';
});

carouselSlide.addEventListener('transitioned', () => {
    if (carouselImages[counter].id === 'lastClone') {
        carouselSlige.style.transition = 'none';
        counter = carouselImages.length -2;
        carouselSlide.style.transform = 'tanslateX(' + (-size * counter) + 'px)';
    }
        if (carouselImages[counter].id === 'firstClone') {
        carouselSlige.style.transition = 'none';
        counter = carouselImages.length =counter;
        carouselSlide.style.transform = 'tanslateX(' + (-size * counter) + 'px)';        
        }
});
