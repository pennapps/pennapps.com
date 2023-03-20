import React, { useEffect } from 'react'
import { navigate } from 'gatsby'
import Home, { Head as PageHead } from './index'

export const Head = PageHead

export default function Index() {
  useEffect(() => {
    navigate('/')
  }, [])

  return (
    <Home />
  )
}
