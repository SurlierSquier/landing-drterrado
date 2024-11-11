export function header() {
  const header = document.querySelector("header");
  const menuButton = document.getElementById("menu-button-mobile");
  const mobileMenu = document.getElementById("mobile-menu");
  let menuOpen = false;

  // Manejo del scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header?.classList.add("scrolled");
    } else {
      header?.classList.remove("scrolled");
    }
  });

  // Toggle del menú móvil
  menuButton?.addEventListener("click", () => {
    menuOpen = !menuOpen;
    if (menuOpen) {
      mobileMenu?.classList.add("show");
    } else {
      mobileMenu?.classList.remove("show");
    }
  });

  // Cerrar menú al hacer click fuera
  document.addEventListener("click", (e) => {
    if (
      !menuButton?.contains(e.target as Node) &&
      !mobileMenu?.contains(e.target as Node)
    ) {
      menuOpen = false;
      mobileMenu?.classList.remove("show");
    }
  });

  // Navegación suave
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e: Event) {
      e.preventDefault();
      const href = (e.currentTarget as HTMLAnchorElement).getAttribute("href");
      if (href) {
        const target = document.querySelector(href);
        menuOpen = false;
        mobileMenu?.classList.remove("show");
        target?.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
}