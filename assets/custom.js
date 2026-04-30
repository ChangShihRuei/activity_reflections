// Exclusive <details> dropdowns: only one open at a time.
// We listen to both "toggle" and a click fallback for better browser consistency.
document.addEventListener("DOMContentLoaded", () => {
  const selector = "details[data-exclusive='true']";

  const closeOthers = (opened) => {
    document.querySelectorAll(selector).forEach((el) => {
      if (el !== opened) el.open = false;
    });
  };

  // Primary: toggle event (fires when open state changes)
  document.addEventListener(
    "toggle",
    (e) => {
      const target = e.target;
      if (!(target instanceof HTMLDetailsElement)) return;
      if (!target.matches(selector)) return;
      if (!target.open) return;
      closeOthers(target);
    },
    true
  );

  // Fallback: some browsers/pages can behave inconsistently with toggle timing.
  // After a summary click, wait for the default toggle to apply, then enforce exclusivity.
  document.addEventListener(
    "click",
    (e) => {
      const summary = e.target.closest && e.target.closest("summary");
      if (!summary) return;
      const details = summary.parentElement;
      if (!(details instanceof HTMLDetailsElement)) return;
      if (!details.matches(selector)) return;

      setTimeout(() => {
        if (details.open) closeOthers(details);
      }, 0);
    },
    true
  );

  // Language toggle: switch between /zh-TW/ and /en/.
  const headerEl = document.querySelector(".site-header");
  const translateBtn = document.getElementById("translate-toggle");

  if (headerEl && translateBtn) {
    const baseUrl = headerEl.dataset.baseurl || "";
    const labelEl = translateBtn.querySelector("[data-translate-label]");

    const getPathInfo = () => {
      const fullPath = window.location.pathname;
      const withoutBase =
        baseUrl && fullPath.startsWith(baseUrl)
          ? fullPath.slice(baseUrl.length) || "/"
          : fullPath || "/";

      const isEnglish = withoutBase === "/en/" || withoutBase.startsWith("/en/");
      const isZhTW = withoutBase === "/zh-TW/" || withoutBase.startsWith("/zh-TW/");
      return { withoutBase, isEnglish, isZhTW };
    };

    const applyLabel = (isEnglish) => {
      if (!labelEl) return;
      // If current page is English, show button text as "中文" to go back.
      labelEl.textContent = isEnglish ? "中文" : "English";
    };

    const { isEnglish } = getPathInfo();
    applyLabel(isEnglish);

    translateBtn.addEventListener("click", () => {
      const { withoutBase, isEnglish: currentlyEnglish, isZhTW: currentlyZhTW } =
        getPathInfo();

      let targetPath;
      if (currentlyEnglish) {
        // /en/... -> /zh-TW/...
        const stripped =
          withoutBase === "/en/" ? "/" : withoutBase.replace(/^\/en/, "") || "/";
        targetPath = stripped === "/" ? "/zh-TW/" : `/zh-TW${stripped}`;
      } else if (currentlyZhTW) {
        // /zh-TW/... -> /en/...
        const stripped =
          withoutBase === "/zh-TW/"
            ? "/"
            : withoutBase.replace(/^\/zh-TW/, "") || "/";
        targetPath = stripped === "/" ? "/en/" : `/en${stripped}`;
      } else {
        // Fallback: if we are on "/" or other path, prefer English.
        targetPath = withoutBase === "/" ? "/en/" : `/en${withoutBase}`;
      }

      window.location.href = `${baseUrl}${targetPath}`;
    });
  }
});

