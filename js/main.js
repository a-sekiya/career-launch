import { initializeHamburgerMenu } from "./component/hamburger-menu.js";
import { initializeHeaderBackgroundToggle } from "./component/header-background-toggle.js";
import { initializeScrollBtn } from "./component/scroll-btn.js";
import { initializeTopAbout } from "./component/top-about.js";
import { initializeTopKvText } from "./component/top-kv-text.js";
import { initializeTopNews } from "./component/top-news.js";
import { initializeTopRecruit } from "./component/top-recruit.js";
import { initializeTopService } from "./component/top-service.js";
import { initializeCultureGallery } from "./slider/gallery-slider.js";
import { initializeAboutStaffSlider } from "./slider/staff-slider.js";

// 全ての初期化を実行
initializeHamburgerMenu();
initializeHeaderBackgroundToggle();
initializeScrollBtn();
initializeTopKvText();
initializeTopAbout();
initializeTopService();
initializeTopRecruit();
initializeTopNews();
initializeCultureGallery();
initializeAboutStaffSlider();
