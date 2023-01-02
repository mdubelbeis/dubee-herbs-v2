import Link from "next/link";
import Logo from "../logo/Logo";
import ClosedMenuIcon from "../ClosedMenu/ClosedMenuIcon";

const MobileHeader: React.FC = () => {
  return (
    <header>
      <section>
        <ClosedMenuIcon />
      </section>
      <section>
        <Logo />
        <span>Du-Bee Herbs</span>
      </section>
      <nav>
        <Link href="/shop">Shop</Link>
      </nav>
    </header>
  );
};

export default MobileHeader;
