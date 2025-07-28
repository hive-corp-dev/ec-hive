export function initHeader() {
  const header = document.querySelector(".js-header") as HTMLElement;
  const headerWhiteSections = document.querySelectorAll<HTMLElement>(
    ".js-header-theme-white-section",
  );

  if (!header) {
    console.error("Header要素が見つかりません。セレクタを確認してください。");
    return;
  }

  // ヘッダーテーマ切り替え
  const headerObserver = new IntersectionObserver(
    (entries) => {
      let whiteSectionVisible = false;
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          whiteSectionVisible = true;
        }
      });
      if (whiteSectionVisible) {
        header.classList.remove("header-theme-black");
        header.classList.add("header-theme-white");
      } else {
        header.classList.remove("header-theme-white");
        header.classList.add("header-theme-black");
      }
    },
    {
      root: null,
      threshold: 0,
      rootMargin: "0px 0px -99% 0px",
    },
  );

  headerWhiteSections.forEach((section) => {
    headerObserver.observe(section);
  });

  function updateHeaderThemeOnLoad() {
    let whiteSectionFound = false;
    const scrollY = window.scrollY;

    headerWhiteSections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (scrollY >= sectionTop && scrollY < sectionBottom) {
        whiteSectionFound = true;
      }
    });

    if (whiteSectionFound) {
      header.classList.remove("header-theme-black");
      header.classList.add("header-theme-white");
    } else {
      header.classList.remove("header-theme-white");
      header.classList.add("header-theme-black");
    }
  }

  updateHeaderThemeOnLoad();
  window.addEventListener("resize", updateHeaderThemeOnLoad);
}

export function initHamburgerMenu() {
  const menuBtn = document.querySelector(".js-menu-btn") as HTMLButtonElement;
  const menu = document.querySelector("#menu") as HTMLElement;

  if (menuBtn && menu) {
    function closeMenu() {
      menuBtn.setAttribute("aria-expanded", "false");
      menu.classList.remove("is-open");
      document.body.classList.remove("is-menu-open");
    }

    menuBtn.addEventListener("click", () => {
      const isExpanded = menuBtn.getAttribute("aria-expanded") === "true";

      menuBtn.setAttribute("aria-expanded", (!isExpanded).toString());
      menu.classList.toggle("is-open");
      document.body.classList.toggle("is-menu-open", !isExpanded);
    });

    // メニュー内のリンククリック時にメニューを閉じる
    const menuLinks = menu.querySelectorAll("a");
    menuLinks.forEach((link) => {
      link.addEventListener("click", () => {
        closeMenu();
      });
    });

    // メディアクエリでメニューの状態をリセット
    const mediaQuery = window.matchMedia("(min-width: 1025px)");

    function handleMediaChange(e: MediaQueryListEvent) {
      if (e.matches) {
        // タブレット以上の幅になったときメニューをリセット
        closeMenu();
      }
    }

    mediaQuery.addEventListener("change", handleMediaChange);
  }
}
