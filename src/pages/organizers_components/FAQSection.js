import * as React from 'react'
import { Collapse } from 'react-collapse'
import { useState } from 'react'
import CollapseArrow from './collapse-arrow.png'

export default function FAQSection({ q, a }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`faq-section ${open ? 'open' : 'closed'}`}>
      <div className="faq-question-container" onClick={() => setOpen(!open)}>
        <div className="faq-question-text">{q}</div>
        <img className={`faq-question-icon ${open ? 'open' : 'closed'}`} src={CollapseArrow} />
      </div>
      <Collapse isOpened={open}>
        <div>
          <div>{a}</div>
        </div>
      </Collapse>
    </div>
  )
}
