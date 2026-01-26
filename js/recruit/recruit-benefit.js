/**
 * Recruitページ：Benefitセクションのアニメーション
 */
export const initializeRecruitBenefit = () => {
  const item = document.querySelectorAll(".js-recruit-benefit-item");
  const list = document.querySelectorAll(".js-recruit-benefit-list");

  if (item.length === 0 || !list) return;

  const mm = gsap.matchMedia();

  mm.add("(min-width: 900px)", () => {
    gsap.from(item, {
      y: 20,
      autoAlpha: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: list,
        start: "top 80%",
        once: true,
      },
    });
  });

  mm.add("(max-width: 899px)", () => {
    item.forEach((row) => {
      gsap.from(row, {
        y: 15,
        autoAlpha: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: row,
          start: "top 90%",
          once: true,
        },
      });
    });
  });
};
