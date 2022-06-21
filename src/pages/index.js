import * as React from 'react'

import Footer from '../components/Footer'
import OrganizerCard from '../components/OrganizerCard'
import '../styles/landing.css'
import landingImage from '../images/landing-image.png'
import timelineImage from '../images/timeline.png'
// import jasonImage from '../images/organizers/jason.jpg'

const organizers = {
  'Sai Mamidala': 'DIRECTOR',
  'Jason Hom': 'VICE DIRECTOR',
  'Anna Xia': 'OUTREACH',
  'Anuj Kothari': 'LOGISTICS',
  'Audrey Yang': 'DEV',
  'Cynthia Adhiambo Otieno': 'SPONSORSHIP',
  'Heyi Liu': 'OUTREACH',
  'Joe Konno': 'DEV',
  'Mia Kim': 'CREATIVE',
  'Qijia (Joy) Liu': 'LOGISTICS',
  'Sylvia Zhao': 'CREATIVE',
  'Wenny Cheng': 'MARKETING',
  'Zachary Huang-Ogata': 'SPONSORSHIP',
}

export default function Index() {
  return (
    <div className="landing">
      <div className="nav-bar-placeholder">
        Nav Bar Placeholder
      </div>
      <div className="landing-info">
        <div className="landing-info-text">Applications for PennAppsXXIII are open!</div>
        <div><button className="landing-info-btn" type="button">GO TO SITE</button></div>
      </div>
      <div className="landing">
        <img className="landing-img" src={landingImage} alt="Landing Header Image" />
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
          <img className="timeline-img" src={timelineImage} alt="Timeline Image" />
        </div>
        <div className="organizers">
          <h3>Organizers</h3>
          <div className="organizers-grid">
            {Object.keys(organizers).map((key, idx) => (
              <OrganizerCard
                name={key}
                title={organizers[key]}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
