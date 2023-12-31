'use client'
import {useState, useEffect} from 'react'
import {ThemeProvider} from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import NextAppDirEmotionCacheProvider from './EmotionCache'
import theme from './Theme'
import {useTheme} from 'next-themes'

export default function ThemeRegistry({children}) {
  const {resolvedTheme} = useTheme()

  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <NextAppDirEmotionCacheProvider options={{key: 'mui'}}>
      <ThemeProvider theme={theme(resolvedTheme)}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  )
}
