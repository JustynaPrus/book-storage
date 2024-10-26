import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import { Avatar, Button, Menu, MenuItem } from '@mui/material';

import { ROUTES } from '@/constant/constant';

import NavLink from '../../NavLink/NavLink';

import variables from '../../../styles/variables.module.scss';
import styles from './UserDropDown.module.scss';

export default function UserDropDown() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleIsOpen = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button onClick={handleClick}>
        <Avatar className={styles['avatarIcon']}>
          <PersonIcon />
        </Avatar>
      </Button>
      <Menu
        anchorEl={anchorEl}
        className={styles['menu']}
        open={open}
        anchorOrigin={{
          horizontal: 'right',
          vertical: 'bottom',
        }}
        transformOrigin={{
          horizontal: 'center',
          vertical: 'top',
        }}
        onClose={handleIsOpen}
      >
        <MenuItem className={styles['menuItem']}>
          <NavLink key='profile' color={variables.mainColor} href={ROUTES.PROFILE_URL}>
            Profil
          </NavLink>
        </MenuItem>
        <ul className={styles['menuItem']}>Log in</ul>
      </Menu>
    </>
  );
}
