import React from "react";

interface Props {
  compRef: (node?: Element | null) => void;
}

const ContactSection = ({ compRef }: Props) => {
  return (
    <div
      ref={compRef}
      id="contact"
      className="flex items-center justify-between px-40 pt-20 h-screen"
    >
      <div>
        <h1 className="text-7xl font-black">CONTACT ME!</h1>
        <p className="text-xl pt-12">Please feel free to send me a message.</p>
      </div>
      <div className="relative w-2/3 group">
        <div className="absolute inset-0.5 bg-gradient-to-br from-green-400 to-blue-500 blur-lg rounded-2xl opacity-60 group-hover:opacity-100 transition duration-500 animate-tilt"></div>
        <form className="relative flex flex-col bg-neutral-800 p-10 rounded-2xl">
          <label htmlFor="name" className="text-xl font-bold">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="John Smith"
            required
            className="input my-4 text-neutral-900 text-xl mb-10"
          />
          <label htmlFor="email" className="text-xl font-bold">
            Email
          </label>
          <input
            className="input validator my-4 text-neutral-900 text-xl mb-10"
            type="email"
            id="email"
            required
            placeholder="mail@site.com"
          />
          <label htmlFor="message" className="text-xl font-bold">
            Message
          </label>
          <textarea
            className="textarea my-4 text-xl text-neutral-900 h-60 "
            id="message"
            placeholder="Message"
          ></textarea>
          <input
            type="submit"
            value="SEND"
            id="submit"
            className="btn font-dmsans text-xl w-1/3 mt-10 text-white bg-blue-500 active:bg-blue-100 hover:bg-blue-400 border-none"
          />
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
