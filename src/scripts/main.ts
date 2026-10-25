const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* Mobile navigation */
function initMenu(): void {
  const button = document.querySelector<HTMLButtonElement>("[data-menu-button]");
  const nav = document.querySelector<HTMLElement>("[data-nav]");
  const label = document.querySelector<HTMLElement>("[data-menu-label]");
  if (!button || !nav) return;

  const setOpen = (open: boolean) => {
    nav.classList.toggle("open", open);
    button.setAttribute("aria-expanded", String(open));
    document.body.classList.toggle("menu-open", open);
    if (label) label.textContent = open ? "Menü schließen" : "Menü öffnen";
  };

  button.addEventListener("click", () => setOpen(!nav.classList.contains("open")));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && nav.classList.contains("open")) {
      setOpen(false);
      button.focus();
    }
  });
}

/* Fly-in on scroll */
function initReveal(): void {
  const elements = document.querySelectorAll<HTMLElement>(".reveal");
  if (reducedMotion || !("IntersectionObserver" in window)) {
    elements.forEach((el) => el.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
  );
  elements.forEach((el) => observer.observe(el));
}

/* Count-up for key figures */
function initCounters(): void {
  const counters = document.querySelectorAll<HTMLElement>("[data-count]");
  if (reducedMotion || !counters.length || !("IntersectionObserver" in window)) return;

  const format = new Intl.NumberFormat("de-DE");
  const animate = (el: HTMLElement) => {
    const target = Number(el.dataset.count) || 0;
    const duration = 1600;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = format.format(Math.round(target * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animate(entry.target as HTMLElement);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.6 },
  );
  counters.forEach((el) => {
    el.textContent = "0";
    observer.observe(el);
  });
}

/* Progress bar and compact header */
function initScrollUi(): void {
  const progress = document.querySelector<HTMLElement>("[data-progress]");
  const header = document.querySelector<HTMLElement>("[data-header]");
  let ticking = false;

  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
    progress?.style.setProperty("transform", `scaleX(${ratio})`);
    header?.classList.toggle("scrolled", window.scrollY > 24);
    ticking = false;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    },
    { passive: true },
  );
  update();
}

initMenu();
initReveal();
initCounters();
initScrollUi();
