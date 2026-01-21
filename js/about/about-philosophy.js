/**
 * Aboutページ：Philosophyセクションのアニメーション
 */
export const initializeAboutPhilosophy = () => {
  const items = document.querySelectorAll(".js-about-philosophy-item");

  if (items.length === 0) return;

  items.forEach((item, index) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: "top 80%",
        once: true,
      },
      y: 40,
      autoAlpha: 0,
      duration: 1.0,
      ease: "power2.out",
      delay: window.innerWidth > 899 ? index * 0.15 : 0,
    });
  });
};
