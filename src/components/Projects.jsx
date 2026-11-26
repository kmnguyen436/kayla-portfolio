import { FiArrowRight, FiGithub } from 'react-icons/fi'
import './Projects.css'

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-heading">
        <div><p className="eyebrow">03 / THE WORKSHOP</p><h2>Things I’ve <em>made.</em></h2></div>
        <p>A home for projects, experiments, and ideas brought to life.</p>
      </div>
      <div className="project-placeholder">
        <div className="project-illustration" aria-hidden="true"><span>✳</span><span>✦</span><span>✿</span></div>
        <div className="project-placeholder-copy">
          <p className="eyebrow">ON THE WORKBENCH</p>
          <h3>Good things are in the works.</h3>
          <p>This space is being saved for a collection of notable projects. In the meantime, you can find my work on GitHub.</p>
          <a className="button-link" href="https://github.com/kmnguyen436" target="_blank" rel="noreferrer"><FiGithub aria-hidden="true" /> Visit my GitHub <span className="sr-only">(opens in a new tab)</span><FiArrowRight aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  )
}
