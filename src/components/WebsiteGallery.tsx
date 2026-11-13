
"use client";

import { useState } from "react";
import { websites } from "@/data/websites";

export default function WebsiteGallery() {
  const [selectedSite, setSelectedSite] = useState<
    (typeof websites)[number] | null
  >(null);

  const featuredSite = websites.find((site) => site.featured);
  const otherSites = websites.filter((site) => !site.featured).slice(0, 4);

  const renderWebsite = (
    site: (typeof websites)[number],
    featured = false
  ) => (
    <button
      key={site.title}
      type="button"
      className={`live-website-card ${featured ? "featured" : ""}`}
      onClick={() => setSelectedSite(site)}
    >
      <div className="live-website-preview">
        <img src={site.image} alt={`${site.title} website preview`} />
        <span className="website-hover-label">VIEW PROJECT ↗</span>
      </div>

      <div className="live-website-info">
        <div>
          <span className="website-role">{site.role}</span>
          <h3>{site.title}</h3>
          <p>{site.description}</p>
          <div className="website-tech">
            {site.technologies.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </div>
        <span className="website-open-icon">↗</span>
      </div>
    </button>
  );

  return (
    <>
      <div className="live-website-grid">
        {featuredSite && renderWebsite(featuredSite, true)}
        {otherSites.map((site) => renderWebsite(site))}
      </div>

      {selectedSite && (
        <div
          className="website-modal"
          onClick={() => setSelectedSite(null)}
        >
          <div
            className="website-modal-content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="website-modal-close"
              onClick={() => setSelectedSite(null)}
              aria-label="Close preview"
            >
              ×
            </button>

            <div className="website-modal-image">
              <img
                src={selectedSite.image}
                alt={`${selectedSite.title} website preview`}
              />
            </div>

            <div className="website-modal-details">
              <span className="website-role">{selectedSite.role}</span>
              <h2>{selectedSite.title}</h2>
              <p>{selectedSite.description}</p>

              <div className="website-tech">
                {selectedSite.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <a
                href={selectedSite.url}
                target="_blank"
                rel="noopener noreferrer"
                className="website-visit-button"
              >
                VISIT LIVE WEBSITE ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
