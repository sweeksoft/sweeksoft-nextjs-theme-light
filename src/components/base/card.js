import Card from '@mui/material/Card'

export default function BaseCard({children, sx = {}}) {
  return (
    <Card
      sx={{
        m: 'auto',
        p: '2em',
        borderRadius: 5,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundImage: 'unset !important',
        ...sx,
      }}
    >
      {children}
    </Card>
  )
}
