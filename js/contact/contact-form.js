/**
 * Contactページのアニメーション
 */
export const initializeContactForm = () => {
  const formItems = document.querySelectorAll(".js-contact-item");
  const submitArea = document.querySelector(".js-contact-submit-area");
  const form = document.querySelector(".js-contact-form");

  if (formItems.length === 0 || !submitArea || !form) return;

  gsap.from(formItems, {
    y: 40,
    autoAlpha: 0,
    duration: 1.2,
    ease: "power2.out",
    stagger: 0.2,
    scrollTrigger: {
      trigger: form,
      start: "top 80%",
      once: true,
    },
  });

  if (submitArea) {
    gsap.from(submitArea, {
      y: 20,
      autoAlpha: 0,
      duration: 1.5,
      delay: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: form,
        start: "top 80%",
        once: true,
      },
    });
  }
};
