/**
 * Recruitページ：Benefitセクションのアニメーション
 */
export const initializeRecruitBenefit = () => {
  const rows = document.querySelectorAll(".js-recruit-benefit-table-row");
  const table = document.querySelectorAll(".js-recruit-benefit-table");

  if (rows.length === 0 || !table) return;

  const mm = gsap.matchMedia();

  mm.add("(min-width: 900px)", () => {
    gsap.from(rows, {
      y: 20,
      autoAlpha: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: table,
        start: "top 80%",
        once: true,
      },
    });
  });

  mm.add("(max-width: 899px)", () => {
    rows.forEach((row) => {
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
