'use client';
import { ReactElement } from 'react';
import Link from '@mui/material/Link';

import styles from './NavLink.module.scss';

type NavItemProps = {
  children?: string | ReactElement;
  href: string;
};

export default function NavItem({ children, href }: NavItemProps) {
  return (
    <Link className={styles['link']} color='black' href={href} underline='none'>
      {children}
    </Link>
  );
}
