/**
 * スタッフスライダー
 */
export const initializeAboutStaffSlider = () => {
  document.addEventListener("DOMContentLoaded", function () {
    const el = document.querySelector(".js-about-staff-splide");

    if (!el) return;

    const splide = new Splide(el, {
      type: "loop",
      gap: 40,
      perPage: 4,
      padding: { left: 0, right: 110 },
      focus: 0,
      pagination: false,
      arrows: false,

      autoScroll: {
        speed: 0.5,
        pauseOnHover: false, // マウスホバー時に一時停止するか
        pauseOnFocus: false, // フォーカス時に一時停止するか
      },

      breakpoints: {
        899: {
          perPage: 1.5,
          padding: 0,
        },
      },
    });

    splide.mount(window.splide.Extensions);
  });
};
