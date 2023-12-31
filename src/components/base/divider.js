import Divider from '@mui/material/Divider'

export default function BaseDivider({sx = {}}) {
  return (
    <Divider
      sx={{
        background: 'primary',
        width: '30px',
        mt: '10px',
        mb: '30px',
        mx: 'auto',
        border: 2,
        borderColor: 'primary.main',
        ...sx,
      }}
    />
  )
}
