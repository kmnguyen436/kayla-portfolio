import { FiArrowRight, FiGithub, FiLinkedin } from 'react-icons/fi'
import './Contact.css'

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <p className="eyebrow">04 / THE FRONT DOOR</p>
      <h2>Thanks for <em>stopping by.</em></h2>
      <p>Want to connect or see what I’m building? Find me here.</p>
      <div className="contact-links">
        <a className="button-link button-light" href="https://github.com/kmnguyen436" target="_blank" rel="noreferrer"><FiGithub aria-hidden="true" /> GitHub <span className="sr-only">(opens in a new tab)</span><FiArrowRight aria-hidden="true" /></a>
        <a className="button-link button-light" href="https://www.linkedin.com/in/kayla-nguyen-b41b23207/" target="_blank" rel="noreferrer"><FiLinkedin aria-hidden="true" /> LinkedIn <span className="sr-only">(opens in a new tab)</span><FiArrowRight aria-hidden="true" /></a>
      </div>
      <span className="contact-flower" aria-hidden="true">✳</span>
    </section>
  )
}
