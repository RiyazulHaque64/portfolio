import htmlLogo from "../assets/images/html 5.png";
import cssLogo from "../assets/images/css 3.png";
import tailwindLogo from "../assets/images/tailwind.png";
import bootstrapLogo from "../assets/images/bootstrap.png";
import reactLogo from "../assets/images/reactjs.png";
import expressLogo from "../assets/images/express js white.png";
import nodeLogo from "../assets/images/node js.png";
import mongoDbLogo from "../assets/images/mongodb.png";
import firebaseLogo from "../assets/images/firebase.png";

const Skills = () => {
  return (
    <div className="w-11/12 lg:w-8/12 mx-auto py-28 lg:py-32">
      <div className="flex flex-col items-center mb-6 lg:mb-8">
        <h2 className="text-3xl lg:text-4xl  mb-2 uppercase font-semibold text-[#00abf0]">
          My Skills
        </h2>
        {/* <span className="test w-72 h-[2px] bg-[#00abf0] block"></span> */}
        <span className="test2 relative before:content-[''] before:absolute before:block before:w-[90px] lg:before:w-[120px] before:h-[2px] before:rounded-[20px] before:bg-[#00abf0] before:left-[26px] before:top-1/2 before:transform before:-translate-y-1/2 after:content-[''] after:absolute after:block after:w-[90px] lg:after:w-[120px] after:h-[2px] after:rounded-[20px] after:bg-[#00abf0] after:right-[26px] after:top-1/2 after:transform after:-translate-y-1/2 w-5 h-5 bg-[#00abf0] block rounded-full"></span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-5 justify-center gap-2">
        <div className="flex flex-col items-center p-10">
          <img className="w-auto h-24" src={htmlLogo} alt="" />
          <h2 className="text-3xl text-white">HTML5</h2>
        </div>
        <div className="flex flex-col items-center p-10">
          <img className="w-auto h-24" src={cssLogo} alt="" />
          <h2 className="text-3xl text-white">CSS3</h2>
        </div>
        <div className="flex flex-col items-center p-10">
          <img className="w-auto h-24" src={tailwindLogo} alt="" />
          <h2 className="text-3xl text-white">TailwindCSS</h2>
        </div>
        <div className="flex flex-col items-center p-10">
          <img className="w-auto h-24" src={bootstrapLogo} alt="" />
          <h2 className="text-3xl text-white">Bootstrap</h2>
        </div>
        <div className="flex flex-col items-center p-10">
          <img className="w-auto h-24" src={reactLogo} alt="" />
          <h2 className="text-3xl text-white">ReactJS</h2>
        </div>
        <div className="flex flex-col items-center p-10">
          <img className="w-auto h-24" src={expressLogo} alt="" />
          <h2 className="text-3xl text-white">ExpressJS</h2>
        </div>
        <div className="flex flex-col items-center p-10">
          <img className="w-auto h-24" src={nodeLogo} alt="" />
          <h2 className="text-3xl text-white">NodeJS</h2>
        </div>
        <div className="flex flex-col items-center p-10">
          <img className="w-auto h-24" src={mongoDbLogo} alt="" />
          <h2 className="text-3xl text-white">MongoDB</h2>
        </div>
        <div className="flex flex-col items-center p-10">
          <img className="w-auto h-24" src={firebaseLogo} alt="" />
          <h2 className="text-3xl text-white">Firebase</h2>
        </div>
      </div>
    </div>
  );
};

export default Skills;
