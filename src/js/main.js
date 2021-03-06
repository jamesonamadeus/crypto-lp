//smooth scrolling
var scroll = new SmoothScroll('a[href*="#"]',{
	speed: 500, 
    offset: 100
});

//scroll reveal
window.sr = ScrollReveal();
sr.reveal('.mission-infographic-element', { 
    duration: 1400,
    easing: 'linear' 
}, 50);

sr.reveal('.valueprop-offering-element', {
     duration: 1400 },
50);

sr.reveal('.process-outline-element', { 
    duration: 600 ,
    origin: 'top',
    distance: '20px',
    easing: 'linear' 
});

sr.reveal('.process-segment', { 
    duration: 600 ,
    origin: 'top',
    easing: 'linear' 
});


//typing animation
var options = {
  strings: ["Early^1500", "Securely^8000"],
  typeSpeed: 80,
  startDelay: 1200,
  backSpeed: 40,
  loop: true
}

var typed = new Typed(".typing", options);