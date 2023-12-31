'use client'
import dynamic from 'next/dynamic'

const Link = dynamic(() => import('next/link'))
const BaseSection = dynamic(() => import('@/components/base/section'))
const Typography = dynamic(() => import('@mui/material/Typography'))
const Button = dynamic(() => import('@mui/material/Button'))

export default function NotFound() {
  return (
    <BaseSection sxContainer={{m: 'auto', textAlign: 'center', height: '50%'}}>
      <Typography
        variant="h1"
        fontWeight="bold"
      >
        404
      </Typography>
      <Typography
        variant="h6"
        fontWeight="bold"
        sx={{mb: 3}}
      >
        Oops, page not found!
      </Typography>
      <Link href="/">
        <Button
          disableElevation
          variant="contained"
          sx={{borderRadius: 10}}
        >
          Return Home
        </Button>
      </Link>
    </BaseSection>
  )
}
