import { BiDownload } from "react-icons/bi";

const About = () => {
  return (
    <div
      className="w-10/12 lg:h-screen mx-auto flex flex-col lg:flex-row justify-between items-center gap-10 pt-8 pb-20 lg:pb-10 mt-10 lg:mt-0"
      id="about"
    >
      {/* about image */}
      {/* <div className="banner-image w-1/2 h-[600px] bg-top bg-no-repeat mix-blend-lighten hidden lg:block"></div> */}
      {/* about right side */}
      <div className="w-full flex flex-col items-center justify-center py-10">
        <div className="flex flex-col items-center mb-4">
          <h2 className="text-3xl lg:text-4xl  mb-2 uppercase font-semibold text-[#00abf0]">
            About Me
          </h2>
          <span className="test2 relative before:content-[''] before:absolute before:block before:w-[90px] lg:before:w-[120px] before:h-[2px] before:rounded-[20px] before:bg-[#00abf0] before:left-[26px] before:top-1/2 before:transform before:-translate-y-1/2 after:content-[''] after:absolute after:block after:w-[90px] lg:after:w-[120px] after:h-[2px] after:rounded-[20px] after:bg-[#00abf0] after:right-[26px] after:top-1/2 after:transform after:-translate-y-1/2 w-5 h-5 bg-[#00abf0] block rounded-full"></span>
        </div>
        <h4 className="text-xl lg:text-2xl text-white mb-4 text-center">
          MERN-Stack Web Developer with over 1 years of experience.
        </h4>
        <p className="text-gray-300 mt-3 lg:mt-6 mb-8 lg:mb-12 w-10/12 lg:w-8/12 text-center">
          I&apos;m Riyazul Haque from Lakshmipur in Bangladesh. I&apos;m studing
          a Bachelor of Science in Mathematics in National University of
          Bangladesh. I like programming. Programming is my fashion and
          addiction. I spend my most of the time in programming. I have skilled
          HTML, CSS, Javascript, ReactJS, ExpressJS, MongoDB, Firebase etc.
          I&apos;m familiar with NodeJS. Also I have some more experiences. Such
          as, Desktop & Laptop hardware service, CCTV Setup, PABX Setup etc. If
          you are interested about me then don&apos;t hesitate to contact me.
        </p>
        <div className="flex gap-4">
          <button className="bg-[#00abf0] text-white px-6 py-2 rounded-full text-base font-semibold shadow">
            Contact Me
          </button>
          <button className="border-2 border-[#00abf0] text-white px-6 py-2 rounded-full text-base font-semibold flex items-center gap-2">
            <span>My Resume</span>
            <BiDownload className="animate-bounce" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
