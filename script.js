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