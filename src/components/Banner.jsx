import { BiDownload } from "react-icons/bi";
import { BsFacebook, BsLinkedin, BsGithub, BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";
import ReactWhatsapp from "react-whatsapp";

const Banner = () => {
  return (
    <div
      className="w-11/12 lg:w-10/12 py-28 lg:py-0 lg:h-screen mx-auto flex items-center justify-between"
      id="home"
    >
      {/* banner left side */}
      <div className="w-full flex flex-col items-center justify-center text-center">
        <h2
          className="text-3xl lg:text-5xl font-bold text-white mb-3 lg:mb-4"
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1500"
        >
          Hi, I&apos;m Riyazul Haque
        </h2>
        <h4
          className="text-2xl lg:text-4xl text-[#00abf0] font-semibold"
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1700"
        >
          MERN-Stack Developer
        </h4>
        <p
          className="text-base lg:text-lg text-gray-300 my-6 lg:my-10 w-9/12 lg:w-6/12"
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1900"
        >
          I have skilled HTML5, CSS3, TailwindCSS, Bootstrap, JavaScript,
          TypeScript, ReactJS, NextJS, ExpressJS, MongoDB, Mongoose & Firebase.
          I&apos;m familier with NodeJS and I previous experienced with
          Wordpress CMS.
        </p>
        <div
          className="flex gap-4"
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <Link to="/contact">
            <button className="bg-[#00abf0] text-white px-6 py-2 rounded-full text-base font-semibold shadow">
              Contact Me
            </button>
          </Link>
          <a href="/resume-RiyazulHaque.pdf" download>
            <button className="border-2 border-[#00abf0] text-white px-6 py-2 rounded-full text-base font-semibold flex items-center gap-2">
              <span>My Resume</span>
              <BiDownload className="animate-bounce" />
            </button>
          </a>
        </div>
        <div
          className="flex items-center gap-4 my-8"
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2100"
        >
          <a
            href="https://www.linkedin.com/in/riyazul-haque/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin className="w-8 h-8 text-white" />
          </a>
          <a
            href="https://github.com/RiyazulHaque64"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub className="w-8 h-8 text-white" />
          </a>
          <a
            href="https://www.facebook.com/riyazul.haque.31542"
            target="_blank"
            rel="noreferrer"
          >
            <BsFacebook className="w-8 h-8 text-white" />
          </a>
          <ReactWhatsapp number="+8801840452116">
            <BsWhatsapp className="w-8 h-8 text-white" />
          </ReactWhatsapp>
        </div>
      </div>
      {/* Banner right side */}
      {/* <div
        className="banner-image h-[550px] w-4/12 z-20 bg-contain bg-no-repeat mix-blend-lighten bg-top hidden lg:block"
        data-aos="fade-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      ></div> */}
    </div>
  );
};

export default Banner;
