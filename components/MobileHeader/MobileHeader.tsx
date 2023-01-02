import { useState } from "react";
import Logo from "../logo/Logo";
import MenuIcon from "../MenuIcon/MenuIcon";
import CloseMenu from "../CloseMenu/CloseMenu";
import Link from "next/link";

const MobileHeader: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  return !isOpen ? (
    <header className="flex justify-between items-center font-main text-2xl p-6">
      <section>
        <MenuIcon handleMenuClick={handleMobileMenu} />
      </section>
      <section className="relative mr-4">
        <Logo position="absolute" width={50} height={50} />
        <h1>Du-Bee Herbs</h1>
      </section>
    </header>
  ) : (
    <header className="bg-primary h-screen w-screen flex flex-col gap-40 items-center font-main text-2xl px-6 py-1">
      <section className="flex items-center justify-between w-full">
        <CloseMenu handleMenuClick={handleMobileMenu} />
        <Link href="/" onClick={handleMobileMenu}>
          <Logo position="block" width={75} height={75} />
        </Link>
      </section>
      <section>
        <nav className="flex flex-col gap-4 h-full text-center">
          <Link href="/contact">Contact</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/cart">Cart</Link>
        </nav>
      </section>
    </header>
  );
};

export default MobileHeader;
