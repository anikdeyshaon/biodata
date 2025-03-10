// Achievements Carousel
let currentAchievement = 0;
const achievements = document.querySelectorAll('.achievement-item');
const grid = document.querySelector('.achievements-grid');

function scrollAchievements() {
    currentAchievement = (currentAchievement + 1) % achievements.length;
    const itemWidth = achievements[0].offsetWidth; // Get actual width of item
    const gap = 10; // Match the CSS gap
    const scrollAmount = currentAchievement * (itemWidth + gap);
    
    grid.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });
}

// Auto-scroll every 5 seconds
setInterval(scrollAchievements, 5000);

// Ensure initial scroll position is correct
grid.scrollTo({ left: 0, behavior: 'smooth' });


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