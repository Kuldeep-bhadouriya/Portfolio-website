
"use client";

import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const ScrollRevealWrapper = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const initScrollReveal = () => {
      const sr = ScrollReveal({
        distance: "40px",
        duration: 1000,
        delay: 150,
        reset: true,
        // Apply reveal states only on scroll (after hydration), so
        // ScrollReveal never mutates the server-rendered DOM during the
        // hydration window and can't trigger a hydration mismatch.
        defer: true,
      });

      sr.reveal(".home__data, .home__social-link, .home__info", {
        origin: "top",
      });
      sr.reveal(".about__data, .skills__title, .skills__subtitle", {
        origin: "left",
      });
      sr.reveal(".home__perfil, .about__image, .contact__mail", {
        origin: "right",
      });
      sr.reveal(
        ".home__name, .home__info, .about__container .section__title-1, .about__info, .contact__social, .contact__data",
        { origin: "left" }
      );
      sr.reveal(".services__card, .projects__card", { interval: 100 });
      sr.reveal(".skills__content", { origin: "top" });

      return sr;
    };

    // Start after hydration + idle time to keep the reveal setup away from the
    // server-rendered DOM while React is still attaching to it.
    const runWhenIdle = window.requestIdleCallback
      ? () => window.requestIdleCallback(initScrollReveal, { timeout: 1000 })
      : () => setTimeout(initScrollReveal, 1000);

    const idleId = runWhenIdle();

    return () => {
      if (window.requestIdleCallback) {
        window.cancelIdleCallback(idleId);
      } else {
        clearTimeout(idleId);
      }
    };
  }, []);

  return null;
};

export default ScrollRevealWrapper;
