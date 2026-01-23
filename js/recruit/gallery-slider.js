/**
 * 画像ギャラリースライダー
 */

export const initializeCultureGallery = () => {
  const el = document.querySelector(".js-recruit-culture-splide");

  if (!el) return;

  const splide = new Splide(el, {
    type: "loop",
    drag: "free",
    focus: "center",
    gap: 32,
    perPage: 4,
    autoWidth: true,
    pagination: false,
    arrows: false,
    autoScroll: {
      speed: 0.5,
      pauseOnHover: false,
      pauseOnFocus: false,
    },
    breakpoints: {
      899: {
        perPage: 1.5,
        gap: 10,
      },
    },
  });

  splide.mount(window.splide.Extensions);
};
