import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Footer from '../components/Footer'
import OrganizerCard from '../components/OrganizerCard'
import Navbar from '../components/Navbar'

import '../styles/home.css'
import landingImage from '../images/landing-image.png'
import timelineImage from '../images/timeline.png'
import mobileTimelineImage from '../images/mobile-timeline.png'
import organizers from '../organizers.json'

export function Head() {
  return (
    <>
      <title>PennApps - The world's first college hackathon</title>
      <link rel="stylesheet" href="https://use.typekit.net/tri7gwo.css" />
    </>
  )
}

export default function Index() {
  const imageData = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "organizers" } }) {
        nodes {
          name
          childImageSharp {
            gatsbyImageData(
              width: 200
              height: 200
             )
          }
        }
      }
    }
  `)
  const organizerImages = Object.fromEntries(
    imageData.allFile.nodes.map(node => [node.name, node.childImageSharp.gatsbyImageData]),
  )

  return (
    <div className="landing">
      <Navbar />
      {/* <div className="landing-info">
        <div className="landing-info-text">Applications for PennAppsXXIV are open!</div>
        <div className="landing-info-btn-container">
          <a href="http://2023f.pennapps.com/">
            <button className="landing-info-btn" type="button">GO TO SITE</button>
          </a>
        </div>
      </div> */}
      <div className="landing">
        <img className="landing-img" src={landingImage} alt="Landing Header" />
      </div>
      <div className="landing-page-container">
        <div className="about-pennapps">
          <h3>About PennApps</h3>
          <div>
            Founded in the fall of 2009, PennApps was the nation’s first student-run college
            hackathon. Since then, it has spurred a revolution in the way engineering students
            develop and showcase their skills, spawning an entire “league” of hackathons across the
            nation. In past years, over a thousand students from the U.S. and other countries like
            Switzerland, Canada, England, and Singapore have converged in Philadelphia for the
            spring and fall editions of the event for a weekend of creation and discovery. Both
            beginners and experts alike will work together, learn and compete to become better
            engineers and work on awesome projects.
          </div>
        </div>
        <div className="timeline">
          <h3>Event Timeline</h3>
          <div className="timeline-img-wrapper">
            <picture>
              <source
                media="(min-width: 680px)"
                srcSet={timelineImage}
              />
              <img
                src={mobileTimelineImage}
                alt="Timeline Image"
                className="timeline-img"
              />
            </picture>
          </div>
          <p>Reach out to contact@pennapps.com if you have any questions!</p>
        </div>
        <div className="organizers">
          <h3>Organizers</h3>
          <div className="organizers-grid">
            {organizers.map(organizer => (
              <OrganizerCard
                key={organizer.image}
                name={organizer.name}
                title={organizer.title}
                image={organizerImages[organizer.image]}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
