import BaseSection from '@/components/base/section'
import Box from '@mui/material/Box'
import json from '@/json/pages/home'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Link from 'next/link'
import HeroLayout from './heroLayout'

export default function Home() {
  return (
    <>
      <HeroLayout>
        <Box
          sx={{
            maxWidth: {
              md: '50%',
              xs: '80%',
              textAlign: 'center',
            },
          }}
        >
          <Typography
            sx={{
              textTransform: 'capitalize',
              pb: 2,
              wordWrap: 'break-word',
              letterSpacing: 2,
            }}
          >
            {json.sections.hero.shortSlogan}
          </Typography>
          <Typography
            fontWeight="bold"
            fontFamily={
              "'GT Walsheim Framer Medium', 'GT Walsheim Framer Medium Placeholder', sans-serif"
            }
            sx={{
              textTransform: 'uppercase',
              pb: 4,
              wordWrap: 'break-word',
              fontSize: {xs: 40, lg: 100},
            }}
          >
            {json.sections.hero.slogan}
          </Typography>

          <Button
            component={Link}
            href={json.sections.hero.actionBtn.url}
            variant="outlined"
            disableElevation
            sx={{borderRadius: 50}}
          >
            {json.sections.hero.actionBtn.title}
          </Button>
        </Box>
      </HeroLayout>

      <BaseSection
        title={json.sections.demo.title}
        subtitle={json.sections.demo.subTitle}
        description={json.sections.demo.description}
        image={{
          src: json.sections.demo.image.src,
          alt: json.sections.demo.image.alt,
        }}
      />
    </>
  )
}
