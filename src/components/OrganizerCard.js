import * as React from 'react'

import '../styles/landing.css'

export default function OrganizerCard(props) {
  const { name, title, img } = props

  return (
    <div className="organizer-card">
      <div className="img-container">
        <img src={img} className="organizer-img" alt={name} />
      </div>
      <div className="title-container">
        <h4>{name}</h4>
        <div className="organizer-title">{title}</div>
      </div>
    </div>
  )
}