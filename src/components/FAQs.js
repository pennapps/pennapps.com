import * as React from 'react'
import FAQSection from './FAQSection'

export default function FAQs(props) {
  const { content } = props
  return (
    <>
      <h3>FAQs</h3>
      {Object.keys(content).map((key, index) => (
        <FAQSection
          q={key}
          a={content[key]}
        />
      ))}
    </>
  )
}
