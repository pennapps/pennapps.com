import React, { useState } from 'react'
import { Link } from 'gatsby'
import { useSpring, animated } from 'react-spring'
import chevronImage from '../images/arrow-east.png'
import iterationLogo from '../images/cloud_square_logo 1.png'
import './hackers.css'

export default function Hackers() {
  return (
    <div>
      <div className="page-header">
        <Header />
      </div>
      <div className="hackers-page">
        <div className="apply-logo-rect">
          <div className="apply-box">
            <h1 className="apply-header-text">Apply to PennApps XXIII!</h1>
            <p>Applications are now open</p>
            <div>
              <Link to="/dashboard">
                <button className="apply-button" type="button">APPLY</button>
              </Link>
              <Link to="/dashboard">
                <button className="apply-button" type="button">EVENT SITE</button>
              </Link>
            </div>
          </div>
          <div>
            <img className="iteration-logo" src={iterationLogo} alt="Iteration Logo" />
          </div>
        </div>
        <h1 className="faq-text">FAQ</h1>
        <div><QuestionCard questionHead="Why PennApps?" questionBody="PennApps is the oldest and one of the largest hackathons hosted by college students. Attending PennApps means a valuable experience in software development through developing your project and attending workshops. More importantly, this is a place where hundreds of passionate hackers get together to learn, connect, and inspire each other." /></div>
        <div><QuestionCard questionHead="Question" questionBody="Answer" /></div>
        <div><QuestionCard questionHead="Question" questionBody="Answer" /></div>
        <div><QuestionCard questionHead="Question" questionBody="Answer" /></div>
        <div><QuestionCard questionHead="Question" questionBody="Answer" /></div>
        <div><QuestionCard questionHead="Question" questionBody="Answer" /></div>
        <div><QuestionCard questionHead="Question" questionBody="Answer" /></div>
        <hr className="topHR" />
      </div>
    </div>
  )
}

function QuestionCard({ questionHead, questionBody }) {
  const [isOpen, setOpen] = useState(false)

  return (
    <div>
      <hr className="topHR" />
      <div className="card-header">
        <h1 className="question-text">{questionHead}</h1>
        <RotatingChevron isOpen={isOpen} setOpen={setOpen} />
      </div>
      <div>
        {isOpen && (<SlidingText isOpen={isOpen} setOpen={setOpen} text={questionBody} />)}
      </div>
    </div>
  )
}

function RotatingChevron({ isOpen, setOpen }) {
  const [rotateChevron, setRotateChevron] = useState(false)

  const handleRotate = () => {
    setRotateChevron(!rotateChevron)
    setOpen(!isOpen)
  }

  const rotate = rotateChevron ? 'rotate(90deg)' : 'rotate(0)'

  return (
    <input
      className="chevron"
      type="image"
      style={{ transform: rotate, transition: 'all 0.05s linear' }}
      src={chevronImage}
      alt="Click"
      onClick={handleRotate}
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
