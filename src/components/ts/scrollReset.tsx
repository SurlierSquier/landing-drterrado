/**
 * Controla el comportamiento del scroll en la carga y recarga de la página
 */
export function initScrollReset() {
  // Desactiva el comportamiento de restauración de scroll en el navegador
  if (history.scrollRestoration) {
    history.scrollRestoration = "manual";
  }

  function scrollToTop() {
    document.documentElement.style.scrollBehavior = "auto"; // Desactiva smooth scroll temporalmente
    window.scrollTo(0, 0); // Lleva al inicio instantáneamente
  }

  // Aplicar al cargar la página sin smooth scroll
  window.addEventListener("load", scrollToTop);

  // Aplicar antes de recargar para evitar el smooth scroll
  window.addEventListener("beforeunload", scrollToTop);
}