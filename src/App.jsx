import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <NavBar />
      <main id="main-content" tabIndex="-1">
        <Hero />
        <div className="section-divider"><span>STAY A WHILE</span><span aria-hidden="true">✳</span><span>TAKE A LOOK AROUND</span></div>
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
