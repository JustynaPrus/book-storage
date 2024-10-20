'use client';
import { ReactElement } from 'react';
import Link from '@mui/material/Link';

import styles from './NavLink.module.scss';

type NavItemProps = {
  children?: string | ReactElement;
  color: string;
  href: string;
};

export default function NavItem({ children, color, href }: NavItemProps) {
  return (
    <Link className={styles['link']} color={color} href={href} underline='none'>
      {children}
    </Link>
  );
}
