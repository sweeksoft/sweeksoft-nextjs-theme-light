'use client'
import Grow from '@mui/material/Grow'
import Paper from '@mui/material/Paper'
import Popper from '@mui/material/Popper'
import Box from '@mui/material/Box'
import {memo, useRef, useState} from 'react'
import {useMediaQuery} from '@mui/material'

export default memo(function BasePopper(props) {
  const [open, setOpen] = useState({})
  const refs = useRef([])
  const isMediumScreenDown = useMediaQuery('(max-width:960px)')

  const handleOpen = (id) => {
    setOpen({[id]: true})
  }

  const handleClose = (id) => {
    setOpen({[id]: false})
  }

  return (
    <Box
      {...(!isMediumScreenDown
        ? {
            onMouseEnter: () => handleOpen(props.elId),
            onMouseLeave: () => handleClose(props.elId),
          }
        : {
            ...(!open[props.elId]
              ? {onClick: () => handleOpen(props.elId)}
              : {
                  onClick: () =>
                    !props.keepOpen ? handleClose(props.elId) : null,
                  onMouseLeave: () => handleClose(props.elId),
                }),
          })}
    >
      <Box ref={(el) => (refs.current[props.elId] = el)}>{props.title}</Box>
      <Popper
        sx={{
          zIndex: 100,
        }}
        open={open[props.elId] ? open[props.elId] : false}
        anchorEl={refs.current[props.elId]}
        role={undefined}
        transition
        disablePortal
      >
        {({TransitionProps, placement}) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper
              onClick={() => (!props.keepOpen ? handleClose(props.elId) : null)}
            >
              {props.children}
            </Paper>
          </Grow>
        )}
      </Popper>
    </Box>
  )
})
