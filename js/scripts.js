window.onload = function () {
    document.querySelector('.main .main-video .video-container .video').play();
}

document.addEventListener('touchstart', function () {
    if (document.getElementById('video-main').paused) {
        document.getElementById('video-main').play();
    }

}, false);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function scrollToElement(selector) {
    const element = document.querySelector(selector);

    if (element) {
        element.scrollIntoView({
            behavior: 'smooth', 
            block: 'start' 
        });
    }
}

window.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;
    var textBox = document.querySelector('.aditional-section .aditional-part .bg .text-box');
    var translateY = -scrollPosition * 0.105;

    textBox.style.transform = 'translateY(' + translateY + 'px)';
});

document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.images-container .images');
    let currentImageIndex = 0;
    const intervalTime = 5000;
    
    function changeImage() {
        images[currentImageIndex].classList.remove('active');
        
        currentImageIndex = (currentImageIndex + 1) % images.length;
        
        images[currentImageIndex].classList.add('active');
    }
    
    images[currentImageIndex].classList.add('active');
    
    setInterval(changeImage, intervalTime);
});