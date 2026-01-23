/**
 * Recruitページ：Open Positionセクションのアニメーション
 */
export const initializeRecruitPosition = () => {
  const items = document.querySelectorAll(".js-recruit-position-item");

  if (items.length === 0) return;

  items.forEach((item) => {
    gsap.from(item, {
      y: 40,
      autoAlpha: 0,
      duration: 1.0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: item,
        start: "top 90%",
        once: true,
      },
    });
  });
};
