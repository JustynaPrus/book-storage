import NavLink from "../NavLink/NavLink";

const MENU_LIST = [
  { text: "Home", href: "/" },
//   { text: "Sign up", href: "/auth/signup/" },
//   { text: "Sign in", href: "/auth/signin/" },
  { text: "Products", href: "/products" },
  { text: "Blog", href: "/blog" },
  { text: "Busket", href: "/busket" },
  { text: "Order", href: "/order" },
  { text: "Profile", href: "/profile" },
];

export default function Header() {
  return (
    <nav>
      {MENU_LIST.map((link) => (
        <NavLink text={link.text} href={link.href} key={link.text} />
      ))}
    </nav>
  );
}