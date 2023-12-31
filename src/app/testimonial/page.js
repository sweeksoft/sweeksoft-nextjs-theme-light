import BaseSection from '@/components/base/section'
import BaseCard from '@/components/base/card'
import Avatar from '@mui/material/Avatar'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import json from '@/json/pages/testimonial'

export default function Testimonial() {
  return (
    <>
      <BaseSection title={json.sections.testimonial.title}>
        <Grid
          container
          spacing={4}
        >
          {json.sections.testimonial.body.testimonialList.map(
            (testimonial, i) => (
              <Grid
                key={i}
                item
                xs={12}
                md={4}
              >
                <BaseCard sx={{textAlign: 'center'}}>
                  <Avatar
                    alt={testimonial.image.alt}
                    src={testimonial.image.src}
                    sx={{width: 60, height: 60, mb: 2, mx: 'auto'}}
                  />
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    sx={{mb: 2}}
                  >
                    {testimonial.title}
                  </Typography>
                  <Typography variant="caption">
                    {testimonial.description}
                  </Typography>
                </BaseCard>
              </Grid>
            )
          )}
        </Grid>
      </BaseSection>
    </>
  )
}
