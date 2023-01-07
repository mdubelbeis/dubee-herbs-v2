import Logo from "../Logo/Logo";

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 flex justify-center items-center p-4 bg-primary">
      <Logo layout="footer" width={50} height={50} />
      <small>&copy; 2023 Du-Bee Herbs, LLC.</small>
      <small>All Rights Reserved.</small>
    </footer>
  );
};

export default Footer;
