import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineMailOpen } from "react-icons/hi";
import { BiPhoneCall, BiRightArrowAlt } from "react-icons/bi";
import {
  BsFacebook,
  BsMessenger,
  BsLinkedin,
  BsWhatsapp,
} from "react-icons/bs";

const Contact = () => {
  return (
    <div
      className="w-10/12 h-screen mx-auto flex items-center justify-between my-10"
      id="contact"
    >
      {/* contact left side */}
      <div>
        <h2 className="text-4xl font-semibold uppercase text-[#00abf0] mb-1">
          Get In Touch
        </h2>
        <h4 className="text-2xl text-white mb-6">Let&apos;s Work Together</h4>
        <div className="flex items-center gap-2 text-white mb-3">
          <HiOutlineLocationMarker className="w-6 h-6" />
          <span>Lakshmipur, Bangladesh</span>
        </div>
        <div className="flex items-center gap-2 text-white mb-3">
          <HiOutlineMailOpen className="w-6 h-6" />
          <span>riyazulhaque64@gmail.com</span>
        </div>
        <div>
          <a
            className="flex items-center gap-2 text-white"
            href="tel:+8801840452116"
          >
            <BiPhoneCall className="w-6 h-6" />
            <span>+8801840452116</span>
          </a>
        </div>
        <div className="flex items-center gap-4 my-8">
          <a href="">
            <BsLinkedin className="w-8 h-8 text-white" />
          </a>

          <a href="">
            <BsFacebook className="w-8 h-8 text-white" />
          </a>
          <a href="">
            <BsMessenger className="w-8 h-8 text-white" />
          </a>
          <a href="">
            <BsWhatsapp className="w-8 h-8 text-white" />
          </a>
        </div>
      </div>
      {/* contact form */}
      <form className="bg-black/20 shadow p-10 rounded-xl">
        <input
          className="w-full bg-transparent border-b border-gray-300 focus:border-[#00abf0] focus:placeholder:text-[#00abf0] transition-all duration-300 py-2 mb-6 outline-none text-gray-300 placeholder:text-white"
          type="text"
          placeholder="Your Name"
        />
        <input
          className="w-full bg-transparent border-b border-gray-300 focus:border-[#00abf0] focus:placeholder:text-[#00abf0] transition-all duration-300 py-2 mb-6 outline-none text-gray-300 placeholder:text-white"
          type="email"
          placeholder="Your Email"
        />
        <textarea
          className="w-full bg-transparent border-b border-gray-300 focus:border-[#00abf0] focus:placeholder:text-[#00abf0] transition-all duration-300 pt-2 pb-12 mb-6 outline-none text-gray-300 placeholder:text-white resize-none"
          placeholder="Your Message"
        ></textarea>
        <div className="flex justify-end">
          <button
            className="bg-[#00abf0] text-white flex items-center gap-1 py-2 px-6 rounded-full font-semibold"
            type="submit"
          >
            Send <BiRightArrowAlt />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
