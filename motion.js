const body = document.body;
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const hero = document.querySelector(".home-intro");
const ending = document.querySelector(".ending-stage");
const counter = document.querySelector("[data-work-counter]");
const workCards = [...document.querySelectorAll("[data-work-index]")];
let currentCounter = counter ? counter.textContent : "1";
let ticking = false;

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const setCounter = (next) => {
  if (!counter || next === currentCounter) return;

  currentCounter = next;
  counter.classList.add("is-changing");

  window.setTimeout(() => {
    counter.textContent = next;
    counter.classList.remove("is-changing");
  }, prefersReducedMotion ? 0 : 150);
};

const updateScrollState = () => {
  const heroProgress = hero ? clamp(window.scrollY / window.innerHeight, 0, 1) : 0;
  body.style.setProperty("--hero-progress", heroProgress.toFixed(3));
  body.classList.toggle("is-past-hero", heroProgress > 0.98);

  if (ending) {
    const rect = ending.getBoundingClientRect();
    const progress = clamp((window.innerHeight - rect.top) / (window.innerHeight * 0.68), 0, 1);
    const exitProgress = clamp((progress - 0.02) / 0.58, 0, 1);
    const easedExit = 1 - Math.pow(1 - exitProgress, 2);
    const shift = Math.round((1 - progress) * Math.min(window.innerHeight * 0.12, 96));
    const scale = 0.958 + progress * 0.042;
    const opacity = 0.7 + progress * 0.3;
    const worksScale = 1;
    const worksLift = Math.round(easedExit * -Math.min(window.innerHeight * 0.14, 138));
    const worksRadius = Math.round(easedExit * 64);
    const worksShadow = (0.1 + easedExit * 0.28).toFixed(3);
    const worksOpacity = "1";
    const labelProgress = clamp((progress - 0.03) / 0.72, 0, 1);
    const labelEase = 1 - Math.pow(1 - labelProgress, 2);
    const labelLift = Math.round((1 - labelEase) * Math.min(window.innerHeight * 0.09, 86));
    const labelOpacity = (0.14 + labelEase * 0.86).toFixed(3);

    ending.style.setProperty("--ending-progress", progress.toFixed(3));
    ending.style.setProperty("--ending-shift", `${shift}px`);
    ending.style.setProperty("--ending-scale", scale.toFixed(3));
    ending.style.setProperty("--ending-opacity", opacity.toFixed(3));
    ending.style.setProperty("--ending-label-y", `${labelLift}px`);
    ending.style.setProperty("--ending-label-opacity", labelOpacity);
    body.style.setProperty("--ending-progress", progress.toFixed(3));
    body.style.setProperty("--works-exit-scale", worksScale.toFixed(3));
    body.style.setProperty("--works-exit-y", `${worksLift}px`);
    body.style.setProperty("--works-exit-radius", `${worksRadius}px`);
    body.style.setProperty("--works-exit-shadow", worksShadow);
    body.style.setProperty("--works-exit-opacity", worksOpacity);
  }

  if (workCards.length) {
    const focusLine = window.innerHeight * 0.54;
    const active = workCards.find((card) => {
      const rect = card.getBoundingClientRect();
      return rect.top <= focusLine && rect.bottom >= focusLine;
    });

    if (active) {
      setCounter(active.dataset.workIndex);
    }
  }

  ticking = false;
};

const requestScrollUpdate = () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(updateScrollState);
};

window.addEventListener("scroll", requestScrollUpdate, { passive: true });
window.addEventListener("resize", requestScrollUpdate);

window.setTimeout(() => {
  body.classList.remove("is-loading");
  body.classList.add("is-ready");
  requestScrollUpdate();
}, prefersReducedMotion ? 0 : 60);

window.setTimeout(() => {
  body.classList.remove("is-opening");
}, prefersReducedMotion ? 0 : 2250);

const revealSections = document.querySelectorAll("[data-reveal]");

if (prefersReducedMotion) {
  revealSections.forEach((section) => section.classList.add("is-visible"));
} else {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    {
      root: null,
      threshold: 0.22,
      rootMargin: "0px 0px -14% 0px",
    },
  );

  revealSections.forEach((section) => revealObserver.observe(section));
}
