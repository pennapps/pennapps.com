import * as React from 'react'
import '../styles/organizers.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ApplicationsIntro from '../components/ApplicationsIntro'
import ApplicationsProcess from '../components/ApplicationsProcess'
import ApplicationsCommittees from '../components/ApplicationsCommittees'
import ApplicationsFAQs from '../components/ApplicationsFAQs'
import Logo from '../images/logo.svg'

export { Head } from './index'

export default function Organizers() {
  // change this if Organizer Applications are open or closed
  const applicationsOpen = false

  return (
    <>
      <Navbar />
      <div className="applications-header-container">
        <Logo className="organizers-logo" />
        {applicationsOpen ? (
          <div className="organizers-applications">
            <h2>Applications are Open!</h2>
            <div>Join the PennApps organizing team today</div>
            <button type="button">APPLY</button>
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
        <ApplicationsFAQs />
      </div>
      <Footer />
    </>
  )
}
