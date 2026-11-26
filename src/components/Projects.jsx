import { useState } from 'react'
import { FiArrowLeft, FiArrowRight, FiExternalLink, FiGithub } from 'react-icons/fi'
import './Projects.css'

const projects = [
  { title: 'Mezcal Runner', label: 'A LITTLE ADVENTURE', description: 'A little running game starring my favorite adventure buddy. Help Mezcal collect treats and avoid obstacles!' },
  { title: 'Something new is growing.', label: 'COMING SOON', description: 'A cozy spot saved for the next project on my workbench.' },
  { title: 'More to come.', label: 'COMING SOON', description: 'Another little idea will find its home here soon.' },
]

function getGameUrl() {
  const value = import.meta.env.VITE_MEZCAL_GAME_URL || 'https://kmnguyen436.github.io/mezcal-runner-game/'
  try {
    const url = new URL(value)
    const localDev = import.meta.env.DEV && url.protocol === 'http:' && ['localhost', '127.0.0.1'].includes(url.hostname)
    if (!url.username && !url.password && (url.protocol === 'https:' || localDev)) return url.href
  } catch {
    return null
  }
  return null
}

const game = getGameUrl()

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0)
  const project = projects[activeIndex]

  function showProject(direction) {
    setActiveIndex((index) => (index + direction + projects.length) % projects.length)
  }

  return (
    <section className="projects-section" id="projects">
      <div className="projects-heading">
        <div><p className="eyebrow">03 / THE WORKSHOP</p><h2>Things I’ve <em>made.</em></h2></div>
        <p>A home for projects, experiments, and ideas brought to life.</p>
      </div>
      <div className="project-carousel" aria-label="Project showcase">
        <button type="button" className="project-nav" onClick={() => showProject(-1)} aria-label="Previous project"><FiArrowLeft aria-hidden="true" /></button>
        <div className="project-content">
          <div className="project-copy">
            <p className="eyebrow">{project.label}</p>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p className="project-count" aria-live="polite" aria-atomic="true">PROJECT {activeIndex + 1} OF {projects.length}: {project.title}</p>
          </div>
          {activeIndex === 0 ? (
            <div className="game-embed">
              {game ? (
                <>
                  <iframe title="Play Mezcal Runner" src={game} sandbox="allow-scripts" referrerPolicy="no-referrer" loading="lazy" />
                  <p className="game-embed-note">Changing projects resets the game. <a href={game} target="_blank" rel="noreferrer">Open the game in a new tab <FiExternalLink aria-hidden="true" /></a></p>
                </>
              ) : (
                <div className="game-unavailable">
                  <span aria-hidden="true">✿</span>
                  <p>The game link is not valid. Please configure an HTTPS game URL.</p>
                </div>
              )}
            </div>
          ) : (
            <div className="project-illustration" aria-hidden="true"><span>✳</span><span>✦</span><span>✿</span></div>
          )}
          {activeIndex !== 0 && <a className="text-link project-github" href="https://github.com/kmnguyen436" target="_blank" rel="noreferrer"><FiGithub aria-hidden="true" /> Visit my GitHub <span className="sr-only">(opens in a new tab)</span><FiArrowRight aria-hidden="true" /></a>}
        </div>
        <button type="button" className="project-nav" onClick={() => showProject(1)} aria-label="Next project"><FiArrowRight aria-hidden="true" /></button>
      </div>
    </section>
  )
}
