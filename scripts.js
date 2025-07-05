$(document).ready(function() {
    let currentSlide = 0;
    const slides = $('.banner-slider .slide');
    const totalSlides = slides.length;
    let autoplayInterval;

    function showSlide(index) {
        slides.css({ opacity: 0 }).hide();
        $(slides[index]).css({ opacity: 1 }).show();
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    }

   
    showSlide(currentSlide);

    
    $('.next').click(function() {
        nextSlide();
        restartAutoplay();
    });

    $('.prev').click(function() {
        prevSlide();
        restartAutoplay();
    });

    
    function startAutoplay() {
        autoplayInterval = setInterval(nextSlide, 5000);
    }

    
    function restartAutoplay() {
        clearInterval(autoplayInterval);
        startAutoplay();
    }

    startAutoplay();
});
