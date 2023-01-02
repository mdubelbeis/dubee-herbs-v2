import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MissionStatement from "../components/MissionStatement/MissionStatement";
import MobileHeader from "../components/Header/MobileHeader";
import DesktopHeader from "../components/Header/DesktopHeader";

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <MissionStatement />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
