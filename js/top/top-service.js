/**
 * トップページ：Service項目のアニメーション
 */
export const initializeTopService = () => {
  const header = document.querySelector(".js-top-service-header");
  const list = document.querySelector(".js-top-service-list");

  if (!header || !list) return;

  const mm = gsap.matchMedia();

  gsap.from(header.children, {
    y: 15,
    autoAlpha: 0,
    duration: 0.8,
    ease: "power2.out",
    stagger: 0.1,
    scrollTrigger: {
      trigger: header,
      start: "top 75%",
    },
  });

  mm.add(
    {
      isDesktop: "(min-width: 900px)",
      isMobile: "(max-width: 899px)",
    },
    (context) => {
      let { isDesktop } = context.conditions;

      if (isDesktop) {
        // PC
        gsap.from(list.children, {
          y: 20,
          autoAlpha: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: list,
            start: "top 70%",
          },
        });
      } else {
        // SP
        const cards = gsap.utils.toArray(list.children);
        cards.forEach((card) => {
          gsap.from(card, {
            y: 20,
            autoAlpha: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
            },
          });
        });
      }
    }
  );
};
