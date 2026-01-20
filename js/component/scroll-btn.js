/**
 * トップページ：Scrollボタン
 */
export const initializeScrollBtn = () => {
  const scrollBtn = document.querySelector(".js-top-kv-scroll");
  const targetSection = document.querySelector(".js-top-about");

  if (!scrollBtn || !targetSection) return;

  scrollBtn.addEventListener("click", () => {
    const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  });
};
