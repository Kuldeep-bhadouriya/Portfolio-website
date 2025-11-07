/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

/* Menu show */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu?.classList.add("show-menu");
  });
}

/* Menu hidden */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu?.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  navMenu?.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== SHADOW HEADER ===============*/
const shadowHeader = () => {
  const header = document.getElementById("header");
  if (header) {
    // Add a class if the bottom offset is greater than 50 of the viewport
    window.scrollY >= 50
      ? header.classList.add("shadow-header")
      : header.classList.remove("shadow-header");
  }
};
window.addEventListener("scroll", shadowHeader);

/*=============== EMAIL / CONTACT ===============*/
const contactForm = document.getElementById("contact-form");
const contactMessage = document.getElementById("contact-message");
if (contactForm) {
  const showMessage = (msg, ok = false) => {
    if (!contactMessage) return;
    contactMessage.textContent = msg;
    contactMessage.style.color = ok
      ? "var(--first-color)"
      : "var(--title-color)";
    setTimeout(() => {
      contactMessage.textContent = "";
    }, 5000);
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    // Show sending message
    showMessage("Sending message...", true);

    try {
      // Prefer EmailJS if available and loaded
      if (
        typeof window !== "undefined" &&
        window.emailjs &&
        typeof window.emailjs.sendForm === "function"
      ) {
        // Get configuration from window (set in HTML or via env)
        const emailjsConfig = window.EMAILJS_CONFIG || {
          publicKey: "wXOdiuuByIuiblG_V",
          serviceId: "service_8q59eqn",
          templateId: "template_dbecm64",
        };

        // Initialize if not already
        try {
          if (window.emailjs && typeof window.emailjs.init === "function") {
            window.emailjs.init(emailjsConfig.publicKey);
          }
        } catch (initErr) {
          console.error("EmailJS init error:", initErr);
        }

        // Send the email using EmailJS
        const result = await window.emailjs.sendForm(
          emailjsConfig.serviceId,
          emailjsConfig.templateId,
          "#contact-form",
          emailjsConfig.publicKey
        );

        console.log("EmailJS success:", result);
        showMessage("Message sent successfully ✅", true);
        contactForm.reset();
        return;
      }

      // Fallback to local API route if EmailJS not available
      console.log("EmailJS not available, using API fallback");
      const formData = new FormData(contactForm);
      const payload = Object.fromEntries(formData.entries());

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || `Request failed (${res.status})`);
      }

      showMessage("Message sent successfully ✅", true);
      contactForm.reset();
    } catch (err) {
      console.error("Contact form error:", err);
      showMessage("Message not sent (service error) ❌", false);
    }
  };

  contactForm.addEventListener("submit", sendEmail);
}

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUpBtn = document.getElementById("scroll-up");
  if (scrollUpBtn) {
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
    window.scrollY >= 350
      ? scrollUpBtn.classList.add("show-scroll")
      : scrollUpBtn.classList.remove("show-scroll");
  }
};
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute("id");
    const sectionsClass = document.querySelector(
      `.nav__menu a[href*="${sectionId}"]`
    );

    if (sectionsClass) {
      if (
        scrollDown > sectionTop &&
        scrollDown <= sectionTop + sectionHeight
      ) {
        sectionsClass.classList.add("active-link");
      } else {
        sectionsClass.classList.remove("active-link");
      }
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*=============== DARK LIGHT THEME ===============*/
// Theme handling is now managed by the React ThemeToggle component
// Keeping this code commented for reference
/*
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

if (themeButton) {
  // Previously selected topic (if user selected)
  const selectedTheme = localStorage.getItem("selected-theme");
  const selectedIcon = localStorage.getItem("selected-icon");

  // We obtain the current theme that the interface has by validating the dark-theme class
  const getCurrentTheme = () =>
    document.body.classList.contains(darkTheme) ? "dark" : "light";
  const getCurrentIcon = () =>
    themeButton.classList.contains(iconTheme)
      ? "ri-moon-line"
      : "ri-sun-line";

  // We validate if the user previously chose a topic
  if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
      darkTheme
    );
    themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
      iconTheme
    );
  } else {
    // Default to light theme if no preference is saved
    document.body.classList.remove(darkTheme);
    themeButton.classList.remove(iconTheme);
  }

  // Activate / deactivate the theme manually with the button
  themeButton.addEventListener("click", () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // We save the theme and the current icon that the user chose
    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
  });
}
*/
