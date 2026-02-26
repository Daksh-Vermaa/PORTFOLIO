/* TYPING.JS
    Typewriter effect for the "System Info" / About section.
*/

const textElement = document.getElementById('typing-text');
const textToType = "Daksh Verma 🦖\n\n— I'm a creative dev tryna build cool stuff with my gang. \n\n When I'm not hitting my head on the desk, you'll catch me cooking up checkmates or just vibing with my soccer ball 👾";

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