import Button from '@mui/material/Button'
import Link from 'next/link'
import {Fragment} from 'react'
import BasePopper from './popper'
import BaseMenuList from './menuList'
import ArrowDropDown from '@mui/icons-material/ArrowDropDown'

export default function BaseMenu({
  menus,
  children,
  fontSize = '13.5px',
  color = 'text.primary',
  letterSpacing = 1.2,
  textTransform = 'capitalize',
  customChildrenMenuList = {},
}) {
  const hasChildMenus = (menus) => {
    if (typeof menus === 'object' && Object.keys(menus).length > 0) {
      return true
    } else if (menus === true) {
      return true
    }
    return false
  }
  return (
    <>
      {menus.map(
        (menu) =>
          !menu.hide && (
            <Fragment key={menu.id}>
              {hasChildMenus(menu.children) ? (
                <BasePopper
                  elId={menu.id}
                  title={
                    typeof children === 'object' && children[menu.id] ? (
                      children[menu.id](menu)
                    ) : (
                      <Button
                        component={Link}
                        href={menu.href ? menu.href : ''}
                        sx={{
                          mx: 0.5,
                          letterSpacing: letterSpacing,
                          fontSize: fontSize,
                          color: color,
                          textTransform: textTransform,
                        }}
                      >
                        {menu.title}
                        <ArrowDropDown />
                      </Button>
                    )
                  }
                >
                  {typeof children === 'object' &&
                  typeof children.customDropdown === 'object' &&
                  children.customDropdown[menu.id] ? (
                    children.customDropdown[menu.id](menu.children)
                  ) : (
                    <BaseMenuList
                      menus={
                        customChildrenMenuList[menu.id]
                          ? customChildrenMenuList[menu.id]
                          : menu.children
                      }
                      color={color}
                    />
                  )}
                </BasePopper>
              ) : typeof children === 'object' && children[menu.id] ? (
                children[menu.id](menu)
              ) : (
                <Button
                  component={Link}
                  href={menu.href}
                  sx={{
                    color: color,
                    mx: 0.5,
                    minWidth: 0,
                    letterSpacing: letterSpacing,
                    fontSize: fontSize,
                    textTransform: textTransform,
                  }}
                >
                  {menu.title}
                </Button>
              )}
            </Fragment>
          )
      )}
    </>
  )
}
