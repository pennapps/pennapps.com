import * as React from 'react'
import './organizers.css'
import ApplicationsIntro from '../components/ApplicationsIntro'
import ApplicationsProcess from '../components/ApplicationsProcess'
import ApplicationsCommittees from '../components/ApplicationsCommittees'
import ApplicationsFAQs from '../components/ApplicationsFAQs'

export default function Organizers() {
  return (
    <>
      <div className="nav-bar-placeholder">
        Nav Bar Placeholder
      </div>
      <div className="applications-header-container">
        <div className="applications">
          <h2>Applications are Open!</h2>
          <div>Join the PennApps organizing team today</div>
          <button type="button">APPLY</button>
        </div>
        <div className="pictures">
          Illustration or exec pic here
        </div>
      </div>
      <div className="applications-body-container">
        <ApplicationsIntro />
        <ApplicationsProcess />
        <ApplicationsCommittees />
        <ApplicationsFAQs />
      </div>
    </>
  )
}
