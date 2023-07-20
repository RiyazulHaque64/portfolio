import { BiDownload } from "react-icons/bi";
import { BsFacebook, BsLinkedin, BsGithub, BsWhatsapp } from "react-icons/bs";

const Banner = () => {
  return (
    <div
      className="w-10/12 h-[calc(100vh-81px)] mx-auto flex items-center justify-between"
      id="home"
    >
      {/* banner left side */}
      <div className="w-8/12">
        <h2
          className="text-5xl font-bold text-white mb-2"
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1500"
        >
          Hi, I&apos;m Riyazul Haque
        </h2>
        <h4
          className="text-4xl text-[#00abf0] font-semibold"
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1700"
        >
          MERN-Stack Developer
        </h4>
        <p
          className="w-10/12 text-lg text-gray-200 my-6"
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1900"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At doloribus
          fuga doloremque vel alias maxime voluptate labore harum recusandae
          inventore.
        </p>
        <div
          className="flex gap-4"
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <button className="bg-[#00abf0] text-white px-6 py-2 rounded-full text-base font-semibold shadow">
            Contact Me
          </button>
          <button className="border-2 border-[#00abf0] text-white px-6 py-2 rounded-full text-base font-semibold flex items-center gap-2">
            <span>My Resume</span>
            <BiDownload className="animate-bounce" />
          </button>
        </div>
        <div
          className="flex items-center gap-4 my-8"
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2100"
        >
          <a href="">
            <BsLinkedin className="w-8 h-8 text-white" />
          </a>
          <a href="">
            <BsGithub className="w-8 h-8 text-white" />
          </a>
          <a href="">
            <BsFacebook className="w-8 h-8 text-white" />
          </a>
          <a href="">
            <BsWhatsapp className="w-8 h-8 text-white" />
          </a>
        </div>
      </div>
      {/* Banner right side */}
      <div
        className="banner-image h-[550px] w-4/12 z-20 bg-contain bg-no-repeat mix-blend-lighten bg-top"
        data-aos="fade-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      ></div>
    </div>
  );
};

export default Banner;
