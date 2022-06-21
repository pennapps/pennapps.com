import { useEffect } from 'react'
import { navigate } from '@gatsbyjs/reach-router'

export default () => {
  useEffect(() => {
    navigate('/')
  }, [])
}
