import * as React from 'react'
import { FaChevronRight } from '@react-icons/all-files/fa/FaChevronRight'
import { FaChevronDown } from '@react-icons/all-files/fa/FaChevronDown'
import Footer from '../components/Footer'
import '../styles/ambassadors.css'

export default function Ambassadors() {
  const [showQ1, setShowQ1] = React.useState(false)
  const [showQ2, setShowQ2] = React.useState(false)
  const [showQ3, setShowQ3] = React.useState(false)
  const [showQ4, setShowQ4] = React.useState(false)

  const expandedSectionColor = showQNum => {
    let color = 'white'
    if (showQNum) {
      color = '#F4F9FF'
    }
    return color
  }

  return (
    <div>
      <div className="nav-bar-placeholder">
        Nav Bar Placeholder
      </div>
      <div className="ambassador-section">
        <div className="header-section">
          <div>
            <div className="horizontal-align">
              <div className="horizontal-section">
                <h2>Applications are Open!</h2>
                <div>
                  Become a PennApps Campus Ambassador today. Applications are due
                  June 24th at 11:59 PM EST
                </div>
                <br />
                <button className="link-btn" type="button">Link</button>
              </div>
              <div className="horizontal-section">
                <div className="image-section-placeholder">
                  [illustration or exec pics here]
                  {' '}
                  <br />
                  <br />
                  <div>
                    {' '}
                    Writing on document? Folder with pennapps stuff coming out of
                    it?
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-content">
          <div className="application-info">
            <div>
              <h3>Become a PennApps Campus Ambassador</h3>
              <p>
                Want to represent PennApps and expand the nation&#39;s first
                college hacakthon to more potential hackers? Looking to expand
                your network and gain communication and leadership skills?
                PennApps Campus Ambassador is the role for you!
              </p>
              <p>
                As a PennApps campus ambassador, you will be promoting PennApps to
                your college campus and develop a plan to share PennApps to
                students and bring our hackathon events to more campuses and
                students across the United States and the world!
              </p>
              <p>
                You will also be part of the PennApps team and receive cool perks
                includign priority admission to PennApps XXIII, PennApps swag,
                merch, and a shoutout from our social media!
              </p>
            </div>
            <hr className="section-divider" />
            <div>
              <h3>Application Information</h3>
              <div>
                <h4>RESPONSIBILITIES</h4>
                <div>
                  As a PennApps campus ambassador, you will be:
                  {' '}
                  <ol>
                    <li>
                      Communicating between PennApps and students on your campus
                    </li>
                    <li>
                      Marketing & promoting PennApps and our Hackathon events
                    </li>
                    <li>
                      Developing social media ideas and strategies to expand
                      PennApps to potential hackers in the United States and
                      across the world
                    </li>
                  </ol>
                </div>
              </div>
              <div>
                <h4>HOW TO APPLY</h4>
                <div>
                  There will be 2 brief short answers to the application:
                  {' '}
                  <ol>
                    <li>
                      Why do you want to be a campus ambassador for PennApps?
                    </li>
                    <li>
                      What ideas do you have to attract potential PennApps hackers
                      on you campus? What platforms can you advertise PennApps to?
                    </li>
                  </ol>
                  Applications are due June 24th at 11:59 PM EST.
                </div>
              </div>
            </div>
          </div>
          <hr className="section-divider" />
          <div className="faqs">
            <h3>FAQS</h3>
            <hr />
            <button type="button" className="faqs-container" onClick={() => setShowQ1(!showQ1)} style={{ backgroundColor: expandedSectionColor(showQ1) }}>
              <div className="horizontal-align">
                <button
                  type="button"
                  className="faq-section-am"
                >
                  <div className="faq-content">
                    <div className="question">When will applications open and close?</div>
                    {showQ1 ? <section className="answer">Applications will open early June and will close mid-June. We will send out results shortly after the application closes.</section> : ''}
                  </div>
                </button>
                <div
                  className="arrow-button"
                >
                  {showQ1 ? <FaChevronDown /> : <FaChevronRight />}
                </div>
              </div>
            </button>
            <hr />
            <button type="button" className="faqs-container" onClick={() => setShowQ2(!showQ2)} style={{ backgroundColor: expandedSectionColor(showQ2) }}>
              <div className="horizontal-align">
                <button
                  type="button"
                  className="faq-section-am"
                >
                  <div className="faq-content">
                    <div className="question">What materials do we need to promote PennApps?</div>
                    {showQ2 ? <section className="answer">If accepted as a campus ambassador, we will send marketing materials you can send on social media, newsletters, etc.</section> : ''}
                  </div>
                </button>
                <div
                  className="arrow-button"
                >
                  {showQ2 ? <FaChevronDown /> : <FaChevronRight />}
                </div>
              </div>
            </button>
            <hr />
            <button type="button" className="faqs-container" onClick={() => setShowQ3(!showQ3)} style={{ backgroundColor: expandedSectionColor(showQ3) }}>
              <div className="horizontal-align">
                <button
                  type="button"
                  className="faq-section-am"
                >
                  <div className="faq-content">
                    <div className="question">Do CAs get automatic admission to PennApps?</div>
                    {showQ3 ? <section className="answer">While you are considered with the priority admission, you are not guaranteed a spot.</section> : ''}
                  </div>
                </button>
                <div
                  className="arrow-button"
                >
                  {showQ3 ? <FaChevronDown /> : <FaChevronRight />}
                </div>
              </div>
            </button>
            <hr />
            <button type="button" className="faqs-container" onClick={() => setShowQ4(!showQ4)} style={{ backgroundColor: expandedSectionColor(showQ4) }}>
              <div className="horizontal-align">
                <button
                  type="button"
                  className="faq-section-am"
                >
                  <div className="faq-content">
                    <div className="question">How will my progress be measured?</div>
                    {showQ4 ? <section className="answer">Participants will have the option to name the campus ambassador they heard from on the Hacker Application.</section> : ''}
                  </div>
                </button>
                <div
                  className="arrow-button"
                >
                  {showQ4 ? <FaChevronDown /> : <FaChevronRight />}
                </div>
              </div>
            </button>
            <hr />
          </div>
        </div>
      </div>
      <div><Footer /></div>
    </div>
  )
}
