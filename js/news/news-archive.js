/**
 * Newsページ：Newsリストとページネーションのアニメーション
 */
export const initializeNewsArchive = () => {
  const archive = document.querySelector(".js-news-archive");
  const posts = document.querySelectorAll(".js-news-archive-post");
  const pagination = document.querySelector(".js-news-archive-pagination");

  if (!archive || posts.length === 0) return;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: archive,
      start: "top 70%",
    },

    delay: 0.5,
  });

  tl.from(posts, {
    y: 20,
    autoAlpha: 0,
    duration: 0.8,
    ease: "power2.out",
    stagger: 0.1,
  });

  if (pagination) {
    tl.from(
      pagination,
      {
        y: 15,
        autoAlpha: 0,
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.2" // 重なりを少し減らして（-0.4→-0.2）順序をはっきりさせる
    );
  }
};
