import { FiArrowDownRight } from 'react-icons/fi'
import HouseTour from './HouseTour'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-copy">
        <p className="eyebrow"><span className="sparkle" aria-hidden="true">✳</span> A LITTLE SPACE ON THE INTERNET</p>
        <h1>Hi, I’m Kayla.<br /><em>Come on in.</em></h1>
        <p className="hero-description">Welcome to my little corner of the web. I’m a software engineer who loves making things and finding thoughtful solutions.</p>
        <a className="text-link" href="#about">A little more about me <FiArrowDownRight aria-hidden="true" /></a>
        <div className="hero-note"><span aria-hidden="true">✿</span> Make yourself at home.</div>
      </div>
      <HouseTour />
    </section>
  )
}
