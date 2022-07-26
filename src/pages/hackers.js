import React, { useState } from 'react'
import { Link } from 'gatsby'
import { useSpring, animated } from 'react-spring'
import Navbar from '../components/Navbar'
import chevronImage from '../images/arrow-east.png'
import iterationLogo from '../images/iteration-logo-f22.png'
import '../styles/hackers.css'

const content = {
  'Why PennApps?': `PennApps is the oldest and one of the largest hackathons hosted by college
  students. Attending PennApps means a valuable experience in software development through
  developing your project and attending workshops. More importantly, this is a place where hundreds
  of passionate hackers get together to learn, connect, and inspire each other.`,
  'Who can apply for PennApps?': `Students who are 15 or above + enrolled in or completed secondary
  education.`,
  'Do I need prior hackathon experience to apply?': 'Nope! We encourage everyone to apply.',
  'What is the application process?': `We will open applications during mid-June on
  apply.pennapps.com. You will be notified of the decision based on the time you submit. Please
  refer to the timeline below to learn more about the process, and follow @pennapps on Instagram
  for updates on application!`,
  'How will my application be evaluated?': `We have a team of organizers reviewing your applications
  on a rolling basis with a standardized rubric, taking into consideration both your written
  responses and your portfolio.`,
  'If PennApps is in-person, how does travel reimbursement look like?': `We will make decisions
  about reimbursement on an individual basis.`,
  'Do I have to have a team before I apply?': `No! You can apply as an individual and we will
  facilitate team formation closer to the hackathon. However, you will have to submit a final
  project in a team of 2-4 people.`,
}

export default function Hackers() {
  return (
    <div className="background-wrapper">
      <Navbar />
      <div className="hackers-section">
        <div className="hackers-header-container">
          <div className="hackers-applications">
            <h1 className="apply-header-text">Apply to PennAppsXXIII!</h1>
            <div>Applications are now open</div>
            <div>
              <a href="http://apply.pennapps.com/">
                <button className="apply-button" type="button">APPLY</button>
              </a>
              <a href="https://2022f.pennapps.com/">
                <button className="apply-button" type="button">EVENT SITE</button>
              </a>
            </div>
          </div>
          <div>
            <img className="iteration-logo" src={iterationLogo} alt="Iteration Logo" />
          </div>
        </div>
        <div className="hackers-body-container">
          <h1 className="faq-text">FAQs</h1>
          {Object.keys(content).map(question => (
            <QuestionCard questionHead={question} questionBody={content[question]} />
          ))}
        </div>
      </div>
    </div>
  )
}

function QuestionCard({ questionHead, questionBody }) {
  const [isOpen, setOpen] = useState(false)

  return (
    <div
      className="question-container"
      onClick={() => setOpen(!isOpen)}
      role="button"
      onKeyPress={() => setOpen(!isOpen)}
      tabIndex={0}
    >
      <hr className="topHR" />
      <div className="card-header">
        <h3 className="question-text">{questionHead}</h3>
        <RotatingChevron isOpen={isOpen} setOpen={setOpen} />
      </div>
      <div className="answer-text">
        {isOpen && (<SlidingText isOpen={isOpen} setOpen={setOpen} text={questionBody} />)}
      </div>
    </div>
  )
}

function RotatingChevron({ isOpen, setOpen }) {
  const rotate = isOpen ? 'rotate(90deg)' : 'rotate(0)'

  return (
    <input
      className="chevron"
      type="image"
      style={{ transform: rotate, transition: 'all 0.05s linear' }}
      src={chevronImage}
      alt="Click"
      onClick={() => setOpen(!isOpen)}
    />
  )
}

function SlidingText({ isOpen, setOpen, text }) {
  const contentProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 0.1,
  })

  return (
    <animated.p className="slidingText" style={contentProps}>{text}</animated.p>
  )
}

function Header() {
  return (
    <div className="header">
      <div>
        <Link to="/">
          <button className="pennapps-button" type="button">PENNAPPS</button>
        </Link>
      </div>
      <div className="pages-nav">
        <Link to="/hackers">
          {
            window.location.href.endsWith('hackers')
            && <button className="header-bold-button" type="button">HACKERS</button>
          }
          {
            !window.location.href.endsWith('hackers')
            && <button className="header-button" type="button">HACKERS</button>
          }
        </Link>
        <Link to="/organizers">
          {
            window.location.href.endsWith('organizers')
            && <button className="header-bold-button" type="button">ORGANIZERS</button>
          }
          {
            !window.location.href.endsWith('organizers')
            && <button className="header-button" type="button">ORGANIZERS</button>
          }
        </Link>
        <Link to="/ambassadors">
          {
            window.location.href.endsWith('ambassadors')
            && <button className="header-bold-button" type="button">AMBASSADORS</button>
          }
          {
            !window.location.href.endsWith('ambassadors')
            && <button className="header-button" type="button">AMBASSADORS</button>
          }
        </Link>
        <Link to="/moreinfo">
          {
            window.location.href.endsWith('moreinfo')
            && <button className="header-bold-button" type="button">MORE INFO</button>
          }
          {
            !window.location.href.endsWith('moreinfo')
            && <button className="header-button" type="button">MORE INFO</button>
          }
        </Link>
      </div>
    </div>
  )
}
