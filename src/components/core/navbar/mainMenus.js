'use client'
import BaseMenu from '@/components/base/menu'
import Box from '@mui/material/Box'
import json from '@/json/navbar'
import {memo} from 'react'

export default memo(function MainMenus({position = 'center'}) {
  return (
    <Box
      sx={{
        display: {xs: 'none', md: 'flex'},
        width: '100%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          ...(position === 'center' ? {mx: 'auto'} : {ml: 'auto'}),
        }}
      >
        <BaseMenu menus={json.mainMenus} />
      </Box>
    </Box>
  )
})
