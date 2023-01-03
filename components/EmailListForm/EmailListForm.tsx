import { useState } from "react";

const EmailListForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  return (
    <section className="mt-10 bg-gray-50 p-6 rounded-md shadow-lg">
      <div className="flex flex-col gap-4 text-center">
        <h3 className="text-2xl">Get Email Updates</h3>
        <p className="text-xl tracking-wider">
          Sign up for our email list to receive updates on new products and
          sales!
        </p>
      </div>
      <form>
        <label>
          {" "}
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="py-2 px-4 mt-4 w-full border-2 border-gray-300 rounded-md focus:outline-primary"
          />
        </label>
        <button
          className="py-2 px-4 mt-4 w-full border-2 border-black rounded-md text-xl bg-primary"
          type="submit"
        >
          Sign-up
        </button>
      </form>
    </section>
  );
};

export default EmailListForm;
