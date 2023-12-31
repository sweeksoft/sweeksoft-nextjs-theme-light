'use client'
import dynamic from 'next/dynamic'
import {useEffect, useState} from 'react'

const LinearProgress = dynamic(() => import('@mui/material/LinearProgress'))

export default function Loading() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      // setProgress((oldProgress) => (oldProgress >= 100 ? 0 : oldProgress + 10))
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0
        }
        const diff = Math.random() * 10
        return Math.min(oldProgress + diff, 100)
      })
    }, 600)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <LinearProgress
      variant="determinate"
      value={progress}
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 9999,
        color: 'primary',
        height: '1.5px',
      }}
    />
  )
}
