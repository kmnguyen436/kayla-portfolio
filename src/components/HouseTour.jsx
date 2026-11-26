import { FiArrowDownRight } from 'react-icons/fi'
import './HouseTour.css'

function AboutRoom() {
  return (
    <svg viewBox="0 0 320 140" aria-hidden="true">
      <rect x="30" y="12" width="72" height="75" rx="35" fill="#b7c8b3" stroke="#816d59" strokeWidth="5" />
      <path d="M66 14v71M32 50h68" stroke="#f8f2e4" strokeWidth="4" />
      <path d="M34 70q17-19 33 0 14-14 31 1v13H34z" fill="#8fa88b" />
      <rect x="154" y="60" width="114" height="49" rx="12" fill="#c47e65" />
      <rect x="146" y="77" width="130" height="34" rx="10" fill="#d9967e" />
      <path d="M157 109v12m108-12v12" stroke="#765847" strokeWidth="6" />
      <rect x="164" y="67" width="28" height="20" rx="5" fill="#f2d5b9" />
      <rect x="227" y="67" width="28" height="20" rx="5" fill="#eac5aa" />
      <path d="M113 118h36m-18 0V82m-16 0h32l-7-21h-18z" stroke="#8e755f" strokeWidth="4" strokeLinejoin="round" fill="#f0ddba" />
      <ellipse cx="208" cy="126" rx="100" ry="5" fill="#765847" opacity=".12" />
    </svg>
  )
}

function ExperienceRoom() {
  return (
    <svg viewBox="0 0 320 140" aria-hidden="true">
      <rect x="35" y="10" width="84" height="99" rx="3" fill="#a87b5c" />
      <rect x="43" y="18" width="68" height="83" fill="#efdfc5" />
      <path d="M43 46h68M43 73h68" stroke="#a87b5c" strokeWidth="5" />
      <path d="M51 40V24h8v16m4 0V21h9v19m5 0V26h8v14m8 0V23h9v17M51 68V51h10v17m5 0V54h7v14m5 0V49h9v19" stroke="#b87760" strokeWidth="5" />
      <path d="M148 85h130M158 85v35m110-35v35" stroke="#84634d" strokeWidth="7" strokeLinecap="round" />
      <rect x="180" y="40" width="65" height="40" rx="3" fill="#796858" />
      <rect x="185" y="45" width="55" height="29" fill="#bdcec0" />
      <path d="M212 80v5m-13 0h26" stroke="#796858" strokeWidth="4" />
      <path d="M151 80q-1-19 11-27 12 8 11 27z" fill="#e6c690" />
      <path d="M162 55v-9" stroke="#796858" strokeWidth="3" />
      <path d="M225 120v-15q0-12 12-12h14q12 0 12 12v15" fill="#c99378" stroke="#84634d" strokeWidth="4" />
      <ellipse cx="206" cy="126" rx="100" ry="5" fill="#765847" opacity=".12" />
    </svg>
  )
}

function ProjectsRoom() {
  return (
    <svg viewBox="0 0 320 140" aria-hidden="true">
      <rect x="42" y="16" width="76" height="58" rx="2" fill="#f4ead8" stroke="#a58266" strokeWidth="5" />
      <path d="M51 64l20-22 14 12 11-18 14 28z" fill="#a4b99e" />
      <circle cx="95" cy="31" r="6" fill="#e1ae78" />
      <path d="M143 86h133M154 86v36m111-36v36" stroke="#84634d" strokeWidth="7" strokeLinecap="round" />
      <rect x="165" y="47" width="65" height="36" rx="3" fill="#f3e7d2" stroke="#9e7d64" strokeWidth="4" />
      <path d="M177 66l8-8 8 8m5 0h18" fill="none" stroke="#a9b79e" strokeWidth="4" strokeLinecap="round" />
      <path d="M244 83V60h20v23" fill="#ca8b70" />
      <path d="M250 60l-3-18m9 18 2-23m1 23 10-17" stroke="#79987b" strokeWidth="4" strokeLinecap="round" />
      <path d="M54 120h66v-18H54z" fill="#c99676" />
      <path d="M62 102v-9h49v9M66 110h42" fill="none" stroke="#956c52" strokeWidth="4" />
      <ellipse cx="165" cy="127" rx="115" ry="5" fill="#765847" opacity=".12" />
    </svg>
  )
}

function ContactRoom() {
  return (
    <svg viewBox="0 0 320 140" aria-hidden="true">
      <rect x="40" y="19" width="79" height="68" rx="3" fill="#c2d0bd" stroke="#f8f0df" strokeWidth="7" />
      <path d="M79 21v64M42 53h75" stroke="#f8f0df" strokeWidth="5" />
      <path d="M40 77q23-19 40 0 18-21 39-2v12H40z" fill="#97ae93" />
      <path d="M160 120V71q0-28 29-28t29 28v49" fill="#c4836c" stroke="#9b6b57" strokeWidth="5" />
      <path d="M168 119V72q0-21 21-21t21 21v47" fill="#dcaa8f" />
      <circle cx="202" cy="87" r="3" fill="#7f624e" />
      <path d="M240 118V77m-11 0h22l-4 14h-14z" stroke="#92745c" strokeWidth="4" fill="#d2a07f" />
      <path d="M240 78q-17-12-10-25 13 3 10 25zm0 0q1-19 15-24 5 15-15 24z" fill="#8da68a" />
      <ellipse cx="173" cy="127" rx="103" ry="5" fill="#765847" opacity=".12" />
    </svg>
  )
}

const rooms = [
  { href: '#about', number: '01', label: 'About me', hint: 'The living room', art: <AboutRoom /> },
  { href: '#experience', number: '02', label: 'Experience', hint: 'The study', art: <ExperienceRoom /> },
  { href: '#projects', number: '03', label: 'Projects', hint: 'The workshop', art: <ProjectsRoom /> },
  { href: '#contact', number: '04', label: 'Contact', hint: 'The front door', art: <ContactRoom /> },
]

export default function HouseTour() {
  return (
    <div className="house-area">
      <div className="house-caption"><span>THE HOUSE TOUR</span><span><span aria-hidden="true">✦ &nbsp;</span> PICK A ROOM</span></div>
      <div className="house">
        <div className="roof" aria-hidden="true"><span className="roof-window">✳</span></div>
        <div className="house-body">
          {rooms.map((room) => (
            <a className="room" href={room.href} key={room.href}>
              <div className="room-label"><span>{room.number} / {room.hint}</span><FiArrowDownRight aria-hidden="true" /></div>
              <div className="room-art">{room.art}</div>
              <span className="room-name">{room.label} <span aria-hidden="true">↗</span></span>
            </a>
          ))}
        </div>
        <div className="foundation" />
      </div>
      <p className="house-tip"><span aria-hidden="true">✧</span> Psst... click on a room to explore</p>
    </div>
  )
}
