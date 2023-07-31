import { BiLinkExternal } from "react-icons/bi";
import harmonicImg from "../assets/images/harmonic.jpg";
import toyHouseImg from "../assets/images/toyHouse-1.jpg";
import chefsKitchenImg from "../assets/images/chefsKitchen.jpg";
import reactIcon from "../assets/images/react.png";
// import expressIcon from "../assets/images/express.png";
import nodeIcon from "../assets/images/node.png";
import mongoDBIcon from "../assets/images/mongodb.png";
import FirebaseIcon from "../assets/images/firebase.png";

const Projects = () => {
  return (
    <div
      className="w-10/12 py-20 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 mt-14"
      id="projects"
    >
      <div>
        <h2 className="text-3xl lg:text-4xl font-bold lg:font-semibold uppercase text-[#00abf0] mb-4 text-center lg:text-left">
          My Latest Work
        </h2>
        <p className="text-white mb-16 w-8/12 hidden lg:block">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
          labore ipsa vero exercitationem tenetur soluta dicta qui iste totam
          necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Accusantium, labore ipsa vero exercitationem tenetur soluta
          dicta qui iste totam necessitatibus.
        </p>
        <button className="bg-[#00abf0] text-white px-6 py-2 rounded-full text-base font-semibold shadow hidden lg:block">
          View All Projects
        </button>
      </div>
      <div className="relative group overflow-hidden border-2 border-white/50 rounded-xl h-[182px] lg:h-[396px]">
        <div className="absolute group-hover:bg-black/70 z-30 w-full h-full transition-all duration-300"></div>
        <img
          className="group-hover:scale-125 transition-all duration-500"
          src={harmonicImg}
          alt=""
        />
        <h2 className="absolute -bottom-full group-hover:bottom-24 lg:group-hover:bottom-32 left-4 lg:left-12 transition-all duration-500 text-lg lg:text-3xl text-white z-40">
          Harmonic - A online music institute
        </h2>
        <div className="flex gap-4 lg:gap-6 items-center absolute -bottom-full group-hover:bottom-16 left-4 lg:left-12 transition-all duration-700 z-40">
          <span className="text-base lg:text-2xl text-white border-r border-white pr-4 lg:pr-6">
            Build With
          </span>
          <ul className="flex items-center gap-4">
            <li>
              <img className="w-auto h-6 lg:h-12" src={reactIcon} alt="" />
            </li>
            {/* <li>
              <img className="w-auto h-12" src={expressIcon} alt="" />
            </li> */}
            <li>
              <img className="w-auto h-6 lg:h-12" src={nodeIcon} alt="" />
            </li>
            <li>
              <img className="w-auto h-6 lg:h-12" src={mongoDBIcon} alt="" />
            </li>
            <li>
              <img className="w-auto h-6 lg:h-12" src={FirebaseIcon} alt="" />
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-4 lg:gap-6 text-[#00abf0] absolute -bottom-full group-hover:bottom-8 left-4 lg:left-12 transition-all duration-1000 z-40">
          <a
            className="flex items-center gap-2"
            href="https://harmonic-352e3.web.app"
            target="_blank"
            rel="noreferrer"
          >
            <BiLinkExternal className="" />
            <span className="">Live Preview</span>
          </a>
        </div>
      </div>
      <div className="relative group overflow-hidden border-2 border-white/50 rounded-xl h-[180px] lg:h-[396px]">
        <div className="absolute group-hover:bg-black/70 z-30 w-full h-full transition-all duration-300"></div>
        <img
          className="group-hover:scale-125 transition-all duration-500"
          src={toyHouseImg}
          alt=""
        />
        <h2 className="absolute -bottom-full group-hover:bottom-24 lg:group-hover:bottom-32 left-4 lg:left-12 transition-all duration-500 text-base lg:text-3xl text-white z-40">
          Toy House - A online toy showroom
        </h2>
        <div className="flex gap-4 lg:gap-6 items-center absolute -bottom-full group-hover:bottom-16 left-4 lg:left-12 transition-all duration-700 z-40">
          <span className="text-base lg:text-2xl text-white border-r border-white pr-4 lg:pr-6">
            Build With
          </span>
          <ul className="flex items-center gap-4">
            <li>
              <img className="w-auto h-6 lg:h-12" src={reactIcon} alt="" />
            </li>
            {/* <li>
              <img className="w-auto h-6 lg:h-12" src={expressIcon} alt="" />
            </li> */}
            <li>
              <img className="w-auto h-6 lg:h-12" src={nodeIcon} alt="" />
            </li>
            <li>
              <img className="w-auto h-6 lg:h-12" src={mongoDBIcon} alt="" />
            </li>
            <li>
              <img className="w-auto h-6 lg:h-12" src={FirebaseIcon} alt="" />
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-4 lg:gap-6 text-[#00abf0] absolute -bottom-full group-hover:bottom-8 left-6 lg:left-12 transition-all duration-1000 z-40">
          <a
            className="flex items-center gap-2"
            href="https://toy-house-97829.web.app/"
            target="_blank"
            rel="noreferrer"
          >
            <BiLinkExternal className="" />
            <span className="">Live Preview</span>
          </a>
        </div>
      </div>
      <div className="relative group overflow-hidden border-2 border-white/50 rounded-xl h-[182px] lg:h-[396px]">
        <div className="absolute group-hover:bg-black/70 z-30 w-full h-full transition-all duration-300"></div>
        <img
          className="group-hover:scale-125 transition-all duration-500"
          src={chefsKitchenImg}
          alt=""
        />
        <h2 className="absolute -bottom-full group-hover:bottom-24 lg:group-hover:bottom-32 left-4 lg:left-12 transition-all duration-500 text-base lg:text-3xl text-white z-40">
          Chef&apos;s Kitchen - Chef&apos;s online platform
        </h2>
        <div className="flex gap-4 lg:gap-6 items-center absolute -bottom-full group-hover:bottom-16 left-4 lg:left-12 transition-all duration-700 z-40">
          <span className="text-base lg:text-2xl text-white border-r border-white pr-4 lg:pr-6">
            Build With
          </span>
          <ul className="flex items-center gap-4">
            <li>
              <img className="w-auto h-6 lg:h-12" src={reactIcon} alt="" />
            </li>
            {/* <li>
              <img className="w-auto h-6 lg:h-12" src={expressIcon} alt="" />
            </li> */}
            <li>
              <img className="w-auto h-6 lg:h-12" src={nodeIcon} alt="" />
            </li>
            <li>
              <img className="w-auto h-6 lg:h-12" src={mongoDBIcon} alt="" />
            </li>
            <li>
              <img className="w-auto h-6 lg:h-12" src={FirebaseIcon} alt="" />
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-4 lg:gap-6 text-[#00abf0] absolute -bottom-full group-hover:bottom-8 left-4 lg:left-12 transition-all duration-1000 z-40">
          <a
            className="flex items-center gap-2"
            href="https://chefs-kitchen-87451.web.app/"
            target="_blank"
            rel="noreferrer"
          >
            <BiLinkExternal className="" />
            <span className="">Live Preview</span>
          </a>
        </div>
      </div>

      <button className="bg-[#00abf0] text-white px-6 py-2 rounded-full text-base font-semibold shadow lg:hidden">
        View All Projects
      </button>
    </div>
  );
};

export default Projects;
