import * as React from 'react'
import '../styles/home.css'
import { GatsbyImage } from 'gatsby-plugin-image'

export default function OrganizerCard(props) {
  const { name, title, image } = props
  return (
    <div className="organizer-card">
      <div className="img-container">
        <GatsbyImage image={image} imgStyle={{ borderRadius: '4px' }} />
      </div>
      <div className="title-container">
        <h4>{name}</h4>
        <div className="organizer-title">{title}</div>
      </div>
    </div>
  )
}
