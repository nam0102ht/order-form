import React, { useCallback, useEffect, useRef, useState } from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import KeyboardArrowUpOutlinedIcon from '@material-ui/icons/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined';
import { Link } from '@material-ui/core';
import styled from 'styled-components';


const LinkCustom = styled(Link)`
  color: white !important;
  text-decoration: none !important;
`

export default function CollapseMenu({...props}) {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
      };
    
      const handleClose = useCallback((event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
          return;
        }
    
        setOpen(false);
      })
      
      const handleListKeyDown = useCallback((event) => {
        if (event.key === 'Tab') {
          event.preventDefault();
          setOpen(false);
        }
      })
    
      // return focus to the button when we transitioned from !open -> open
      const prevOpen = useRef(open)
      useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
          }
      
          prevOpen.current = open;
      },[open])

    return <div 
      ref={anchorRef} 
      className="collapse" 
      onMouseOver={handleToggle}
      aria-controls={open ? 'menu-list-grow' : undefined}
      aria-haspopup="true"
    >
        <LinkCustom
          className="navItem"
          onMouseOver={handleToggle}
        >
          {props.content}
        </LinkCustom>
    { !open ? <KeyboardArrowDownOutlinedIcon /> : <KeyboardArrowUpOutlinedIcon /> }
      <Popper
        open={open} 
        anchorEl={anchorRef.current} 
        role={undefined} 
        transition 
        disablePortal
      >
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
        >
          <Paper>
            <ClickAwayListener onClickAway={handleClose}>
              <MenuList autoFocusItem={open} 
                id={"menu-list-grow-"+props.name} 
                onKeyDown={handleListKeyDown} 
                className="menuCollapse"
                onMouseOver={handleToggle}
                onMouseLeave={handleClose}
              >
                <MenuItem onClick={handleClose}>Collection 2020</MenuItem>
                <MenuItem onClick={handleClose}>Collection 2019</MenuItem>
                <MenuItem onClick={handleClose}>Sale</MenuItem>
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
      </Popper>
    <style jsx>{
      `
      .collapse {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 10%;
      }
      .collapse:hover {
        border-bottom: 3px #888 solid;
      }
      .navItem {
        width: 100%;
        color: #000;
        text-decoration: none;
      }
      .menuCollapse {
        border-radius: unset;
      }
      `
    }
    </style>
  </div>
}