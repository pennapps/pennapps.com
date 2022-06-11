import React, { useState } from 'react'
import { Link } from 'gatsby'
import { useSpring, animated } from 'react-spring'
import chevronImage from '../images/arrow-east.png'
import './hackers.css'

export default function Hackers() {
  return (
    <div className="hackers-page">
      <div className="apply-box">
        <h1 className="apply-header-text">Apply to PennApps XXIII!</h1>
        <p>Applications are now open</p>
        <div>
          <Link to="/dashboard">
            <button type="button">Apply</button>
          </Link>
          <Link to="/dashboard">
            <button type="button">Event Site</button>
          </Link>
        </div>
      </div>
      <h1 className="faq-text">FAQ</h1>
      <div><QuestionCard questionHead="Question" questionBody="Answer" /></div>
      <div><QuestionCard questionHead="Question" questionBody="Answer" /></div>
      <div><QuestionCard questionHead="Question" questionBody="Answer" /></div>
      <div><QuestionCard questionHead="Question" questionBody="Answer" /></div>
      <div><QuestionCard questionHead="Question" questionBody="Answer" /></div>
      <div><QuestionCard questionHead="Question" questionBody="Answer" /></div>
      <div><QuestionCard questionHead="Question" questionBody="Answer" /></div>
      <hr className="topHR" />
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
