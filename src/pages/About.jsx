// import React from "react";

// function About() {
//   return (
//     <div className="page">
//       <h1>About Us</h1>

//       <p>
//         TechWorld is a technology company focused
//         on creating modern and innovative digital
//         solutions.
//       </p>

//       <div className="card-container">

//         <div className="card">
//           <h2>Our Mission</h2>
//           <p>
//             To provide quality technology solutions.
//           </p>
//         </div>

//         <div className="card">
//           <h2>Our Vision</h2>
//           <p>
//             To become a leading digital technology company.
//           </p>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default About;

import React, { useEffect } from 'react'

const TIMELINE = [
  { year: '2016', text: 'AutoVault opens as a single showroom with 12 cars on the floor.' },
  { year: '2019', text: 'First electric models added to the lineup, ahead of most local dealers.' },
  { year: '2022', text: 'Online booking launched — test drives could finally be reserved in advance.' },
  { year: '2026', text: 'AutoVault runs 40+ test drives a week across four vehicle categories.' },
]

const TEAM = [
  { name: 'Rohan Verma', role: 'Showroom Lead', hiring: false },
  { name: 'Fatima Al-Sayed', role: 'EV Specialist', hiring: false },
  { name: 'Lucas Bennett', role: 'Service Advisor', hiring: false },
  { name: 'Open position', role: 'Sales Associate', hiring: true },
]

export default function About() {
  // useEffect demo: keep the tab title in sync with the page you're on.
  useEffect(() => {
    document.title = 'About — AutoVault'
    return () => {
      document.title = 'AutoVault — Curated Car Showroom'
    }
  }, [])

  return (
    <div className="page">
      <section className="section">
        <div className="page__intro">
          <h1>Cars first. Sales pitch never.</h1>
          <p>
            AutoVault started because buying a car usually meant choosing
            between a pushy salesperson and a website full of stock photos.
            We built a showroom where you can sit in the car, ask the
            specialist anything, and leave without a single follow-up call
            you didn&apos;t ask for.
          </p>
        </div>
      </section>

      <section className="section section--muted">
        <div className="section__heading">
          <h2>How we got here</h2>
        </div>
        <ol className="timeline">
          {TIMELINE.map((event) => (
            <li key={event.year} className="timeline__item">
              <span className="timeline__year">{event.year}</span>
              <p>{event.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="section">
        <div className="section__heading">
          <h2>The floor team</h2>
        </div>
        <div className="grid grid--team">
          {TEAM.map((member) => (
            <div key={member.name} className="team-card">
              <div className="team-card__avatar">
                {member.name
                  .split(' ')
                  .map((part) => part[0])
                  .join('')}
              </div>
              <p className="team-card__name">{member.name}</p>
              <p className="team-card__role">{member.role}</p>
              {member.hiring && <span className="badge">Hiring now</span>}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}