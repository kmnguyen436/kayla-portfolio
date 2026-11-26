import './NavBar.css'

const links = [
  ['About', '#about'],
  ['Experience', '#experience'],
  ['Projects', '#projects'],
  ['Contact', '#contact'],
]

export default function NavBar() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#home" aria-label="Kayla Nguyen, home">
        <span className="wordmark-icon" aria-hidden="true">✳</span>
        kayla's githome<span className="wordmark-dot">.</span>
      </a>
      <nav className="main-nav" aria-label="Main navigation">
        {links.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
      </nav>
      <a className="header-link" href="#contact">Say hello <span aria-hidden="true">↗</span></a>
    </header>
  )
}
