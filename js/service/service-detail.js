/**
 * Serviceページ：detailセクションのアニメーション
 */
export const initializeServiceDetail = () => {
  const items = document.querySelectorAll(".js-service-detail-item");

  if (items.length === 0) return;

  const isMobile = window.innerWidth <= 899;

  items.forEach((item) => {
    const img = item.querySelector(".js-service-detail-item-img");
    const content = item.querySelector(".js-service-detail-item-content");

    if (!img || !content) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: "top 80%",
        once: true,
      },
    });

    // 画像のアニメーション
    tl.from(img, {
      x: isMobile ? 0 : -30,
      y: isMobile ? 30 : 0,
      autoAlpha: 0,
      duration: 1.0,
      ease: "power2.out",
    }).from(
      content,
      {
        x: isMobile ? 0 : 30,
        y: isMobile ? 30 : 0,
        autoAlpha: 0,
        duration: 1.0,
        ease: "power2.out",
      },
      "-=0.6"
    );
  });
};
