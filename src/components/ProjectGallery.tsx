
"use client";

import { useState } from "react";

type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  role: string;
  year: string;
  cover: string;
  images: string[];
};

const categories = [
  "All",
  "Logos",
  "Graphics",
  "Banners",
  "Web Design",
  "AI Creative",
];

const projects: Project[] = [
  {
    id: 1,
    title: "Logos / Branding",
    category: "Logos",
    description: "A visual identity project focused on branding, typography, and visual consistency.",
    role: "Logo Design / Brand Identity",
    year: "2026",
    cover: "/images/logos/brand-identity-01.jpg",
    images: [
      "/images/logos/brand-identity-01.jpg",
      "/images/logos/brand-identity-02.jpg",
      "/images/logos/brand-identity-03.jpg",
      "/images/logos/brand-identity-04.jpg",	  
    ],
  },
  {
    id: 2,
    title: "Graphic Designs",
    category: "Graphics",
    description: "Creative digital graphics designed for social media marketing and engagement.",
    role: "Graphic Design / Art Direction",
    year: "2026",
    cover: "/images/graphics/social-media-design-01.jpg",
    images: [
      "/images/graphics/social-media-design-01.jpg",
      "/images/graphics/social-media-design-02.jpg",
      "/images/graphics/social-media-design-03.jpg",
      "/images/graphics/social-media-design-04.jpg",
      "/images/graphics/social-media-design-05.jpg",
      "/images/graphics/social-media-design-06.jpg",
      "/images/graphics/social-media-design-07.jpg",
    ],
  },
  {
    id: 3,
    title: "Banner Ads",
    category: "Banners",
    description: "Promotional banner concepts for digital advertising campaigns.",
    role: "Banner Design / Advertising",
    year: "2026",
    cover: "/images/banners/promo-banner-01.jpg",
    images: [
      "/images/banners/promo-banner-01.jpg",
      "/images/banners/promo-banner-02.jpg",
      "/images/banners/promo-banner-03.jpg",	  
      "/images/banners/promo-banner-04.jpg",
      "/images/banners/promo-banner-05.jpg",
      "/images/banners/promo-banner-06.jpg",	  
      "/images/banners/promo-banner-07.jpg",
      "/images/banners/promo-banner-08.jpg",	 
    ],
  },
  {
    id: 4,
    title: "Web Designs ",
    category: "Web Design",
    description: "A modern website concept focused on usability and responsive design.",
    role: "Web Design / UI",
    year: "2026",
    cover: "/images/web-design/landing-page-01.jpg",
    images: [
      "/images/web-design/landing-page-01.jpg",
      "/images/web-design/landing-page-02.jpg",
    ],
  },
  {
    id: 5,
    title: "AI Image Creation",
    category: "AI Creative",
    description: "Experimental visual concepts created using AI-powered creative tools.",
    role: "AI Image Generation / Art Direction",
    year: "2026",
    cover: "/images/ai-creative/ai-visual-01.jpg",
    images: [
      "/images/ai-creative/ai-visual-01.jpg",
      "/images/ai-creative/ai-visual-02.jpg",
      "/images/ai-creative/ai-visual-03.jpg",	  
    ],
  },
  {
    id: 6,
    title: "Creative Branding",
    category: "Branding",
    description: "A branding exploration combining graphic elements and visual storytelling.",
    role: "Logo Design / Branding",
    year: "2026",
    cover: "/images/logos/brand-identity-03.jpg",
    images: ["/images/logos/brand-identity-03.jpg",
	"/images/graphics/social-media-design-08.jpg",	
	"/images/graphics/social-media-design-09.jpg",
	"/images/graphics/social-media-design-10.jpg",	
	],
  },

];

export default function ProjectGallery() {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState<Project | null>(null);
  const [imageIndex, setImageIndex] = useState(0);

  const filteredProjects =
    active === "All"
      ? projects
      : projects.filter((project) => project.category === active);

  function openProject(project: Project) {
    setSelected(project);
    setImageIndex(0);
  }

  function closeProject() {
    setSelected(null);
  }

  function changeImage(direction: number) {
    if (!selected) return;
    setImageIndex((current) =>
      (current + direction + selected.images.length) %
      selected.images.length
    );
  }

  return (
    <section className="work-section section-padding" id="work">
      <div className="section-heading">
        <div>
          <span className="eyebrow">01 / SELECTED PROJECTS</span>
          <h2>MY <span className="orange">WORK.</span></h2>
        </div>
        <p>
          A collection of ideas, visuals, and digital experiences
          brought to life.
        </p>
      </div>

      <div className="filters">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActive(category)}
            className={active === category ? "filter active" : "filter"}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="project-grid">
        {filteredProjects.map((project, index) => (
          <button
            className="project-card project-card-button"
            key={project.id}
            onClick={() => openProject(project)}
            aria-label={`View ${project.title} project`}
          >
            <div className={`project-image project-image-${index % 6}`}>
              <img
                src={project.cover}
                alt={project.title}
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
              <span className="project-overlay-label">
                VIEW PROJECT ↗
              </span>
              <span className="project-image-category">
                {project.category}
              </span>
            </div>

            <div className="project-info">
              <h3>{project.title}</h3>
              <span>{project.category}</span>
            </div>
          </button>
        ))}
      </div>

      <p className="placeholder-note">
        SELECTED PROJECTS / CLICK ANY PROJECT TO EXPLORE
      </p>

      {selected && (
        <div
          className="project-modal"
          onClick={closeProject}
          role="presentation"
        >
          <div
            className="project-modal-content"
            role="dialog"
            aria-modal="true"
            aria-label={selected.title}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={closeProject}
              aria-label="Close project"
            >
              ×
            </button>

            <div className="modal-image-wrap">
              <img
                src={selected.images[imageIndex]}
                alt={`${selected.title} preview ${imageIndex + 1}`}
                className="modal-image"
              />

              {selected.images.length > 1 && (
                <>
                  <button
                    className="modal-arrow modal-prev"
                    onClick={() => changeImage(-1)}
                    aria-label="Previous image"
                  >
                    ←
                  </button>
                  <button
                    className="modal-arrow modal-next"
                    onClick={() => changeImage(1)}
                    aria-label="Next image"
                  >
                    →
                  </button>
                  <span className="modal-counter">
                    {imageIndex + 1} / {selected.images.length}
                  </span>
                </>
              )}
            </div>

            <div className="modal-details">
              <div>
                <span className="eyebrow">
                  {selected.category} / {selected.year}
                </span>
                <h2>{selected.title}</h2>
                <p>{selected.description}</p>
                <span className="modal-role">ROLE: {selected.role}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
