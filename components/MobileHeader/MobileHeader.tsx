import Link from "next/link";
import Logo from "../logo/Logo";
import ClosedMenuIcon from "../ClosedMenu/ClosedMenuIcon";

const MobileHeader: React.FC = () => {
  return (
    <header className="flex justify-between items-center font-main text-2xl p-4">
      <section>
        <ClosedMenuIcon />
      </section>
      <section className="relative mr-4">
        <Logo />
        <h1>Du-Bee Herbs</h1>
      </section>
    </header>
  );
};

export default MobileHeader;
