'use client';

import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Avatar, Stack } from '@mui/material';

import { ROUTES } from '@/constant/constant';

import NavLink from '../NavLink/NavLink';

import UserDropDown from './components/UserDropDown';

import variables from '../../styles/variables.module.scss';
import styles from './Header.module.scss';

const MENU_LIST = [
  { href: ROUTES.HOME_URL, text: 'Home' },
  { href: ROUTES.PRODUCTS_URL, text: 'Products' },
  { href: ROUTES.BLOG_URL, text: 'Blog' },
  { href: ROUTES.ORDER_URL, text: 'Order' },
];

export default function Header() {
  return (
    <nav className={styles.navigation}>
      <Stack alignItems='center' direction='row' justifyContent='space-between'>
        <Stack alignItems='center' direction='row' spacing={1}>
          <h1 className='logo'>BookStorage</h1>
          {MENU_LIST.map((link) => (
            <NavLink key={link.text} color={variables.mainColor} href={link.href}>
              {link.text}
            </NavLink>
          ))}
        </Stack>
        <Stack alignItems='center' direction='row' spacing={1}>
          <Avatar className={styles['avatarIcon']}>
            <NavLink key='basket' color={variables.mainColor} href={ROUTES.BASKET_URL}>
              <ShoppingBasketIcon />
            </NavLink>
          </Avatar>
          <UserDropDown />
        </Stack>
      </Stack>
    </nav>
  );
}
