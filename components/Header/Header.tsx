import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header>
      <section></section>
      <nav>
        <Link href="/shop">Shop</Link>
        <Link href="/signin">Sign-in | Register</Link>
      </nav>
    </header>
  );
};

export default Header;
