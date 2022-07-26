import * as React from 'react'
import FAQSection from './FAQSection'

export default function ApplicationsFAQs() {
  const questions = {
    'Who can be an organizer for PennApps?':
            'Only Penn students can be organizers. If you’re a current Penn student, look out for an application in April if you are interested in joining us!',
    'Do I need previous experience to be an organizer?':
            'No previous experience required! We are looking for people who are passionate about creating an exciting and inclusive space to meet others and learn about tech and entrepreneurship and are able to commit to the time to be an organizer.',
    'What is the time commitment?':
            'Expect to commit 2 - 4 hours per week to PennApps meetings and tasks.',

  }
  return (
    <div className="applications-faqs">
      <h3 className="applications-faqs-h3">FAQs</h3>
      {Object.keys(questions).map((key, index) => (
        <FAQSection
          q={key}
          a={questions[key]}
        />
      ))}
    </div>
  )
}
