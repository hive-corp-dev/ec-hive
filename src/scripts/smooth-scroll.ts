export function initSmoothScroll() {
  // ページ読み込み時のハッシュスクロール
  const urlHash = location.hash;
  if (urlHash) {
    window.scrollTo(0, 0);
    setTimeout(() => {
      const target = document.querySelector(urlHash) as HTMLElement;
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    }, 500);
  }

  // アンカーリンククリック時のスムーズスクロール
  document.addEventListener("click", (e) => {
    const link = (e.target as HTMLElement).closest("a");

    if (link && !link.classList.contains("js-no-scroll")) {
      const href = link.getAttribute("href");

      if (href && href.startsWith("#")) {
        e.preventDefault();

        const target = document.querySelector(href) as HTMLElement;
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
          
          // URLのハッシュを更新
          history.pushState(null, "", href);
        }
      }
    }
  });
}
