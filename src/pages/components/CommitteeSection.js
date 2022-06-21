import * as React from 'react'

export default function CommitteeSection({ name, descrip }) {
  return (
    <div className="committee-section">
      <h5>{name}</h5>
      <div>{descrip}</div>
    </div>
  )
}
