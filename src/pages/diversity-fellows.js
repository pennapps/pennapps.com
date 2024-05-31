import * as React from 'react'
import { FaChevronRight } from '@react-icons/all-files/fa/FaChevronRight'
import { FaChevronDown } from '@react-icons/all-files/fa/FaChevronDown'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ApplicationsOpenSvg from '../images/applications-open.svg'
import ApplicationsClosedSvg from '../images/applications-closed.svg'
import '../styles/ambassadors.css'
import QRCode from 'qrcode.react'; 

export function Head() {
  return (
    <>
      <title>Diversity Fellows - PennApps</title>
      <link rel="stylesheet" href="https://use.typekit.net/tri7gwo.css" />
    </>
  )
}

export default function DiversityFellows() {
  // add a state variable to hold the URL for the QR Code: 
  const [qrText, setQrText] = React.useState(''); 

  return (
    <div>
      <Navbar currPage="DIVERSITY FELLOWS" />
      <div className="ambassador-section">
        <div className="main-content">
          <div className="application-info">
            <div>
              <h3>Become a PennApps Diversity Fellow</h3>
              <p>
                Do you identify as a first-generation, low-income, or historically underrepresented hacker? Can you bring unique perspectives and experiences to PennApps XXIV? Are you looking for financial support for traveling to and attending our hackathon? If you said ‘yes’ to any of these questions, apply to join our Diversity Fellows Program now! Scan the QR code below, or go to this link:
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

              {/* Add QR code generator */} 
              <div className="qr-code-generator"> 
                <h3>Apply to be a Diversity Fellow!</h3> 
                <QRCode value="https://docs.google.com/forms/d/e/1FAIpQLSeWCWk6Ahr1Kdwq0Swat1d27r7MWPPsme2Us8p6s-6Nyx_s-A/viewform" /> 
                <p>Scan the QR code to access the form</p>
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
