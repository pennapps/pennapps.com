import React from 'react'
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram'
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter'
import { FaFacebook } from '@react-icons/all-files/fa/FaFacebook'
import '../styles/footer.css'

const footer = () => (
  <div className="footer">
    <a className="email" href="mailto:contact@pennapps.com">contact@pennapps.com</a>
    <a className="icon" href="https://www.facebook.com/pennapps/" target="_blank" rel="noreferrer" aria-label="facebook"><FaFacebook /></a>
    <a className="icon" href="https://twitter.com/pennapps?lang=en" target="_blank" rel="noreferrer" aria-label="twitter"><FaTwitter /></a>
    <a className="icon" href="https://www.instagram.com/pennapps/?hl=en" target="_blank" rel="noreferrer" aria-label="instagram"><FaInstagram /></a>
  </div>
)

export default footer
