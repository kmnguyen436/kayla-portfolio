import { FiArrowRight } from 'react-icons/fi'
import './Experience.css'

export default function Experience() {
  return (
    <section className="content-section experience-section" id="experience">
      <div className="section-heading">
        <p className="eyebrow">02 / THE STUDY</p>
        <h2>Where I’ve <em>been.</em></h2>
      </div>
      <div className="section-copy">
        <div className="experience-entry">
          <p className="experience-date">OCT 2024 – PRESENT</p>
          <h3>Software Engineer <span> / H-E-B</span></h3>
          <p>Building full-stack retail operations tools, shelf-label and product-location workflows, and improving delivery and observability with CI/CD, GKE, and Datadog.</p>
        </div>
        <div className="experience-entry">
          <p className="experience-date">AUG 2023 – AUG 2024</p>
          <h3>Software Engineer <span> / General Motors</span></h3>
          <p>Developed manufacturing dashboards and services with Angular and Java Spring Boot, and supported testing, delivery, and code security.</p>
        </div>
        <div className="experience-entry">
          <p className="experience-date">AUG 2022 – JUN 2023</p>
          <h3>Data Analyst <span> / Controls Central</span></h3>
          <p>Worked with SQL, reports, and Java-based data ingestion to improve data quality and reliability.</p>
        </div>
        <div className="education">
          <p className="experience-date">EDUCATION</p>
          <h3>Bachelor’s in Computer Science</h3>
          <p>California State Polytechnic University, Pomona</p>
        </div>
      </div>
    </section>
  )
}
