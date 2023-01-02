import Logo from "../logo/Logo";

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 flex justify-center items-center p-4 bg-primary">
      <Logo position="block" width={50} height={50} />
      <small>&copy; 2023 Du-Bee Herbs, LLC.</small>
    </footer>
  );
};

export default Footer;
