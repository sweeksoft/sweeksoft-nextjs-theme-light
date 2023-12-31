import Box from '@mui/material/Box'
import dynamic from 'next/dynamic'

const Image = dynamic(() => import('next/image'))
const Typography = dynamic(() => import('@mui/material/Typography'))
const BaseDivider = dynamic(() => import('./divider'))

export default function BaseSection({
  children,
  title,
  subtitle,
  description,
  image = null,
  roundedImage = false,
  sxTitle = {},
  sxSubtitle = {},
  sxDescription = {},
  sxContainer = {},
  sxDivider = {},
}) {
  return (
    <Box
      component="section"
      sx={{px: {md: '20%', xs: '2%'}, my: {md: 15, xs: 10}, ...sxContainer}}
    >
      {image && (
        <Box
          sx={{
            position: 'relative',
            width: 220,
            height: 220,
            mb: 3,
            mx: 'auto',
            overflow: 'hidden',
            ...(roundedImage ? {borderRadius: '50%'} : null),
          }}
        >
          <Image
            priority={true}
            alt={image.alt}
            src={image.src}
            fill={true}
            sizes="(max-width: 960px) 400px, (max-width: 1200px) 500px, 500px"
            style={{
              objectFit: 'contain',
            }}
          />
        </Box>
      )}
      {title && (
        <Typography
          variant="h4"
          sx={{
            textAlign: 'center',
            pb: '10px',
            wordWrap: 'break-word',
            ...sxTitle,
          }}
        >
          {title}
        </Typography>
      )}

      {subtitle && (
        <Box sx={{textAlign: 'center', ...sxSubtitle}}>{subtitle}</Box>
      )}

      {title ? <BaseDivider sx={sxDivider} /> : null}

      {description && (
        <Box sx={{p: '10px', ...sxDescription}}>{description}</Box>
      )}
      {children}
    </Box>
  )
}
