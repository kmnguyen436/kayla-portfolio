import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/NavBar'

function App() {
  const [count, setCount] = useState(0)

  function handleNavClick() {

  }

  return (
    <> <Navbar />
      <main className='px-3 max-w-7xl mx-auto flex flex-col gap-9 w-full pb-10 pt-4'>
      <div className="room-container">
        <section className='home'>
          <div className="drawer-shelf">
            {/* Add content or leave it empty to just show the shelf */}
            <div className="shelf-content">
              <h1>Kayla Nguyen</h1>
              <p>Software Engineer | Data Engineer | Frontend Developer</p>
            </div>
          </div>
          <div className="drawer-shelf" />
          <div className="drawer-shelf" />
          <div className="drawer-shelf" />
        </section></div>
        <section className='about-me'>
          <h1>About Me</h1>
        </section>
        <section className='work-experience'>
          <h1>Work Experience</h1>
        </section>
        <section className='projects'>
          <h1>Projects</h1>
        </section>
        <section className='contacts'>
          <h1>Contacts</h1>
        </section>

      </main>
    </>
  )
}

export default App
