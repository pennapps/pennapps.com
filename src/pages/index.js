import * as React from 'react'

import Footer from '../components/Footer'
import OrganizerCard from '../components/OrganizerCard'
import Navbar from '../components/Navbar'

import '../styles/home.css'
import landingImage from '../images/landing-image.png'
import timelineImage from '../images/timeline.png'
import mobileTimelineImage from '../images/mobile-timeline.png'
import Sai from '../images/organizers/sai.png'
import Jason from '../images/organizers/jason.jpg'
import Anna from '../images/organizers/anna.jpg'
import Anuj from '../images/organizers/anuj.jpg'
import Audrey from '../images/organizers/audrey.jpg'
import Cynthia from '../images/organizers/cynthia.png'
import Heyi from '../images/organizers/heyi.jpg'
import Joe from '../images/organizers/joe.png'
import Mia from '../images/organizers/mia.png'
import Qijia from '../images/organizers/qijia.jpeg'
import Sylvia from '../images/organizers/sylvia.png'
import Zachary from '../images/organizers/zachary.jpg'
import Wenny from '../images/organizers/wenny.png'

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

const pictures = [
  Sai, Jason, Anna, Anuj, Audrey, Cynthia, Heyi, Joe, Mia, Qijia, Sylvia, Wenny, Zachary,
]

export default function Index() {
  return (
    <div className="landing">
      <Navbar />
      <div className="landing-info">
        <div className="landing-info-text">Applications for PennAppsXXIII are open!</div>
        <div className='landing-info-btn-container'>
          <a href="http://2022f.pennapps.com/">
            <button className="landing-info-btn" type="button">GO TO SITE</button>
          </a>
        </div>
      </div>
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
            {Object.keys(organizers).map((key, idx) => (
              <OrganizerCard
                name={key}
                title={organizers[key]}
                idx={idx}
                src={pictures[idx]}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
