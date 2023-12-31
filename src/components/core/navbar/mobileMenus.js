'use client'
import json from '@/json/navbar'
import BasePopper from '@/components/base/popper'
import BaseMenuList from '@/components/base/menuList'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import {memo} from 'react'

export default memo(function MobileMenus() {
  return (
    <BasePopper
      elId="mobileMenus"
      title={
        <IconButton
          sx={{
            color: 'text.primary',
            fontSize: 'small',
            p: {xs: '5px', md: '8px'},
          }}
        >
          <MenuIcon />
        </IconButton>
      }
    >
      <BaseMenuList
        menus={json.mainMenus}
        color="text.primary"
      />
    </BasePopper>
  )
})
