/**
 * トップページ：KVのテキストのアニメーション
 */
export const initializeTopKvText = () => {
  const en = document.querySelector(".js-top-kv-text");
  const jp = document.querySelector(".js-top-kv-text02");

  if (!en || !jp) return;

  const tl = gsap.timeline();

  tl.from(en, {
    y: 30,
    autoAlpha: 0,
    duration: 1.2,
    ease: "power3.out",
  }).from(
    jp,
    {
      y: 20,
      autoAlpha: 0,
      duration: 1,
      ease: "power3.out",
    },
    "-=0.8"
  );
};
