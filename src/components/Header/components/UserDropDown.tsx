import { Dropdown, Menu, MenuButton, MenuItem } from '@mui/base';
import PersonIcon from '@mui/icons-material/Person';
import { Avatar } from '@mui/material';

import NavLink from '../../NavLink/NavLink';

import styles from './UserDropDown.module.scss';

export default function UserDropDown() {
  return (
    <Dropdown>
      <MenuButton className={styles['button']}>
        <Avatar className={styles['avatarIcon']}>
          <PersonIcon />
        </Avatar>
      </MenuButton>
      <Menu className={styles['menu']} slots={{ listbox: 'ol' }}>
        <MenuItem className={styles['menuItem']}>
          <NavLink key='profile' color='black' href='/profile'>
            Profil
          </NavLink>
        </MenuItem>
        <ul className={styles['menuItem']}>Log in</ul>
      </Menu>
    </Dropdown>
  );
}
