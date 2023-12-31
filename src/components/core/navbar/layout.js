'use client'
import AppBar from '@mui/material/AppBar'
import Slide from '@mui/material/Slide'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import Toolbar from '@mui/material/Toolbar'
import {usePathname} from 'next/navigation'
import {useEffect, useState} from 'react'

function HideOnScroll({children, enabled = true}) {
  const trigger = useScrollTrigger()

  if (!enabled) {
    return children
  }

  return (
    <Slide
      appear={false}
      direction="down"
      in={!trigger}
    >
      {children}
    </Slide>
  )
}

export default function Layout({
  children,
  hideOnScroll = true,
  bgcolor = 'background.paper',
  height = {md: '70px', xs: '60px'},
}) {
  const pathName = usePathname()
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <HideOnScroll enabled={hideOnScroll}>
        <AppBar
          component="nav"
          sx={{
            mx: 0,
            px: 0,
            backgroundImage: 'none',
            bgcolor: hideOnScroll && scrollY < 100 ? 'transparent' : bgcolor,
            height,
            ...(hideOnScroll && scrollY < 100
              ? {
                  boxShadow: 'none !important',
                }
              : {boxShadow: '0px 2px 5px 0px rgba(0,0,0,0.25) !important'}),
          }}
        >
          {children}
        </AppBar>
      </HideOnScroll>
      {pathName === '/' || <Toolbar />}
    </>
  )
}
