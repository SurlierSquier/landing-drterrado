/**
 * Controla el comportamiento del scroll en la carga y recarga de la página
 */
export function initScrollReset() {
  // Controlar el comportamiento del scroll en la recarga
  if (history.scrollRestoration) {
    history.scrollRestoration = "manual";
  }

  function scrollToTop() {
    document.documentElement.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    setTimeout(() => {
      document.documentElement.style.scrollBehavior = "smooth";
    }, 50);
  }

  // Aplicar al cargar la página
  window.addEventListener("load", scrollToTop);

  // Aplicar antes de recargar
  window.addEventListener("beforeunload", () => {
    document.documentElement.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
  });
}