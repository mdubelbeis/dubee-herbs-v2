import { useRouter } from "next/router";

import Link from "next/link";
import Logo from "../logo/Logo";
import ShoppingCartIcon from "../ShoppingCartIcon/ShoppingCartIcon";

const DesktopHeader: React.FC = () => {
  const router = useRouter();

  return (
    <header className="hidden lg:flex lg:flex-col lg:justify-center lg:items-center lg:gap-4 lg:w-full lg:py-20">
      <section className="lg:flex lg:flex-col lg:text-6xl lg:font-main lg:relative">
        <h1>Du-Bee Herbs</h1>
        <Logo layout="desktop" height={150} width={150} />
      </section>
      <section>
        <nav className="flex gap-4 uppercase">
          <Link href="/">Home</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/cart">
            <ShoppingCartIcon />
          </Link>
        </nav>
      </section>
    </header>
  );
};

export default DesktopHeader;
