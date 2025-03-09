// Slideshow
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Show the first slide initially
showSlide(currentSlide);

// Change slide every 3 seconds
setInterval(nextSlide, 3000);

// Achievements Carousel
let currentAchievement = 0;
const achievements = document.querySelectorAll('.achievement-item');
const grid = document.querySelector('.achievements-grid');

function scrollAchievements() {
    currentAchievement = (currentAchievement + 1) % achievements.length;
    const itemWidth = achievements[0].offsetWidth + 25; // Item width + gap
    grid.scrollTo({
        left: currentAchievement * itemWidth,
        behavior: 'smooth'
    });
}

// Auto-scroll achievements every 5 seconds
setInterval(scrollAchievements, 5000);