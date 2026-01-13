/**
 * ヘッダーの背景色変更
 */
export const initializeHeaderBackgroundToggle = (isOpen) => {
  const header = document.querySelector(".js-header");
  if (!header) return;

  if (isOpen) {
    header.classList.add("is-open");
    document.body.style.overflow = "hidden";
  } else {
    header.classList.remove("is-open");
    document.body.style.overflow = "";
  }
};
