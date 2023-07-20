import { BiDownload } from "react-icons/bi";

const About = () => {
  return (
    <div
      className="w-10/12 h-screen mx-auto flex justify-between items-center gap-10"
      id="about"
    >
      {/* about image */}
      <div className="banner-image w-1/2 h-[600px] bg-top bg-no-repeat mix-blend-lighten"></div>
      {/* about right side */}
      <div className="w-1/2">
        <h2 className="text-4xl font-semibold uppercase text-[#00abf0] mb-2">
          About Me
        </h2>
        <h4 className="text-2xl text-white mb-4">
          I&apos;m a MERN-Stack Web Developer with over 1 years of experience.
        </h4>
        <p className="text-white mb-10">
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
