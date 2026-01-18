/**
 * トップKVのScrollボタン
 */
export const initializeScrollBtn = () => {
  const scrollBtn = document.querySelector(".js-top-kv-scroll");

  if (!scrollBtn) return;

  scrollBtn.addEventListener("click", () => {
    const vh = window.innerHeight;

    window.scrollTo({
      top: vh,
      behavior: "smooth",
    });
  });
};
