/**
 * トップページ：Recruit項目のアニメーション
 */

export const initializeTopRecruit = () => {
  const image = document.querySelector(".js-top-recruit-image img");
  const info = document.querySelector(".js-top-recruit-info");

  if (!image || !info) return;

  // --- 1. 背景のパララックス ---
  gsap.fromTo(
    image,
    { yPercent: -10 },
    {
      yPercent: 10,
      ease: "none",
      scrollTrigger: {
        trigger: ".top-recruit-visual",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    }
  );

  // --- 2. テキストの表示 ---
  gsap.from(info.children, {
    y: 20,
    autoAlpha: 0,
    duration: 0.8,
    stagger: 0.1,
    scrollTrigger: {
      trigger: info,
      start: "top 75%",
    },
  });
};
