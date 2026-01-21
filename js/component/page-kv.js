/**
 * 下層ページ：KVのテキストのアニメーション
 */
export const initializePageKv = () => {
  const en = document.querySelector(".js-page-kv-en");
  const title = document.querySelector(".js-page-kv-title");

  if (!en || !title) return;

  const tl = gsap.timeline();

  tl.from(en, {
    y: 30,
    autoAlpha: 0,
    duration: 1.0,
    ease: "power3.out",
  }).from(
    title,
    {
      y: 20,
      autoAlpha: 0,
      duration: 1.0,
      ease: "power3.out",
    },
    "-=0.7"
  );
};
