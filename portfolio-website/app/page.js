import ThemeToggle from "./components/ThemeToggle";

export default function HomePage() {
  return (
    <>
      {/* Skip to content link for accessibility */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      {/*==================== HEADER ====================*/}
      <header className="header" id="header">
        <nav className="nav container">
          <a href="#home" className="nav__logo">
            <span className="nav__logo-circle">K</span>
            <span className="nav__logo-name">Kuldeep</span>
          </a>
          <div className="nav__menu" id="nav-menu">
            <span className="nav__title">Menu </span>
            <h3 className="nav__name">Kuldeep</h3>

            <ul className="nav__list">
              <li className="nav__item">
                <a href="#home" className="nav__link active-link">
                  Home
                </a>
              </li>
              <li className="nav__item">
                <a href="#about" className="nav__link">
                  About Me
                </a>
              </li>
              <li className="nav__item">
                <a href="#service" className="nav__link">
                  Services
                </a>
              </li>
              <li className="nav__item">
                <a href="#projects" className="nav__link">
                  Projects
                </a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__link nav__link-button">
                  Contact Me
                </a>
              </li>
            </ul>
            {/* Close button */}
            <div className="nav__close" id="nav-close">
              <i className="ri-close-line"></i>
            </div>
          </div>
          <div className="nav__buttons">
            {/* Theme change button */}
            <ThemeToggle />

            {/* toggle button */}
            <div className="nav__toggle" id="nav-toggle">
              <i className="ri-menu-4-line"></i>
            </div>
          </div>
        </nav>
      </header>

      {/*==================== MAIN ====================*/}
      <main className="main" id="main-content">
        {/*==================== HOME ====================*/}
        <section className="home section" id="home">
          <div className="home__container container grid">
            <h1 className="home__name">Kuldeep Singh Bhadouriya</h1>
            <div className="home__perfil">
              <div className="home__image">
                <img
                  src="/assets/img/home-perfil.jpg"
                  alt="Kuldeep Singh Bhadouriya - MERN Stack Developer"
                  className="home__img"
                />
                <div className="home__shadow"></div>

                <img
                  src="/assets/img/curved-arrow.svg"
                  alt="Decorative curved arrow"
                  className="home__arrow"
                />
                <img
                  src="/assets/img/random-lines.svg"
                  alt="Decorative lines"
                  className="home__line"
                />
                <div className="geometric-box"></div>
              </div>

              <div className="home__social">
                <a
                  href="https://www.instagram.com/wtf.kuldeepp/"
                  target="_blank"
                  rel="noreferrer"
                  className="home__social-link"
                >
                  <i className="ri-instagram-line"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/kuldeep-singh-bhadouriya-68a748311/"
                  target="_blank"
                  rel="noreferrer"
                  className="home__social-link"
                >
                  <i className="ri-linkedin-box-line"></i>
                </a>
                <a
                  href="https://github.com/Kuldeep-bhadouriya"
                  target="_blank"
                  rel="noreferrer"
                  className="home__social-link"
                >
                  <i className="ri-github-line"></i>
                </a>
              </div>
            </div>
            <div className="home__info">
              <p className="home__description">
                I build dynamic, full-stack web applications with the{" "}
                <b>MERN</b> stack. Skilled in front-end and back-end
                development.
              </p>

              <a href="#about" className="home__scroll">
                <div className="home__scroll-box">
                  <i className="ri-arrow-down-s-line"></i>
                </div>

                <span className="home__scroll-text">Scroll Down</span>
              </a>
            </div>
          </div>
        </section>

        {/*==================== ABOUT ====================*/}
        <section className="about section" id="about">
          <div className="about__container container grid">
            <h2 className="section__title-1">
              <span>About Me.</span>
            </h2>
            <div className="about__perfil">
              <div className="about__image">
                <img
                  src="/assets/img/about-perfil.jpg"
                  alt="Kuldeep Singh Bhadouriya professional photo"
                  className="about__img"
                />
                <div className="about__shadow"></div>
                <div className="geometric-box"></div>
                <img
                  src="/assets/img/random-lines.svg"
                  alt="Decorative lines"
                  className="about__line"
                />
                <div className="about__box"></div>
              </div>
            </div>
            <div className="about__info">
              <p className="about__description">
                A passionate <b>MERN stack web developer</b> with hands-on
                experience gained through an <b>internship</b> at Scaler School
                of Technology. I specialize in building dynamic, scalable web
                applications using MongoDB, Express.js, React, and Node.js. In
                addition to my web development skills, I’m a versatile{" "}
                <b>freelancer</b> with expertise in video editing and graphic
                design. I’ve won multiple awards, including an interschool
                competition for cinematography and video editing, as well as a
                hackathon during my 1st Semester. I’m always excited to take on
                new challenges, whether it's crafting immersive web experiences
                or creating visually captivating content. Let's connect and
                bring your ideas to life!
              </p>
              <ul className="about__list">
                <li className="about__item">
                  <b>My Skills Are:</b> MERN Stack Web Development, Video
                  Editing, Graphic Designing, C++ Programming, UI/UX Design, and
                  Version Control.
                </li>
              </ul>

              <div className="about__button">
                <a href="#contact" className="button">
                  <i className="ri-send-plane-line"></i> Contact Me
                </a>

                <a
                  href="https://www.linkedin.com/in/kuldeep-singh-bhadouriya-68a748311/"
                  target="_blank"
                  rel="noreferrer"
                  className="button__ghost"
                >
                  <i className="ri-linkedin-box-line"></i>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/*==================== SERVICES ====================*/}
        <section className="services section" id="service">
          <h2 className="section__title-2">
            <span>Services.</span>
          </h2>

          <div className="services__container container grid">
            <article className="services__card">
              <div className="services__border"></div>
              <div className="services__content">
                <div className="services__icon">
                  <div className="services__box"></div>
                  <i className="ri-layout-4-line"></i>
                </div>
                <h2 className="services__title">Web Design</h2>
                <p className="services__description">
                  Beautiful and elegant designs with interfaces that are
                  intuitive, efficient and pleasant to use for the user.
                </p>
              </div>
            </article>

            <article className="services__card">
              <div className="services__border"></div>
              <div className="services__content">
                <div className="services__icon">
                  <div className="services__box"></div>
                  <i className="ri-code-box-line"></i>
                </div>
                <h2 className="services__title">Development</h2>
                <p className="services__description">
                  Custom web development tailored to your specifications,
                  designed to provide a flawless user experience.
                </p>
              </div>
            </article>

            <article className="services__card">
              <div className="services__border"></div>
              <div className="services__content">
                <div className="services__icon">
                  <div className="services__box"></div>
                  <i className="ri-video-chat-line"></i>
                </div>
                <h2 className="services__title">Video Editor</h2>
                <p className="services__description">
                  Create and edit videos for your social media with high quality
                  and user satisfaction.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/*==================== PROJECTS ====================*/}
        <section className="projects section" id="projects">
          <h2 className="section__title-1">
            <span>Projects.</span>
          </h2>

          <div className="projects__container container grid">
            <article className="projects__card">
              <div className="projects__image">
                <img
                  src="/assets/img/capstone.png"
                  alt="Learning Path Generator multi-agent system screenshot"
                  className="projects__img"
                />
                <a
                  href="https://learning-path-capstone.streamlit.app/"
                  className="projects__button button"
                >
                  <i className="ri-arrow-right-up-line"></i>
                </a>
              </div>

              <div className="projects__content">
                <h3 className="projects__subtitle">AI Application</h3>
                <h2 className="projects__title">Learning Path Generator</h2>

                <p className="projects__description">
                  This is a multi-agent system built with the Google Agent Development Kit (ADK) that acts as an expert curriculum designer. It takes any learning topic and generates a complete, actionable learning plan in minutes.
                </p>
              </div>

              <div className="projects__buttons">
                <a
                  href="https://github.com/Kuldeep-bhadouriya/learning-path"
                  target="_blank"
                  rel="noreferrer"
                  className="projects__link"
                >
                  <i className="ri-github-line"></i>View
                </a>
              </div>
            </article>

            <article className="projects__card">
              <div className="projects__image">
                <img
                  src="/assets/img/Zeroerror.png"
                  alt="Zero Error Esports website screenshot"
                  className="projects__img"
                />
                <a
                  href="https://www.zeroerroresports.com/"
                  className="projects__button button"
                >
                  <i className="ri-arrow-right-up-line"></i>
                </a>
              </div>

              <div className="projects__content">
                <h3 className="projects__subtitle">Website</h3>
                <h2 className="projects__title">Zero Error Esports</h2>

                <p className="projects__description">
                  A modern, responsive website for the Zero Error Esports
                  startup highlighting their story, events, services, teams, and
                  contact. Built for performance and clean UX with an
                  esports-inspired theme.
                </p>
              </div>

              <div className="projects__buttons">
                <a
                  href="https://github.com/sharmaxkartik/Zero-Error-Esports"
                  target="_blank"
                  rel="noreferrer"
                  className="projects__link"
                >
                  <i className="ri-github-line"></i>View
                </a>
              </div>
            </article>

            <article className="projects__card">
              <div className="projects__image">
                <img
                  src="/assets/img/project-8.png"
                  alt="Barterly time-banking platform screenshot"
                  className="projects__img"
                />
                <a
                  href="https://barterly-steel.vercel.app/"
                  className="projects__button button"
                >
                  <i className="ri-arrow-right-up-line"></i>
                </a>
              </div>

              <div className="projects__content">
                <h3 className="projects__subtitle">Website</h3>
                <h2 className="projects__title">Barterly</h2>

                <p className="projects__description">
                  A community-driven time-banking platform where every hour you
                  contribute earns you an hour to learn a new skill from others.
                </p>
              </div>

              <div className="projects__buttons">
                <a
                  href="https://github.com/sharmaxkartik/Barterly"
                  target="_blank"
                  rel="noreferrer"
                  className="projects__link"
                >
                  <i className="ri-github-line"></i>View
                </a>
              </div>
            </article>

            <article className="projects__card">
              <div className="projects__image">
                <img
                  src="/assets/img/project-7.png"
                  alt="Kronos Techfest website screenshot"
                  className="projects__img"
                />
                <a
                  href="https://kronos-2025.vercel.app/"
                  className="projects__button button"
                >
                  <i className="ri-arrow-right-up-line"></i>
                </a>
              </div>

              <div className="projects__content">
                <h3 className="projects__subtitle">Website</h3>
                <h2 className="projects__title">Kronos-Techfest Website</h2>

                <p className="projects__description">
                  Official website for our college techfest <b>Kronos</b> with
                  event listings, schedules, and a responsive UI built by our
                  team.
                </p>
              </div>

              <div className="projects__buttons">
                <a
                  href="https://github.com/vedant20082004/KRONOS2025"
                  target="_blank"
                  rel="noreferrer"
                  className="projects__link"
                >
                  <i className="ri-github-line"></i>View
                </a>
              </div>
            </article>

            <article className="projects__card">
              <div className="projects__image">
                <img
                  src="/assets/img/project-5.png"
                  alt="Fix-Up Google Solution Challenge project screenshot"
                  className="projects__img"
                />
                <a
                  href="https://fix-up-gules.vercel.app/"
                  className="projects__button button"
                >
                  <i className="ri-arrow-right-up-line"></i>
                </a>
              </div>

              <div className="projects__content">
                <h3 className="projects__subtitle">Website</h3>
                <h2 className="projects__title">Google Solution Project</h2>

                <p className="projects__description">
                  A submission for the <b>Google Solution Challenge</b> focused
                  on building a helpful, accessible platform with clean UI and
                  straightforward workflows.
                </p>
              </div>

              <div className="projects__buttons">
                <a
                  href="https://github.com/sharmaxkartik/Fix-Up"
                  target="_blank"
                  rel="noreferrer"
                  className="projects__link"
                >
                  <i className="ri-github-line"></i>View
                </a>
              </div>
            </article>

            <article className="projects__card">
              <div className="projects__image">
                <img
                  src="/assets/img/project-4.png"
                  alt="Personal portfolio website screenshot"
                  className="projects__img"
                />
                <a
                  href="https://kuldeep-bhadouriya.vercel.app/"
                  className="projects__button button"
                >
                  <i className="ri-arrow-right-up-line"></i>
                </a>
              </div>

              <div className="projects__content">
                <h3 className="projects__subtitle">Website</h3>
                <h2 className="projects__title">Portfolio Website</h2>

                <p className="projects__description">
                  My personal portfolio showcasing projects, services, and a
                  contact form with message delivery via APIs. Fully responsive
                  and easy to maintain.
                </p>
              </div>

              <div className="projects__buttons">
                <a
                  href="https://github.com/Kuldeep-bhadouriya/Portfolio-website/tree/e5b12774d39f6d6e7ce9181b20237ef303dd259c"
                  target="_blank"
                  rel="noreferrer"
                  className="projects__link"
                >
                  <i className="ri-github-line"></i>View
                </a>
              </div>
            </article>

            <article className="projects__card">
              <div className="projects__image">
                <img
                  src="/assets/img/project-1.jpg"
                  alt="WE Work Earn hackathon project screenshot"
                  className="projects__img"
                />
                <a
                  href="https://github.com/sharmaxkartik/WE-Work-Earn-"
                  className="projects__button button"
                >
                  <i className="ri-arrow-right-up-line"></i>
                </a>
              </div>

              <div className="projects__content">
                <h3 className="projects__subtitle">Website</h3>
                <h2 className="projects__title">Hackathon Project</h2>

                <p className="projects__description">
                  A functional landing page designed and developed in three
                  hours during a college hackathon.
                </p>
              </div>

              <div className="projects__buttons">
                <a
                  href="https://github.com/sharmaxkartik/WE-Work-Earn-"
                  target="_blank"
                  rel="noreferrer"
                  className="projects__link"
                >
                  <i className="ri-github-line"></i>View
                </a>
              </div>
            </article>

            <article className="projects__card">
              <div className="projects__image">
                <img
                  src="/assets/img/project-6.png"
                  alt="Real-time multiplayer chess game screenshot"
                  className="projects__img"
                />
                <a
                  href="https://github.com/Kuldeep-bhadouriya/Chess"
                  className="projects__button button"
                >
                  <i className="ri-arrow-right-up-line"></i>
                </a>
              </div>

              <div className="projects__content">
                <h3 className="projects__subtitle">Website</h3>
                <h2 className="projects__title">Chess Backend Project</h2>

                <p className="projects__description">
                  This is my backend project which works on socket.io and{" "}
                  <b>express.js</b>. It is a real-time multiplayer chess game
                  where you can play with friends online.
                </p>
              </div>

              <div className="projects__buttons">
                <a
                  href="https://github.com/Kuldeep-bhadouriya/Chess"
                  target="_blank"
                  rel="noreferrer"
                  className="projects__link"
                >
                  <i className="ri-github-line"></i>View
                </a>
              </div>
            </article>
          </div>
        </section>

        {/*==================== CONTACT ====================*/}
        <section className="contact section" id="contact">
          <div className="contact__container grid">
            <div className="contact__data">
              <h2 className="section__title-2">
                <span>Contact Me.</span>
              </h2>

              <p className="contact__description-1">
                I will read all emails. Send me any message you want and I'll
                get back to you.
              </p>
              <p className="contact__description-2">
                I need your <b>Name</b> and <b>Email Address</b>, but you won't
                receive anything other than your reply.
              </p>

              <div className="geometric-box"></div>
            </div>

            <div className="contact__mail">
              <h2 className="contact__title">Send Me A Message</h2>

              <form action="" className="contact__form" id="contact-form">
                <div className="contact__group">
                  <div className="contact__box">
                    <input
                      type="text"
                      name="user_name"
                      className="contact__input"
                      id="name"
                      required
                      placeholder="First Name"
                    />
                    <label htmlFor="name" className="contact__label">
                      First Name
                    </label>
                  </div>

                  <div className="contact__box">
                    <input
                      type="email"
                      name="user_email"
                      className="contact__input"
                      id="email"
                      required
                      placeholder="Email Address"
                    />
                    <label htmlFor="email" className="contact__label">
                      Email Address
                    </label>
                  </div>

                  <div className="contact__box">
                    <input
                      type="text"
                      name="user_subject"
                      className="contact__input"
                      id="subject"
                      required
                      placeholder="Subject"
                    />
                    <label htmlFor="subject" className="contact__label">
                      Subject
                    </label>
                  </div>

                  <div className="contact__box contact__area">
                    <textarea
                      name="user_message"
                      id="message"
                      className="contact__input"
                      required
                      placeholder="Message"
                    ></textarea>
                    <label htmlFor="message" className="contact__label">
                      Message
                    </label>
                  </div>

                  <p className="contact__message" id="contact-message"></p>

                  <button type="submit" className="contact__button button">
                    <i className="ri-send-plane-line"></i> Send Message
                  </button>
                </div>
              </form>
            </div>

            <div className="contact__social">
              <img
                src="/assets/img/curved-arrow.svg"
                alt="Decorative arrow pointing to social links"
                className="contact__social-arrow"
              />

              <div className="contact__social-data">
                <div>
                  <p className="contact__social-description-1">
                    Does not send emails
                  </p>
                  <p className="contact__social-description-2">
                    Write me on my social networks
                  </p>
                </div>

                <div className="contact__social-links">
                  <a
                    href="https://www.instagram.com/wtf.kuldeepp/"
                    target="_blank"
                    rel="noreferrer"
                    className="contact__social-link"
                  >
                    <i className="ri-instagram-fill"></i>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/kuldeep-singh-bhadouriya-68a748311/"
                    target="_blank"
                    rel="noreferrer"
                    className="contact__social-link"
                  >
                    <i className="ri-linkedin-box-line"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/*==================== FOOTER ====================*/}
      <footer className="footer">
        <div className="footer__container container grid">
          <ul className="footer__links">
            <li>
              <a href="#about" className="footer__link">
                About
              </a>
            </li>

            <li>
              <a href="#service" className="footer__link">
                Services
              </a>
            </li>

            <li>
              <a href="#projects" className="footer__link">
                Projects
              </a>
            </li>
          </ul>

          <span className="footer__copy">
            &#169; All Rights Reserved By <a href="#">Me.</a>
          </span>
        </div>
      </footer>

      {/*========== SCROLL UP ==========*/}
      <a href="#" className="scrollup" id="scroll-up">
        <i className="ri-arrow-up-s-line scrollup__icon"></i>
      </a>
    </>
  );
}
