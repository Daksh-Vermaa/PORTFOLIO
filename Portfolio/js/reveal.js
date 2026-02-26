/* REVEAL.JS
    Uses IntersectionObserver to "uncover" sections as the user scrolls.
    Implements the "Fog of War" discovery mechanic.
*/

const sections = document.querySelectorAll('.hidden-section');

const revealOptions = {
    threshold: 0.15, // Trigger when 15% of section is visible
    rootMargin: "0px 0px -50px 0px"
};

const revealOnScroll = new IntersectionObserver(function(entries, revealOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            // Add the visible class to trigger CSS animation
            entry.target.classList.add('visible');
            
            // Optional: Play a small retro sound here if desired
            
            // Stop observing once revealed (or remove this line to allow re-reveal on scroll up)
            // revealOnScroll.unobserve(entry.target);
        }
    });
}, revealOptions);

sections.forEach(section => {
    revealOnScroll.observe(section);
});
