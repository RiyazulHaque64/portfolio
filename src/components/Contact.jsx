import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineMailOpen } from "react-icons/hi";
import { BiPhoneCall, BiRightArrowAlt } from "react-icons/bi";
import ReactWhatsapp from "react-whatsapp";
import { BsLinkedin, BsWhatsapp } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_00mmvjr",
        "template_9g1puto",
        form.current,
        "76Bj6v8eqRVv_GAvu"
      )
      .then(
        () => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your message has been sent",
            showConfirmButton: false,
            timer: 1500,
          });
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div
      className="w-11/12 lg:w-8/12 lg:h-screen mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-20 py-10 mt-24 lg:mt-0"
      id="contact"
    >
      {/* contact left side */}
      <div>
        <h2 className="text-3xl lg:text-4xl font-semibold uppercase text-[#00abf0] mb-1">
          Get In Touch
        </h2>
        <h4 className="text-lg lg:text-2xl text-white mb-6">
          Let&apos;s Work Together
        </h4>
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
          <a
            href="https://www.linkedin.com/in/riyazul-haque/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin className="w-6 lg:w-8 h-6 lg:h-8 text-white" />
          </a>
          <ReactWhatsapp number="+8801840452116">
            <BsWhatsapp className="w-6 lg:w-8 h-6 lg:h-8 text-white" />
          </ReactWhatsapp>
        </div>
      </div>
      {/* contact form */}
      <form
        className="bg-black/20 shadow p-10 rounded-xl"
        ref={form}
        onSubmit={sendEmail}
      >
        <input
          className="w-full bg-transparent border-b border-gray-300 focus:border-[#00abf0] focus:placeholder:text-[#00abf0] transition-all duration-300 py-2 mb-6 outline-none text-gray-300 placeholder:text-white"
          type="text"
          name="user_name"
          placeholder="Your Name"
        />
        <input
          className="w-full bg-transparent border-b border-gray-300 focus:border-[#00abf0] focus:placeholder:text-[#00abf0] transition-all duration-300 py-2 mb-6 outline-none text-gray-300 placeholder:text-white"
          type="email"
          name="user_email"
          placeholder="Your Email"
        />
        <textarea
          className="w-full bg-transparent border-b border-gray-300 focus:border-[#00abf0] focus:placeholder:text-[#00abf0] transition-all duration-300 pt-2 pb-12 mb-6 outline-none text-gray-300 placeholder:text-white resize-none"
          placeholder="Your Message"
          name="message"
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
