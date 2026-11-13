
import ProjectGallery from "@/components/ProjectGallery";
import WebsiteGallery from "@/components/WebsiteGallery";

export default function Home() {
  return (
    <main>
      <nav className="navbar">
        <a href="#" className="brand">KRVP<span>®</span></a>
        <div className="nav-links">
          <a href="#work">WORK</a>
          <a href="#about">ABOUT</a>
          <a href="#services">SERVICES</a>
          <a href="#contact" className="nav-contact">LET'S TALK ↗</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-top">
          <span>INDEPENDENT CREATIVE PROFESSIONAL</span>
          <span>PHILIPPINES · AVAILABLE WORLDWIDE</span>
        </div>

        <h1>
          DESIGNING
          <br />
          <span className="outline-text">BEYOND</span> THE
          <br />
          ORDINARY<span className="orange">.</span>
        </h1>

        <div className="hero-bottom">
          <div>
            <p className="hero-title">MULTIMEDIA DESIGNER</p>
            <p className="hero-subtitle">AI CREATIVE & DEVELOPER</p>
          </div>
          <p className="hero-description">
            15+ years of transforming ideas into visual experiences,
            digital products, and creative solutions.
          </p>
          <a href="#work" className="round-link">↓</a>
        </div>

        <div className="hero-stamp">
          CREATIVE<br />MINDSET<br />EST. 2009
        </div>
      </section>

      <section className="intro-strip">
        <span>DESIGN</span>
        <span>✳</span>
        <span>DEVELOP</span>
        <span>✳</span>
        <span>CREATE</span>
        <span>✳</span>
        <span>INNOVATE</span>
      </section>

      <ProjectGallery />


<section className="websites-section section-padding" id="websites">
  <div className="section-heading">
    <span>02 / DIGITAL EXPERIENCES</span>
    <h2>WEBSITES THAT WORK.</h2>
  </div>

  <WebsiteGallery />
</section>


      <section className="about-section section-padding" id="about">
        <span className="eyebrow">03 / A LITTLE ABOUT ME</span>

        <h2>
          CREATIVE THINKING.<br />
          <span className="orange">TECHNICAL EXECUTION.</span>
        </h2>

        <p className="about-copy">
          I'm Kay Ryan Perez, a multimedia designer and digital creative
          with 15+ years of experience in graphic design, web design,
          multimedia production, and digital development. I combine
          creative thinking with emerging AI technologies to build
          meaningful visual and digital experiences.
        </p>
      </section>

      <section className="services-section section-padding" id="services">
        <span className="eyebrow">04 / WHAT I DO</span>
        <h2>MY <span className="orange">EXPERTISE.</span></h2>

        <div className="services-list">
          {[
            ["01", "Graphic Design", "Branding, logos, digital ads, brochures, print materials, infographics."],
            ["02", "Multimedia", "Video editing, ebooks, digital magazines, social media content."],
            ["03", "Web Design", "Website layouts, responsive design, HTML/CSS, WordPress."],
            ["04", "Funnel Building", "Landing pages, opt-in pages, sales pages, thank-you pages, webinar funnels"],
            ["05", "Ai-Creative & Development", "AI image creation, coding assistance, debugging, web application development."],
          ].map(([number, title, description]) => (
            <div className="service-row" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
              <span className="service-arrow">↗</span>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-section section-padding" id="contact">
        <span className="eyebrow">05 / HAVE A PROJECT IN MIND?</span>

        <h2>
          LET'S MAKE<br />
          <span className="orange">IT HAPPEN.</span>
        </h2>



<div className="direct-email">
  <span>EMAIL ME DIRECTLY</span>

  <a
    className="email-address"
    href="mailto:krvp2188@gmail.com"
  >
    krvp2188@gmail.com ↗
  </a>

  <div className="social-links">
    <a
      href="YOUR_LINKEDIN_URL"
      target="www.linkedin.com/in/kay-ryan-perez-19a52626"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V8.98h3.42v1.57h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.56V8.98h3.56v11.47ZM22.22 0H1.78C.8 0 0 .77 0 1.73v20.54C0 23.23.8 24 1.78 24h20.43c.99 0 1.79-.77 1.79-1.73V1.73C24 .77 23.2 0 22.22 0Z" fill="currentColor"/>
      </svg>
    </a>

    <a
      href="YOUR_FACEBOOK_URL"
      target="https://www.facebook.com/kayryanperez/"
      rel="noopener noreferrer"
      aria-label="Facebook"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M24 12a12 12 0 1 0-13.875 11.85v-8.38H7.078V12h3.047V9.356c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.513c-1.49 0-1.956.925-1.956 1.874V12h3.328l-.532 3.47h-2.796v8.38A12.003 12.003 0 0 0 24 12Z" fill="currentColor"/>
      </svg>
    </a>
  </div>
</div>


        <div className="contact-footer">
          <span>KAY RYAN PEREZ © 2026</span>
          <span>MULTIMEDIA DESIGNER / AI CREATIVE & DEVELOPER</span>
          <a href="mailto:krvp2188@gmail.com">EMAIL ↗</a>
        </div>
      </section>
    </main>
  );
}
