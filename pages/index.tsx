import Header from "../components/Header/Header";
import MissionStatement from "../components/MissionStatement/MissionStatement";
import ConnectWithUs from "../components/ConnectWithUs/ConnectWithUs";
import EmailListForm from "../components/EmailListForm/EmailListForm";

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <main className="w-full p-4 max-w-4xl mx-auto">
        <MissionStatement />
        <ConnectWithUs />
        <EmailListForm />
      </main>
    </>
  );
};

export default HomePage;
