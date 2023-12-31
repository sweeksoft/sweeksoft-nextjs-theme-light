'use client'
import DarkMode from '@mui/icons-material/DarkMode'
import LightMode from '@mui/icons-material/LightMode'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import json from '@/json/navbar'
import {useTheme} from 'next-themes'
import {memo} from 'react'

export default memo(function ToolMenus() {
  const {resolvedTheme, setTheme} = useTheme()
  const toggleMode = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Box
      sx={{
        display: 'flex',
        width: {xs: '100%', md: 'auto'},
      }}
    >
      <Box sx={{display: 'flex', ml: 'auto'}}>
        {/* Mode menu start */}
        <IconButton
          aria-label="Mode"
          onClick={toggleMode}
          sx={{color: 'text.primary', px: {xs: '5px', md: '8px'}, mr: 1}}
        >
          {resolvedTheme === 'dark' ? (
            <LightMode fontSize="small" />
          ) : (
            <DarkMode fontSize="small" />
          )}
        </IconButton>
        {/* Mode menu end */}

        {/* Contact menu start */}
        <Button
          size="small"
          disableElevation
          variant="contained"
          sx={{
            borderRadius: 10,
            textTransform: 'none',
            letterSpacing: 1.5,
            px: 2,
          }}
          href={json.contact.href}
        >
          {json.contact.title}
        </Button>
        {/* Contact menu end */}
      </Box>
    </Box>
  )
})
