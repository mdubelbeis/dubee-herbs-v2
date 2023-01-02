import Footer from "../components/Footer/Footer";
import MissionStatement from "../components/MissionStatement/MissionStatement";
import MobileHeader from "../components/MobileHeader/MobileHeader";

const HomePage: React.FC = () => {
  return (
    <div>
      <MobileHeader />
      <main>
        <MissionStatement />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
