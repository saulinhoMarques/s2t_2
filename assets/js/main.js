// Preloader
window.addEventListener('load', function() {
    setTimeout(function(){
      const preloader = document.getElementById('preloader');
      preloader.style.opacity = '0';
      setTimeout(() => { preloader.style.display = 'none'; }, 500);
    }, 500);
    AOS.init();
  });
  
  // Particles.js
  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 80,
        "density": { "enable": true, "value_area": 800 }
      },
      "color": { "value": "#ffffff" },
      "shape": {
        "type": "circle",
        "stroke": { "width": 0, "color": "#000000" }
      },
      "opacity": { "value": 0.5 },
      "size": { "value": 3, "random": true },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 3,
        "direction": "none",
        "out_mode": "out"
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": { "enable": true, "mode": "grab" },
        "onclick": { "enable": true, "mode": "push" }
      },
      "modes": {
        "grab": { "distance": 140, "line_linked": { "opacity": 1 } },
        "push": { "particles_nb": 4 }
      }
    },
    "retina_detect": true
  });
  
  // Coração interativo: animação com anime.js e confetti
  document.getElementById('heartIcon')?.addEventListener('click', function() {
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    anime({
      targets: '#heartIcon',
      scale: [1, 1.5, 1],
      easing: 'easeInOutQuad',
      duration: 800
    });
  });
  