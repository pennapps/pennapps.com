import { useEffect } from 'react'
import { navigate } from '@gatsbyjs/reach-router'

const notFound = () => {
  useEffect(() => {
    navigate('/')
  }, [])
}

export default notFound
