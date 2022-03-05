import React, { useState } from "react";
import ReachOut from "./ReachOut";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const FORM_ENDPOINT =
  "https://public.herotofu.com/v1/fba62820-9c2b-11ec-bdf8-dd9c99f898ec";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center pb-10 transition-all">
        <IoCheckmarkCircleOutline className="text-6xl mt-5 text-sky-500 mb-2" />
        <div className="text-2xl text-gray-600 dark:text-gray-300 mb-2">
          Thank you!
        </div>
        <div className="text-md text-gray-600 dark:text-gray-300">
          We'll be in touch soon.
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center bg-gray-100 dark:bg-[#181818] px-10 pb-10">
      <form
        action={FORM_ENDPOINT}
        onSubmit={handleSubmit}
        method="POST"
        target="_blank"
        className="mt-10 py-5 px-10 w-full md:w-6/12 shadow-lg border-gray-500 dark:border-gray-300 border-2 rounded-lg"
        id="ContactForm"
      >
        <h1 className="text-sky-500 text-center text-3xl mb-5 font-semibold">
          Contact Me!
        </h1>
        <div className="mb-3 pt-0">
          <input
            type="text"
            placeholder="Your name"
            name="name"
            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow-xl outline-none focus:outline-none focus:ring ring-sky-500 w-full"
            required
          />
        </div>
        <div className="mb-3 pt-0">
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow-xl outline-none focus:outline-none focus:ring ring-sky-500 w-full"
            required
          />
        </div>
        <div className="mb-3 pt-0">
          <textarea
            placeholder="Your message"
            name="message"
            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow-xl outline-none focus:outline-none focus:ring ring-sky-500 w-full"
            required
          />
        </div>
        <div className="mb-3 flex justify-center">
          <button
            className="bg-white text-sky-500
           active:scale-110 font-bold uppercase text-sm px-6 py-3 rounded shadow-lg hover:scale-110 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="submit"
          >
            Send a message
          </button>
        </div>
        <div className="flex justify-center">
          <ReachOut />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
