/* MAIN.JS
    General initialization and global event listeners.
*/

document.addEventListener('DOMContentLoaded', () => {
    console.log('SYSTEM ONLINE: PIXEL_WORLD LOADED');
    
    // Add click effect for "Scroll Signal"
    const scrollSignal = document.querySelector('.scroll-signal');
    if(scrollSignal) {
        scrollSignal.addEventListener('click', () => {
            document.getElementById('about').scrollIntoView({ 
                behavior: 'smooth' 
            });
        });
    }

    // Randomize doodle animation timing on load so they don't sync up perfectly
    const doodles = document.querySelectorAll('.doodle');
    doodles.forEach(doodle => {
        doodle.style.animationDelay = Math.random() * 2 + 's';
    });
});