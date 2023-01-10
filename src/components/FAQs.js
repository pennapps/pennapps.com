import * as React from 'react'
import FAQSection from './FAQSection'

export default function FAQs(props) {
  const { content } = props
  return (
    <>
      <h3 className="font-hackers my-5 text-hackp text-2xl">FAQs</h3>
      {Object.keys(content).map((key, index) => (
        <FAQSection
          q={key}
          a={content[key]}
        />
      ))}
    </>
  )
}
