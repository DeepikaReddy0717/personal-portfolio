import React, { useState } from "react";
import "./Experience.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Button from "./Button";
import WorkExperience from "./WorkExperience";

const Experience = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [activeCertificate, setActiveCertificate] = useState(null);

  // Toggle certificate visibility per experience
  const toggleCertificate = (id) => {
    setActiveCertificate((prev) => (prev === id ? null : id));
  };

  return (
    <section className="experience container section" id="experience" aria-label="Work Experience Section">
      <h2 className="section__title">Experience</h2>

      <div className="resume__container">
        <Tabs
          className="tabs"
          selectedIndex={tabIndex}
          onSelect={setTabIndex}
          selectedTabClassName="is-active"
          selectedTabPanelClassName="is-active"
          forceRenderTabPanel={true} // keeps panels mounted for smooth toggle
        >
          <TabList className="tab__list" role="tablist" aria-label="Company Tabs">
            {WorkExperience.map(({ id, company }) => (
              <Tab
                key={`company-${id}`}
                className="tab"
                role="tab"
                aria-selected={tabIndex === id - 1} // id assumed sequential, adjust if not
                tabIndex={tabIndex === id - 1 ? 0 : -1}
              >
                <Button className="tab__button">{company}</Button>
              </Tab>
            ))}
          </TabList>

          {WorkExperience.map(
            ({ id, company, yearsActive, title, location, information, image, certificate }) => (
              <TabPanel
                key={`panel-${id}`}
                className="tab__panel"
                role="tabpanel"
                aria-labelledby={`company-tab-${id}`}
                hidden={tabIndex !== id - 1}
              >
                <div className="panel-header">
                  {image && (
                    <img
                      src={image.src}
                      alt={`${company} logo`}
                      className="panel-logo"
                      style={image.style}
                      loading="lazy"
                      width={image.style?.width || "auto"}
                      height={image.style?.height || "auto"}
                    />
                  )}

                  {certificate && (
                    <button
                      className="certificate-button"
                      aria-expanded={activeCertificate === id}
                      aria-controls={`certificate-${id}`}
                      onClick={() => toggleCertificate(id)}
                    >
                      {activeCertificate === id ? "Hide Certificate" : "View Certificate"}
                    </button>
                  )}
                </div>

                {activeCertificate === id && certificate && (
                  <div
                    id={`certificate-${id}`}
                    className="certificate-container"
                    role="region"
                    aria-label={`${company} certificate`}
                  >
                    <img
                      src={certificate.src}
                      alt={`${company} Certificate`}
                      style={certificate.style}
                      className="certificate-image"
                      loading="lazy"
                    />
                    <button
                      className="close-certificate"
                      aria-label="Close certificate"
                      onClick={() => setActiveCertificate(null)}
                    >
                      ×
                    </button>
                  </div>
                )}

                <h3 className="tab__panel-title">
                  {title} @ <span className="company-name">{company}</span>
                </h3>
                <p className="tab__panel-subtitle">
                  {yearsActive} | {location}
                </p>
                <ul className="tab__panel-list">
                  {information.map((info, index) => (
                    <li key={`info-${index}`}>{info}</li>
                  ))}
                </ul>
              </TabPanel>
            )
          )}
        </Tabs>
      </div>
    </section>
  );
};

export default Experience;
