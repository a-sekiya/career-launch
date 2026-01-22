/**
 * Serviceページ：Caseセクションのアニメーション
 */
export const initializeServiceCase = () => {
  gsap.registerPlugin(ScrollTrigger);

  const list = document.querySelector(".js-service-case-list"); // 親
  const items = document.querySelectorAll(".js-service-case-item"); // 子

  if (!list || items.length === 0) return;

  // リロード時の計算ズレを防ぐ
  ScrollTrigger.refresh();

  const isMobile = window.innerWidth <= 899;

  if (isMobile) {
    // SP
    items.forEach((item) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: "top 90%",
          once: true,
        },
        y: 40,
        autoAlpha: 0,
        duration: 1.0,
        ease: "power2.out",
      });
    });
  } else {
    // PC
    gsap.from(items, {
      scrollTrigger: {
        trigger: list,
        start: "top 80%",
        once: true,
      },
      y: 40,
      autoAlpha: 0,
      duration: 1.2,
      ease: "power2.out",
      stagger: 0.3,
    });
  }
};
