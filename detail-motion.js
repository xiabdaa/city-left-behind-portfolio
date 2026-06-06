(() => {
  const body = document.body;

  if (!body.classList.contains("detail-page")) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const revealTargets = [
    ...document.querySelectorAll(".info-grid article"),
    ...document.querySelectorAll(".photo-grid figure"),
  ];

  const markReady = () => body.classList.add("detail-ready");

  const revealWithoutGsap = () => {
    markReady();

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      revealTargets.forEach((target) => target.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    revealTargets.forEach((target) => observer.observe(target));
  };

  if (prefersReducedMotion || !window.gsap) {
    revealWithoutGsap();
    return;
  }

  const { gsap } = window;
  const { ScrollTrigger } = window;

  if (ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
  }

  markReady();

  gsap.set(
    [
      ".detail-nav",
      ".detail-copy .eyebrow",
      ".detail-copy h1",
      ".detail-copy p:last-child",
      ".detail-hero img",
    ],
    { willChange: "transform, opacity, clip-path" },
  );

  gsap
    .timeline({ defaults: { duration: 1, ease: "power3.out" } })
    .from(".detail-nav", { y: -26, opacity: 0, duration: 0.75 })
    .from(".detail-copy .eyebrow", { y: 24, opacity: 0 }, "-=0.36")
    .from(
      ".detail-copy h1",
      {
        yPercent: 104,
        opacity: 0,
        clipPath: "inset(0 0 100% 0)",
        duration: 1.12,
      },
      "-=0.28",
    )
    .from(".detail-copy p:last-child", { y: 28, opacity: 0 }, "-=0.54")
    .from(
      ".detail-hero img",
      {
        y: 38,
        scale: 1.035,
        opacity: 0,
        clipPath: "inset(12% 0 12% 0)",
        duration: 1.18,
      },
      "-=0.86",
    );

  if (!ScrollTrigger) {
    revealWithoutGsap();
    return;
  }

  revealTargets.forEach((target, index) => {
    gsap.from(target, {
      y: 58,
      opacity: 0,
      clipPath: "inset(8% 0 8% 0)",
      duration: 0.95,
      ease: "power3.out",
      delay: (index % 2) * 0.08,
      scrollTrigger: {
        trigger: target,
        start: "top 84%",
        once: true,
      },
    });
  });

  gsap.utils.toArray(".photo-grid img").forEach((image) => {
    gsap.fromTo(
      image,
      { yPercent: -1.8 },
      {
        yPercent: 1.8,
        ease: "none",
        scrollTrigger: {
          trigger: image,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      },
    );
  });
})();
