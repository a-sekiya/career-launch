import { initializeHeaderBackgroundToggle } from "./header-background-toggle.js";

/**
 * ハンバーガーメニュー
 */
export const initializeHamburgerMenu = () => {
  const menu = document.querySelector(".js-header-menu");
  const openButton = document.querySelector(".js-header-menu-open");
  const closeButton = document.querySelector(".js-header-menu-close");

  if (!openButton || !menu || !closeButton) return;

  const options = { duration: 350, easing: "ease-out" };

  let isAnimating = false;

  // 開くとき
  const openMenu = () => {
    if (isAnimating) return;
    isAnimating = true;
    menu.showModal();
    requestAnimationFrame(() => {
      menu.classList.add("is-active");
    });

    const openingAnim = menu.animate({ opacity: [0, 1] }, options);
    openingAnim.onfinish = () => (isAnimating = false);
  };

  // 閉じるとき
  const closeMenu = () => {
    if (isAnimating || !menu.open) return;
    isAnimating = true;
    menu.classList.remove("is-active");
    const closingAnim = menu.animate({ opacity: [1, 0] }, options);
    closingAnim.onfinish = () => {
      menu.close();
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
