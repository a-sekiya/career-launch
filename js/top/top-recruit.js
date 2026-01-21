/**
 * トップページ：Recruit項目のアニメーション
 */
export const initializeTopRecruit = () => {
  const image = document.querySelector(".js-top-recruit-image img");
  const circle = document.querySelector(".js-top-recruit-circle");
  const info = document.querySelector(".js-top-recruit-info");
  const button = document.querySelector(".js-top-recruit-button");

  if (!image || !circle || !info || !button) return;

  // --- 1. ぐるぐる回転の定義 ---
  const rotationTween = gsap.to(circle, {
    rotation: 360,
    duration: 20,
    repeat: -1,
    ease: "none",
  });

  // --- 2. ボタンにホバーした時の演出 ---
  button.addEventListener("mouseenter", () => {
    gsap.to(rotationTween, { timeScale: 4, duration: 1 });
  });
  button.addEventListener("mouseleave", () => {
    gsap.to(rotationTween, { timeScale: 1, duration: 1 });
  });

  // --- 3. 背景のパララックス ---
  gsap.fromTo(
    image,
    { yPercent: -10 },
    {
      yPercent: 10,
      ease: "none",
      scrollTrigger: {
        trigger: ".top-recruit-visual",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    }
  );

  // --- 4. 右側テキストの浮き上がり ---
  gsap.from(info.children, {
    y: 20,
    autoAlpha: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: info,
      start: "top 75%",
    },
  });
};
