
// ---------------------Intro Animation---------------------
// animation to drop each letter in the work Synergy into the page
const synergy = document.querySelector('.introHeading');
let letters = synergy.textContent.split('');
synergy.textContent = '';

letters.forEach(letter => {
    synergy.innerHTML += `<span class="letter">` + letter + `</span>`;
});

gsap.set('.letter', {display: 'inline-block', y: '100px', opacity: 0});

// timeline animations
let tlOne = gsap.timeline({defaults: {duration: 0.75, ease: 'power3.out'}});
tlOne.fromTo('.introTopHeading', {y: '100px', opacity: 0}, {y: '0%', opacity: 1})
tlOne.fromTo('.letter', {y: '-100px', opacity: 0}, {y: '0%', opacity: 1, stagger: 0.1, duration: 1.5, ease: 'power3.out'}, "<50%");
tlOne.fromTo('.introCTA', {y: '100px', opacity: 0}, {y: '0%', opacity: 1, duration: 1.5}, "<50%");

// button animation bulge
gsap.fromTo('.buttonOne', {scale: 1}, {scale: 1.05, delay: 5, duration: 0.5, repeat: -1, yoyo: true, ease: 'power3.out'});

// ---------------------About Animation---------------------
function isInViewport(element) {
    // Get the bounding client rectangle position in the viewport
    var bounding = element.getBoundingClientRect();
    
    // Checking part. Here the code checks if it's *fully* visible
    // Edit this part if you just want a partial visibility
    if (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    ) {
        return true;
    } else {
        return false;
    }
}

const about = document.querySelector('.aboutWrapper');

window.addEventListener('scroll', function (event) {
    if (isInViewport(about)) {
        gsap.fromTo('.aboutWrapper', {
            y :"-100%",
            opacity: 0}, {
            y: "0%",
            opacity: 1,
            duration: 1.5,
            ease: "power3.out"
            });
    }
}, false);