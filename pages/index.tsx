import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MissionStatement from "../components/MissionStatement/MissionStatement";
import MobileHeader from "../components/Header/MobileHeader";
import DesktopHeader from "../components/Header/DesktopHeader";
import ConnectWithUs from "../components/ConnectWithUs/ConnectWithUs";

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <main className="w-full p-4 max-w-4xl mx-auto">
        <MissionStatement />
        <ConnectWithUs />
      </main>
    </>
  );
};

export default HomePage;
