
"use client";

import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const ScrollRevealWrapper = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Wait for hydration to complete before initializing ScrollReveal
      const initScrollReveal = () => {
        const sr = ScrollReveal({
          distance: "60px",
          duration: 2500,
          delay: 400,
          reset: true,
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

      // Delay initialization until after hydration
      const timeoutId = setTimeout(initScrollReveal, 300);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, []);

  return null;
};

export default ScrollRevealWrapper;
