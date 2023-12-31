'use client'
import Box from '@mui/material/Box'
import pageStyle from './page.module.css'
import {useTheme} from 'next-themes'

export default function HeroLayout({children}) {
  const {resolvedTheme} = useTheme()
  return (
    <Box
      className={
        resolvedTheme === 'dark'
          ? pageStyle.gradientBackground
          : pageStyle.gradientBackgroundLight
      }
      sx={{
        marginBottom: '5%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {children}
    </Box>
  )
}
