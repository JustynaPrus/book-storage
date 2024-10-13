'use client';

import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Avatar, Stack } from '@mui/material';

import NavLink from '../NavLink/NavLink';

import UserDropDown from './components/UserDropDown';

import styles from './Header.module.scss';

const MENU_LIST = [
  { href: '/', text: 'Home' },
  { href: '/products', text: 'Products' },
  { href: '/blog', text: 'Blog' },
  { href: '/order', text: 'Order' },
];

export default function Header() {
  return (
    <nav className={styles.navigation}>
      <Stack alignItems='center' direction='row' justifyContent='space-between'>
        <Stack alignItems='center' direction='row' spacing={1}>
          <h1>BookStorage</h1>
          {MENU_LIST.map((link) => (
            <NavLink key={link.text} color='black' href={link.href}>
              {link.text}
            </NavLink>
          ))}
        </Stack>
        <Stack alignItems='center' direction='row' spacing={1}>
          <Avatar className={styles['avatarIcon']}>
            <NavLink key='basket' color='white' href='/basket'>
              <ShoppingBasketIcon />
            </NavLink>
          </Avatar>
          <UserDropDown />
        </Stack>
      </Stack>
    </nav>
  );
}
