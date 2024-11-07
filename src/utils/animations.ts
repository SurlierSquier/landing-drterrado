function setupScrollAnimations(): void {
  // Seleccionar elementos por sus clases específicas
  const animatedElements: NodeListOf<Element> = document.querySelectorAll(`
    .testimonials-card,
    #sobre-mi p,
    #sobre-mi div,
    .servicios-card,
    #contact .w-full,
    #centros .grid > a,
    #testimonials .flex > div
  `);
  
  const observer: IntersectionObserver = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-up');
      }
    });
  }, { threshold: 0.1 });

  animatedElements.forEach((element: Element) => {
    observer.observe(element);
  });
}

export default setupScrollAnimations;
