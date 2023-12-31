'use client'

import json from '@/json/global'
import Image from 'next/image'
import Link from 'next/link'
import Box from '@mui/material/Box'
import {useTheme} from 'next-themes'

export default function Logo() {
  const {resolvedTheme} = useTheme()
  return (
    <Box
      component={Link}
      href={json.siteIdentity.logo.href}
    >
      <Image
        priority={true}
        alt={json.siteIdentity.logo.alt}
        src={
          resolvedTheme === 'dark'
            ? json.siteIdentity.logo.url.light
            : json.siteIdentity.logo.url.dark
        }
        width={120}
        height={30}
        quality={50}
        style={{
          objectFit: 'contain',
        }}
      />
    </Box>
  )
}
