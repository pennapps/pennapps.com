import * as React from 'react'
import '../styles/organizers.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ApplicationsIntro from '../components/ApplicationsIntro'
import ApplicationsProcess from '../components/ApplicationsProcess'
import ApplicationsCommittees from '../components/ApplicationsCommittees'
import ClosedImg from '../images/applications-closed.svg'
import OpenImg from '../images/applications-open.svg'
import FAQs from '../components/FAQs'

const questions = {
  'Who can be an organizer for PennApps?':
          'Only Penn students can be organizers. If you’re a current Penn student, look out for an application in April if you are interested in joining us!',
  'Do I need previous experience to be an organizer?':
          'No previous experience required! We are looking for people who are passionate about creating an exciting and inclusive space to meet others and learn about tech and entrepreneurship and are able to commit to the time to be an organizer.',
  'What is the time commitment?':
          'Expect to commit 2 - 4 hours per week to PennApps meetings and tasks.',

}

export function Head() {
  return (
    <>
      <title>Organizers - PennApps</title>
      <link rel="stylesheet" href="https://use.typekit.net/tri7gwo.css" />
    </>
  )
}

export default function Organizers() {
  // change this if Organizer Applications are open or closed
  const applicationsOpen = true

  return (
    <>
      <Navbar currPage="ORGANIZERS" />
      <div className="applications-header-container">
        {
          applicationsOpen ? (<OpenImg className="open-closed-logo" />) : (<ClosedImg className="open-closed-logo" />)
        }

        {applicationsOpen ? (
          <div className="organizers-applications">
            <h2>Applications are Open!</h2>
            <div>Join the PennApps organizing team today</div>
            <button className="applications-btn" type="button">APPLY</button>
          </div>
        ) : (
          <div className="organizers-applications">
            <h2>Applications are Closed</h2>
            <div>Stay tuned...</div>
          </div>
        )}
      </div>
      <div className="applications-body-container">
        <ApplicationsIntro />
        <ApplicationsProcess />
        <ApplicationsCommittees />
        <FAQs content={questions}/>
      </div>
      <Footer />
    </>
  )
}
