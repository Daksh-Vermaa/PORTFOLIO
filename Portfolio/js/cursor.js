/* CURSOR.JS
    Handles the custom pixel cursor, trail effects, and hover interactions.
*/

const cursor = document.getElementById('cursor');
const interactables = document.querySelectorAll('.interactable');

// Move cursor with mouse
document.addEventListener('mousemove', (e) => {
    // Basic movement
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    // Slight parallax effect on background based on mouse position
    const moveX = (e.clientX * -0.01);
    const moveY = (e.clientY * -0.01);
    document.querySelector('.pixel-grid-bg').style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// Add interaction states
interactables.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.classList.add('hovered');
        cursor.style.borderColor = getComputedStyle(document.documentElement).getPropertyValue('--neon-pink');
    });
    
    el.addEventListener('mouseleave', () => {
        cursor.classList.remove('hovered');
        cursor.style.borderColor = getComputedStyle(document.documentElement).getPropertyValue('--neon-green');
    });
});

// Click animation
document.addEventListener('mousedown', () => {
    cursor.style.transform = "translate(-50%, -50%) scale(0.8)";
});

document.addEventListener('mouseup', () => {
    cursor.style.transform = "translate(-50%, -50%) scale(1)";
});