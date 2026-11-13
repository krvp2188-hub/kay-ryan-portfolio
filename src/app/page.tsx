
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
  <span></span>
  <a href="mailto:krvp2188@gmail.com">
   EMAIL ME DIRECTLY : krvp2188@gmail.com ↗
  </a>
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
