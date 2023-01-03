import { useState } from "react";
import Logo from "../logo/Logo";
import MenuIcon from "../icons/MenuIcon";
import CloseMenu from "../icons/CloseMenu";
import Link from "next/link";
import Footer from "../Footer/Footer";
import ShoppingCartIcon from "../ShoppingCartIcon/ShoppingCartIcon";

const MobileHeader: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  return !isOpen ? (
    <header className={`flex justify-between items-center px-4 lg:hidden`}>
      <section>
        <MenuIcon handleMenuClick={handleMobileMenu} />
      </section>
      <section className="hidden md:flex md:text-5xl md:font-main">
        <Link href="/">
          <h1>Du-Bee Herbs</h1>
        </Link>
      </section>
      <section>
        <Link href="/">
          <Logo layout="mobile" width={100} height={100} />
        </Link>
      </section>
    </header>
  ) : (
    <header className="bg-primary h-screen w-screen fixed top-0 gap-32 left-0 flex flex-col items-center text-center font-serif text-2xl px-6 py-8">
      <section className="flex items-center justify-between w-full">
        <CloseMenu handleMenuClick={handleMobileMenu} />
        <Link href="/" onClick={handleMobileMenu}>
          <Logo layout="desktop" width={75} height={75} />
        </Link>
      </section>
      <section>
        <nav className="flex flex-col gap-4 h-full text-center items-center">
          <Link href="/contact">Contact</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/cart">
            <ShoppingCartIcon />
          </Link>
        </nav>
      </section>
      <Footer />
    </header>
  );
};

export default MobileHeader;
