import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import Link from 'next/link'
import BaseDivider from '@/components/base/divider'
import {getIdentityIcon, getSocialIcon} from '@/utils/global'
import json from '@/json/global'
import jsonFooter from '@/json/footer'
import Image from 'next/image'
import Logo from './navbar/logo'

export default function CoreFooter(props) {
  return (
    <Box
      sx={{bgcolor: 'background.paper', p: 6}}
      component="footer"
    >
      <Box sx={{width: {xs: '90%', md: '70%'}, mx: 'auto', mb: 2}}>
        <Grid
          container
          spacing={2}
          sx={{minHeight: 200, textAlign: {xs: 'center', md: 'left'}}}
          justifyContent="space-around"
        >
          <Grid
            item
            xs={12}
            md={3}
            sx={{px: {md: 5}, textAlign: 'center'}}
          >
            <>
              <Box sx={{display: 'block'}}>
                <Logo />
              </Box>

              <Typography variant="caption">
                {json.siteIdentity.description}
              </Typography>
            </>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
            sx={{px: {md: 3}}}
          >
            <>
              <Typography fontWeight="bold">
                {jsonFooter.usefulLinks.title}
              </Typography>
              <BaseDivider
                sx={{
                  mb: '15px',
                  mx: {xs: 'auto', md: 0},
                }}
              />
              {jsonFooter.usefulLinks.links.map((link, i) => (
                <Link
                  key={i}
                  href={link.url}
                  style={{textDecoration: 'none'}}
                >
                  <Typography
                    color="primary"
                    sx={{mb: 1}}
                  >
                    {link.title}
                  </Typography>
                </Link>
              ))}
            </>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
            sx={{px: {md: 3}}}
          >
            <>
              <Typography fontWeight="bold">
                {jsonFooter.usefulLinks2.title}
              </Typography>
              <BaseDivider
                sx={{
                  mb: '15px',
                  mx: {xs: 'auto', md: 0},
                }}
              />
              {jsonFooter.usefulLinks2.links.map((link, i) => (
                <Link
                  key={i}
                  href={link.url}
                  style={{textDecoration: 'none'}}
                >
                  <Typography
                    color="primary"
                    sx={{mb: 1}}
                  >
                    {link.title}
                  </Typography>
                </Link>
              ))}
            </>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
            sx={{px: {md: 3}}}
          >
            <>
              <Typography fontWeight="bold">
                {jsonFooter.getInTouch.title}
              </Typography>
              <BaseDivider
                sx={{
                  mb: '15px',
                  mx: {xs: 'auto', md: 0},
                }}
              />
              {json.contacts.map((identy, i) => (
                <Box
                  key={i}
                  sx={{display: 'flex'}}
                >
                  <span>{getIdentityIcon(identy.icon)}</span>
                  <Typography sx={{ml: 1, mb: 1, textAlign: 'start'}}>
                    {identy.title}
                  </Typography>
                </Box>
              ))}

              {json.socialLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.link}
                  target="_blank"
                  aria-label={link.icon}
                >
                  {getSocialIcon(link.icon, {color: link.color, m: 0.5})}
                </a>
              ))}
            </>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          height: 4,
          textAlign: 'center',
        }}
      >
        <Divider sx={{mb: 1.5}} />
        <Typography
          variant="subtitle2"
          component="span"
        >
          &copy; {jsonFooter.copyright.description}{' '}
        </Typography>
        <Typography
          variant="subtitle2"
          color="primary"
          component={Link}
          href={jsonFooter.copyright.url}
        >
          {jsonFooter.copyright.name}
        </Typography>
      </Box>
    </Box>
  )
}
