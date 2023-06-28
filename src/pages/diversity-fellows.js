import * as React from 'react'
import { FaChevronRight } from '@react-icons/all-files/fa/FaChevronRight'
import { FaChevronDown } from '@react-icons/all-files/fa/FaChevronDown'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ApplicationsOpenSvg from '../images/applications-open.svg'
import ApplicationsClosedSvg from '../images/applications-closed.svg'
import '../styles/ambassadors.css'

export function Head() {
  return (
    <>
      <title>Diversity Fellows - PennApps</title>
      <link rel="stylesheet" href="https://use.typekit.net/tri7gwo.css" />
    </>
  )
}

export default function DiversityFellows() {
  return (
    <div>
      <Navbar currPage="DIVERSITY FELLOWS" />
      <div className="ambassador-section">
        <div className="main-content">
          <div className="application-info">
            <div>
              <h3>Become a PennApps Diversity Fellow</h3>
              <p>
                Do you identify as a first-generation, low-income, or historically underrepresented hacker? Can you bring unique perspectives and experiences to PennApps XXIV? Are you looking for financial support for traveling to and attending our hackathon? If you said ‘yes’ to any of these questions, apply to join our Diversity Fellows Program now! Scan the QR code above, or go to this link:
                {' '}
                <a href="https://tinyurl.com/pennapps-dfp-2023">https://tinyurl.com/pennapps-dfp-2023</a>
              </p>
              <p>
                Hackers accepted into the PennApps Diversity Fellows Program will receive full or partial reimbursement for travel and finding a place to stay during PennApps XXIV. Diversity Fellows will also gain exclusive access to a series of skill-building workshops put together by PennApps organizers in the weeks leading up to the hackathon. Don’t miss your chance to earn these amazing perks!
              </p>
            </div>
            <hr className="section-divider" />
            <div>
              <h3>Application Information</h3>
              <div>
                <h4>HOW TO APPLY</h4>
                <div>
                  Use
                  {' '}
                  <a href="https://tinyurl.com/pennapps-dfp-2023">this form</a>
                  {' '}
                  to tell us more about you! We want to know how your background and experiences have given you a unique perspective, and how you would implement this perspective at PennApps XXIV.
                  <br />
                  <br />
                  Applications are due on Sunday, July 16th, at 11:59 PM EST.
                </div>
              </div>
            </div>
          </div>
          <hr className="section-divider" />
        </div>
      </div>
      <div><Footer /></div>
    </div>
  )
}
