import React, { useState } from 'react'
import { Link } from 'gatsby'
import { useSpring, animated } from 'react-spring'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FAQs from '../components/FAQs'
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

export function Head() {
  return (
    <>
      <title>Hackers - PennApps</title>
      <link rel="stylesheet" href="https://use.typekit.net/tri7gwo.css" />
    </>
  )
}

export default function Hackers() {
  return (
    <div className="bg-hacks text-hackp min-h-full m-0 p-0 box-border border-b-hackp">
      <Navbar currPage="HACKERS" />
      <div className="justify-evenly h-2/6 w-1/2 flex items-center flex-row-reverse m-auto leading-6 mt-[6%]">
        <div>
          <img className="w-[30wv] h-auto flex flex-col align-middle" src={iterationLogo} alt="Iteration Logo" />
        </div>
        <div className="my-[20px] mr-[100px] text-large max-w-[40vw]">
          <h1 className="font-hackers font-semibold text-5xl leading-[55px] me-[35px]">Apply to PennAppsXXIII!</h1>
          <div className="me-[35px]">Applications are now open</div>
          <div className="buttons-container">
            <a href="http://apply.pennapps.com/">
              <button className="inline-block w-[103px] h-[41px] p-[6px] mr-[0.75em] mb-[0.1em] border-2 border-hackp text-hacks text-center transition-all duration-200 font-semibold rounded-[20px] font-proximaNova bg-hackp hover:bg-transparent hover:border hover:text-hackp hover:cursor-pointer" type="button">APPLY</button>
            </a>
            <a href="https://2022f.pennapps.com/">
              <button className="inline-block w-[137px] h-[41px] p-[6px] mr-[0.75em] mb-[0.1em] border-2 border-hackp text-hacks text-center transition-all duration-200 font-semibold rounded-[20px] font-proximaNova bg-hackp hover:bg-transparent hover:border hover:text-hackp hover:cursor-pointer" type="button">EVENT SITE</button>
            </a>
          </div>
        </div>
      </div>
      <div className="block m-auto pb-[9vh] w-[55vw]">
        <FAQs content={content} />
      </div>
      <Footer />
    </div>
  )
}
