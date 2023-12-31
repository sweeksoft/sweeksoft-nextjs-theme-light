'use client'
import useMediaQuery from '@mui/material/useMediaQuery'
import ToolMenus from './toolMenus'
import dynamic from 'next/dynamic'
import {memo} from 'react'

const MainMenus = dynamic(() => import('./mainMenus'))
const MobileMenus = dynamic(() => import('./mobileMenus'))

export default memo(function Menus() {
  const isMediumScreenDown = useMediaQuery('(max-width:960px)')

  return (
    <>
      {!isMediumScreenDown && <MainMenus />}
      <ToolMenus />
      {isMediumScreenDown && <MobileMenus />}
    </>
  )
})
