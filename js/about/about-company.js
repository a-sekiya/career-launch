/**
 * Aboutページ：Companyセクションのアニメーション
 */
export const initializeAboutCompany = () => {
  const section = document.querySelector(".js-about-company");
  const image = document.querySelector(".js-about-company-img");
  const table = document.querySelector(".js-about-company-table");

  if (!section || !image || !table) return;

  const isMobile = window.innerWidth <= 899;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      once: true,
    },
  });

  tl.from(image, {
    x: isMobile ? 0 : -30,
    y: isMobile ? 30 : 0,
    autoAlpha: 0,
    duration: 1.0,
    ease: "power2.out",
  }).from(
    table,
    {
      y: 30,
      autoAlpha: 0,
      duration: 1.0,
      ease: "power2.out",
    },
    "-=0.6"
  );
};
