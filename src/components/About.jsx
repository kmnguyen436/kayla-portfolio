import './About.css'
import mezcal_smiling from '../assets/mezcal_smiling.jpeg'

export default function About() {
  return (
    <section className="content-section about-section" id="about">
      <div className="section-heading">
        <p className="eyebrow">01 / THE LIVING ROOM</p>
        <h2>A little about <em>me.</em></h2>
      </div>
      <div className="section-copy">
        <p className="lead">Hello, and welcome! I’m Kayla Nguyen.</p>
        <p>I’m a software engineer with a background in data and a love for building thoughtful things. I studied computer science at California State Polytechnic University, Pomona.</p>
        <p>When I’m away from my keyboard, I love woodworking and spending time with my dog, Mezcal.</p>
        <div className="tags"><span>SOFTWARE</span><span>DATA</span><span>FRONTEND</span></div>
        <div className="mezcal-card">
          <img src={mezcal_smiling} alt="Mezcal smiling" width={150} />
          <div><p className="eyebrow">A LITTLE HOUSEMATE</p><h3>Meet Mezcal</h3><p>My favorite companion loves to show everyone some love, so be sure to play with him a bit down below!</p></div>
        </div>
      </div>
    </section>
  )
}
