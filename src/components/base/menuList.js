import MenuList from '@mui/material/MenuList'
import MenuItem from '@mui/material/MenuItem'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box'
import Link from 'next/link'

export default function BaseMenuList({
  id = 'menu-list',
  menus = [],
  listDivider = true,
  color = 'text.primary',
}) {
  return (
    <MenuList
      id={id}
      sx={{
        p: 1,
        bgcolor: 'background.paper',
        borderRadius: 2,
      }}
    >
      {menus.map((menu, index) => (
        <Box
          key={menu.id ? menu.id : index}
          sx={{maxWidth: {md: 500}, overflow: 'hidden'}}
        >
          <MenuItem
            component={Link}
            href={menu.href ? menu.href : ''}
            sx={{
              p: 1,
              color: color,
              borderRadius: 2,
            }}
          >
            {menu.image && menu.image.src && (
              <Avatar
                alt={menu.image.alt ? menu.image.alt : menu.title}
                src={menu.image.src}
                sx={{
                  height: '50px',
                  width: '50px',
                  mr: 2,
                  borderRadius: 1,
                }}
              />
            )}
            <Box>
              <Typography
                variant="subtitle1"
                fontWeight="bold"
              >
                {menu.title}
              </Typography>
              {menu.description && (
                <Typography variant="caption">{menu.description}</Typography>
              )}
            </Box>
          </MenuItem>
          {listDivider && index + 1 < menus.length ? <Divider /> : null}
        </Box>
      ))}
    </MenuList>
  )
}
