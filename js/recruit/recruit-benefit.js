/**
 * Recruitページ：Benefitセクションのアニメーション
 */
export const initializeRecruitBenefit = () => {
  const rows = document.querySelectorAll(".js-recruit-benefit-table-row");
  if (rows.length === 0) return;

  const mm = gsap.matchMedia();

  // PC: まとめて時間差で出す
  mm.add("(min-width: 900px)", () => {
    gsap.from(rows, {
      y: 20,
      autoAlpha: 0,
      duration: 0.8,
      stagger: 0.1, // リストが多いので少し早めの時間差
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".recruit-benefit-table",
        start: "top 80%",
        once: true,
      },
    });
  });

  // SP: 1行ずつ、画面に入るたびに出す
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
