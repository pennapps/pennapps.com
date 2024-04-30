import * as React from 'react'

import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

import '../styles/home.css'

export function Head() {
  return (
    <>
      <title>PennApps XXV - Coming Soon</title>
      <link rel="stylesheet" href="https://use.typekit.net/tri7gwo.css" />
    </>
  )
}

export default function Index() {
  return (
    <div className="landing">
      <Navbar />
      <div className="content">
        <h1>PennApps XXV</h1>
        <h4>Coming Soon...</h4>
      </div>
      <Footer />
    </div>
  )
}
