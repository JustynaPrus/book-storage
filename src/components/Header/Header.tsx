import NavLink from '../NavLink/NavLink';

const MENU_LIST = [
  { href: '/', text: 'Home' },
  //   { text: "Sign up", href: "/auth/signup/" },
  //   { text: "Sign in", href: "/auth/signin/" },
  { href: '/products', text: 'Products' },
  { href: '/blog', text: 'Blog' },
  { href: '/basket', text: 'Basket' },
  { href: '/order', text: 'Order' },
  { href: '/profile', text: 'Profile' },
];

export default function Header() {
  return (
    <nav>
      {MENU_LIST.map((link) => (
        <NavLink key={link.text} href={link.href} text={link.text} />
      ))}
    </nav>
  );
}
