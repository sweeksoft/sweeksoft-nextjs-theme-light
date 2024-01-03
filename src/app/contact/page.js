import BaseSection from '@/components/base/section'
import BaseCard from '@/components/base/card'
import ContactForm from './contactForm'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import {getIdentityIcon, getSocialIcon} from '@/utils/global'
import json from '@/json/global'
import jsonContact from '@/json/pages/contact'

export default function Contact() {
  return (
    <>
      <BaseSection title={jsonContact.sections.contact.title}>
        <BaseCard>
          <Grid
            container
            spacing={2}
          >
            <Grid
              item
              xs={12}
              md={7}
            >
              <ContactForm
                fields={jsonContact.sections.contact.body.contactForm.fields}
                submitBtnTitle={
                  jsonContact.sections.contact.body.contactForm.submitBtnTitle
                }
              />
            </Grid>
            <Grid
              item
              md={1}
              sx={{display: {xs: 'none', md: 'flex'}}}
            >
              <Divider
                orientation="vertical"
                sx={{m: 5}}
              />
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              alignSelf="center"
              sx={{textAlign: 'center'}}
            >
              <>
                {json.contacts.map((identy, i) => (
                  <Box
                    key={i}
                    sx={{display: 'flex', m: 2}}
                  >
                    <span>{getIdentityIcon(identy.icon)}</span>
                    <Typography sx={{ml: 1, textAlign: 'start'}}>
                      {identy.title}
                    </Typography>
                  </Box>
                ))}

                {json.socialLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.link}
                    target="_blank"
                  >
                    {getSocialIcon(link.icon, {color: link.color, m: 0.5})}
                  </a>
                ))}
              </>
            </Grid>
          </Grid>
        </BaseCard>
      </BaseSection>
      <BaseSection
        title={jsonContact.sections.gmaps.title}
        sxContainer={{px: 0}}
      >
        <iframe
          src={jsonContact.sections.gmaps.body.iframeSrc}
          width="100%"
          height="450"
          style={{border: 0}}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </BaseSection>
    </>
  )
}
