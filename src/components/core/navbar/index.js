import Toolbar from '@mui/material/Toolbar'
import Layout from './layout'
import Menus from './menus'
import Logo from './logo'

export default function CoreNavbar({toolbarWidth = '70%'}) {
  return (
    <Layout>
      <Toolbar sx={{m: 'auto', width: {xs: '100%', md: toolbarWidth}}}>
        <Logo />

        <Menus />
      </Toolbar>
    </Layout>
  )
}
