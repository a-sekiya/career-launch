/**
 * エントリーボタンのアニメーション
 */
export const initializeEntryButton = () => {
  const circle = document.querySelector(".js-entry-circle");
  const entry = document.querySelector(".js-entry");

  if (!circle || !entry) return;

  // 1. 無限回転の設定
  const rotation = gsap.to(circle, {
    rotation: 360,
    duration: 20,
    repeat: -1,
    ease: "none",
  });

  // 2. ホバーイベント（タイムスケールを操る）
  entry.addEventListener("mouseenter", () => {
    gsap.to(rotation, { timeScale: 4, duration: 1, ease: "power2.out" });
    gsap.to(entry, { scale: 1.1, duration: 0.3, ease: "back.out(1.7)" });
  });

  entry.addEventListener("mouseleave", () => {
    gsap.to(rotation, { timeScale: 1, duration: 1, ease: "power2.inOut" });
    gsap.to(entry, { scale: 1, duration: 0.3 });
  });
};
