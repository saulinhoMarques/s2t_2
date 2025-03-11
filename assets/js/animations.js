// Exemplo de animação GSAP para elementos com a classe .animate-in
gsap.utils.toArray('.animate-in').forEach(element => {
    gsap.from(element, {
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        toggleActions: "play none none none"
      },
      opacity: 0,
      y: 50,
      duration: 1
    });
  });
  
  // Outra animação de exemplo: efeito em botões ao passar o mouse
  document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      gsap.to(btn, { scale: 1.1, duration: 0.3 });
    });
    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, { scale: 1, duration: 0.3 });
    });
  });
  