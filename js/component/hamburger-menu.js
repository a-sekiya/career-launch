import { initializeHeaderBackgroundToggle } from "./header-background-toggle.js";

/**
 * ハンバーガーメニュー
 */
export const initializeHamburgerMenu = () => {
  const menu = document.querySelector(".js-header-menu");
  const openButton = document.querySelector(".js-header-menu-open");
  const closeButton = document.querySelector(".js-header-menu-close");

  if (!openButton || !menu || !closeButton) return;

  const openingKeyframes = { opacity: [0, 1] };
  const closingKeyframes = { opacity: [1, 0] };
  const options = { duration: 300, easing: "ease-out" };

  let isAnimating = false;

  const openMenu = () => {
    if (isAnimating) return;
    isAnimating = true;
    initializeHeaderBackgroundToggle(true);
    menu.showModal();
    const openingAnim = menu.animate(openingKeyframes, options);
    openingAnim.onfinish = () => (isAnimating = false);
  };

  const closeMenu = () => {
    if (isAnimating || !menu.open) return;
    isAnimating = true;

    const closingAnim = menu.animate(closingKeyframes, options);
    closingAnim.onfinish = () => {
      menu.close();
      initializeHeaderBackgroundToggle(false);
      isAnimating = false;
    };
  };

  const handleResize = () => {
    if (window.innerWidth >= 900 && menu.open) {
      menu.close();
      initializeHeaderBackgroundToggle(false);
      isAnimating = false;
      menu.style.opacity = "";
    }
  };

  openButton.addEventListener("click", openMenu);
  closeButton.addEventListener("click", closeMenu);

  window.addEventListener("resize", handleResize);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menu.open) {
      event.preventDefault();
      closeMenu();
    }
  });

  menu.addEventListener("click", (e) => {
    if (e.target === menu) {
      closeMenu();
    }
  });
};
