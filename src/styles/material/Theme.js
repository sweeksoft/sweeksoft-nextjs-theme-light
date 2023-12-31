import {createTheme} from '@mui/material/styles'
import json from '@/json/styles'
import {Roboto} from 'next/font/google'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const theme = (mode) =>
  createTheme({
    palette: {
      mode: mode,
      ...(mode === 'light' ? json.colors.light : json.colors.dark),
    },
    typography: {
      fontFamily: roboto.style.fontFamily,
      ...json.typography,
    },
  })

export default theme
