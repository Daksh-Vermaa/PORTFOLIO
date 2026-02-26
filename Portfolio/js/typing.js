/* TYPING.JS
    Typewriter effect for the "System Info" / About section.
*/

const textElement = document.getElementById('typing-text');
const textToType = "INITIALIZING UPLINK... \nLOADED: CREATIVE DEVELOPER \nSTATUS: OPEN FOR WORK \n\nI build interactive digital experiences that live on the web. My focus is on retro aesthetics combined with modern performance.";

let index = 0;
let isTyping = false;

function typeWriter() {
    if (index < textToType.length) {
        // Handle line breaks
        if (textToType.charAt(index) === '\n') {
            textElement.innerHTML += '<br>';
        } else {
            textElement.innerHTML += textToType.charAt(index);
        }
        index++;
        setTimeout(typeWriter, 50); // Speed of typing
    }
}

// Trigger typing only when About section is visible
const aboutSection = document.getElementById('about');

const typeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting && !isTyping) {
            isTyping = true;
            typeWriter();
        }
    });
}, { threshold: 0.5 });

typeObserver.observe(aboutSection);