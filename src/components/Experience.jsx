import React, { useRef } from "react";

export default function Experience() {
  const experienceRef = useRef(null);

  return (
    <section className="section-experience" id="experience">
      <h1>
        My <span className="half-text">Experience</span>
      </h1>

      <div className="experience-cards-container">

        {/* iKites.ai Internship */}
        <div className="experience-card">
          <h3>SDE / GenAI Intern — iKites.ai (IIT Delhi)</h3>
          <p className="experience-subtitle">
            New Delhi &nbsp;|&nbsp; May 2025 – Oct 2025
          </p>

          <ul>

            <li>
              Led the development of a <strong>multimodal ophthalmology analytics dashboard</strong>
              integrating OCT, RNFL, HVF, and longitudinal patient data to support disease progression analysis.
            </li>

            <li>
              Built a high-performance <strong>React.js frontend</strong> for interactive visualization
              and real-time medical workflow execution.
            </li>

            <li>
              Developed backend microservices using <strong>Flask</strong>, including data ingestion,
              aggregation APIs, analytics logic, and full longitudinal data pipelines.
            </li>

            <li>
              Managed <strong>AWS deployment</strong> (EC2, S3, reverse proxy, SSL, environment configs),
              integrated <strong>SAML authentication</strong>, and optimized system reliability.
            </li>

            <li>
              Owned complete <strong>full-stack delivery</strong> — architecture, APIs, UI/UX,
              DevOps, testing, optimization, deployment, and cross-team coordination.
            </li>
          </ul>

          {/* Add links here when ready */}
          <a href="https://drive.google.com/file/d/11mUPLgVhDdv2Sd-PqYW-p7FCUB2H-wdY/view?usp=drive_link" className="experience-link">Letter of Recommendation</a>
        </div>

      </div>
    </section>
  );
}
