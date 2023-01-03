import FacebookIcon from "../icons/FacebookIcon";
import InstagramIcon from "../icons/InstagramIcon";

const ConnectWithUs: React.FC = () => {
  return (
    <section className="flex justify-center flex-col items-center gap-6 bg-slate-50 p-4 rounded">
      <h3 className="text-xl">Connect with Us</h3>
      <ul className="flex gap-4">
        <li>
          <a href="https://www.facebook.com/DuBeeHerbs">
            <FacebookIcon />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/DuBeeHerbs">
            <InstagramIcon />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default ConnectWithUs;
