import BaseSection from '@/components/base/section'
import BaseCard from '@/components/base/card'
import Avatar from '@mui/material/Avatar'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import json from '@/json/pages/services'

export default function Services() {
  return (
    <>
      <BaseSection title={json.sections.services.title}>
        <Grid
          container
          spacing={4}
        >
          {json.sections.services.body.servicesList.map((service, i) => (
            <Grid
              key={i}
              item
              xs={12}
              md={4}
            >
              <BaseCard sx={{textAlign: 'center'}}>
                <Avatar
                  alt={service.image.alt}
                  src={service.image.src}
                  sx={{width: 60, height: 60, mb: 2, mx: 'auto'}}
                />
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  sx={{mb: 2}}
                >
                  {service.title}
                </Typography>
                <Typography variant="caption">{service.description}</Typography>
              </BaseCard>
            </Grid>
          ))}
        </Grid>
      </BaseSection>
    </>
  )
}
