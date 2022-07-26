import * as React from 'react'
import { Collapse } from 'react-collapse'
import { useState } from 'react'
import CollapseArrow from '../images/collapse-arrow.png'

export default function FAQSection({ q, a }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className={`faq-section ${open ? 'open' : 'closed'}`}
      onClick={() => setOpen(!open)}
      onKeyPress={() => setOpen(!open)}
    >
      <div className="faq-question-container">
        <div className="faq-question-text">{q}</div>
      </div>
      <img className={`faq-question-icon ${open ? 'open' : 'closed'}`} src={CollapseArrow} alt="arrow" />
      <Collapse isOpened={open}>
        <div>
          <div>{a}</div>
        </div>
      </Collapse>
    </div>
  )
}
