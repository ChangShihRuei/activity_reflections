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
});

