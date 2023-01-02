import Link from "next/link";
import Logo from "../logo/Logo";

const DesktopHeader: React.FC = () => {
  return (
    <header className="hidden lg:flex lg:flex-col lg:justify-center lg:items-center lg:w-full lg:py-20">
      <section className="lg:flex lg:flex-col lg:text-6xl lg:font-main lg:relative">
        <h1>Du-Bee Herbs</h1>
        <Logo layout="desktop" height={150} width={150} />
      </section>
      <section>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/shop">Shop</Link>
        </nav>
      </section>
    </header>
  );
};

export default DesktopHeader;
