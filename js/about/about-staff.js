/**
 * Aboutページ：Staffセクションのアニメーション
 */
export const initializeAboutStaff = () => {
  const section = document.querySelector(".js-about-staff");
  const header = document.querySelector(".js-about-staff-header");

  if (!section || !header) return;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      once: true,
    },
  });

  tl.from(header, {
    y: 20,
    autoAlpha: 0,
    duration: 1.0,
    ease: "power2.out",
  });
};
