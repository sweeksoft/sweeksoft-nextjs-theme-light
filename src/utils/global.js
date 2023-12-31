export async function getSocialIcon(name, sx = {}) {
  let IconComponent
  switch (name) {
    case 'LinkedIn':
      IconComponent = (await import('@mui/icons-material/LinkedIn')).default
      break
    case 'GitHub':
      IconComponent = (await import('@mui/icons-material/GitHub')).default
      break
    case 'Facebook':
      IconComponent = (await import('@mui/icons-material/Facebook')).default
      break
    case 'Twitter':
      IconComponent = (await import('@mui/icons-material/Twitter')).default
      break
    case 'Instagram':
      IconComponent = (await import('@mui/icons-material/Instagram')).default
      break
    case 'YouTube':
      IconComponent = (await import('@mui/icons-material/YouTube')).default
      break
    default:
      return null
  }

  return <IconComponent sx={{...sx}} />
}

export async function getIdentityIcon(name, sx = {}) {
  let IconComponent
  switch (name) {
    case 'Place':
      IconComponent = (await import('@mui/icons-material/Place')).default
      break
    case 'Email':
      IconComponent = (await import('@mui/icons-material/Email')).default
      break
    case 'Phone':
      IconComponent = (await import('@mui/icons-material/Phone')).default
      break
    default:
      return null
  }

  return <IconComponent sx={{...sx}} />
}
