/**
 * トップページ：About項目のアニメーション
 */
export const initializeTopAbout = () => {
  const main = document.querySelector(".js-top-about-main");
  const image = document.querySelector(".js-top-about-image");

  if (!main || !image) return;

  gsap.from(main.children, {
    y: 20,
    autoAlpha: 0,
    duration: 0.8,
    ease: "power2.out",
    stagger: 0.08,
    scrollTrigger: {
      trigger: main,
      start: "top 80%",
    },
  });

  gsap.from(image, {
    y: 20,
    autoAlpha: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: image,
      start: "top 85%",
    },
  });
};
