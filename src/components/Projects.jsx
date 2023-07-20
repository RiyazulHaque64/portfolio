import { BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import project1 from "../assets/images/project-img1.png";
import project2 from "../assets/images/project-img2.png";
import project3 from "../assets/images/project-img3.png";
import reactIcon from "../assets/images/react.png";
// import expressIcon from "../assets/images/express.png";
import nodeIcon from "../assets/images/node.png";
import mongoDBIcon from "../assets/images/mongodb.png";
import FirebaseIcon from "../assets/images/firebase.png";

const Projects = () => {
  return (
    <div
      className="w-10/12 h-screen pt-20 mx-auto grid grid-cols-2 gap-10"
      id="projects"
    >
      <div>
        <h2 className="text-4xl font-semibold uppercase text-[#00abf0] mb-4">
          My Latest Work
        </h2>
        <p className="text-white mb-16 w-8/12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
          labore ipsa vero exercitationem tenetur soluta dicta qui iste totam
          necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Accusantium, labore ipsa vero exercitationem tenetur soluta
          dicta qui iste totam necessitatibus.
        </p>
        <button className="bg-[#00abf0] text-white px-6 py-2 rounded-full text-base font-semibold shadow">
          View All Projects
        </button>
      </div>
      <div className="relative group overflow-hidden border-2 border-white/50 rounded-xl">
        <div className="absolute group-hover:bg-black/70 z-40 w-full h-full transition-all duration-300"></div>
        <img
          className="group-hover:scale-125 transition-all duration-500"
          src={project1}
          alt=""
        />
        <h2 className="absolute -bottom-full group-hover:bottom-32 left-12 transition-all duration-500 text-3xl text-white z-50">
          Harmonic - A online music institute
        </h2>
        <div className="flex gap-6 items-center absolute -bottom-full group-hover:bottom-16 left-12 transition-all duration-700 z-50">
          <span className="text-2xl text-white border-r border-white pr-6">
            Build With
          </span>
          <ul className="flex items-center gap-4">
            <li>
              <img className="w-auto h-12" src={reactIcon} alt="" />
            </li>
            {/* <li>
              <img className="w-auto h-12" src={expressIcon} alt="" />
            </li> */}
            <li>
              <img className="w-auto h-12" src={nodeIcon} alt="" />
            </li>
            <li>
              <img className="w-auto h-12" src={mongoDBIcon} alt="" />
            </li>
            <li>
              <img className="w-auto h-12" src={FirebaseIcon} alt="" />
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-6 text-[#00abf0] absolute -bottom-full group-hover:bottom-8 left-12 transition-all duration-1000 z-50">
          <a className="flex items-center gap-2" href="">
            <BiLinkExternal className="" />
            <span className="">Live Preview</span>
          </a>
          <a className="flex items-center gap-2" href="">
            <BsGithub className="" />
            <span className="">Github</span>
          </a>
        </div>
      </div>
      <div className="relative group overflow-hidden border-2 border-white/50 rounded-xl">
        <div className="absolute group-hover:bg-black/70 z-40 w-full h-full transition-all duration-300"></div>
        <img
          className="group-hover:scale-125 transition-all duration-500"
          src={project2}
          alt=""
        />
        <h2 className="absolute -bottom-full group-hover:bottom-32 left-12 transition-all duration-500 text-3xl text-white z-50">
          Harmonic - A online music institute
        </h2>
        <div className="flex gap-6 items-center absolute -bottom-full group-hover:bottom-16 left-12 transition-all duration-700 z-50">
          <span className="text-2xl text-white border-r border-white pr-6">
            Build With
          </span>
          <ul className="flex items-center gap-4">
            <li>
              <img className="w-auto h-12" src={reactIcon} alt="" />
            </li>
            {/* <li>
              <img className="w-auto h-12" src={expressIcon} alt="" />
            </li> */}
            <li>
              <img className="w-auto h-12" src={nodeIcon} alt="" />
            </li>
            <li>
              <img className="w-auto h-12" src={mongoDBIcon} alt="" />
            </li>
            <li>
              <img className="w-auto h-12" src={FirebaseIcon} alt="" />
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-6 text-[#00abf0] absolute -bottom-full group-hover:bottom-8 left-12 transition-all duration-1000 z-50">
          <a className="flex items-center gap-2" href="">
            <BiLinkExternal className="" />
            <span className="">Live Preview</span>
          </a>
          <a className="flex items-center gap-2" href="">
            <BsGithub className="" />
            <span className="">Github</span>
          </a>
        </div>
      </div>
      <div className="relative group overflow-hidden border-2 border-white/50 rounded-xl">
        <div className="absolute group-hover:bg-black/70 z-40 w-full h-full transition-all duration-300"></div>
        <img
          className="group-hover:scale-125 transition-all duration-500"
          src={project3}
          alt=""
        />
        <h2 className="absolute -bottom-full group-hover:bottom-32 left-12 transition-all duration-500 text-3xl text-white z-50">
          Harmonic - A online music institute
        </h2>
        <div className="flex gap-6 items-center absolute -bottom-full group-hover:bottom-16 left-12 transition-all duration-700 z-50">
          <span className="text-2xl text-white border-r border-white pr-6">
            Build With
          </span>
          <ul className="flex items-center gap-4">
            <li>
              <img className="w-auto h-12" src={reactIcon} alt="" />
            </li>
            {/* <li>
              <img className="w-auto h-12" src={expressIcon} alt="" />
            </li> */}
            <li>
              <img className="w-auto h-12" src={nodeIcon} alt="" />
            </li>
            <li>
              <img className="w-auto h-12" src={mongoDBIcon} alt="" />
            </li>
            <li>
              <img className="w-auto h-12" src={FirebaseIcon} alt="" />
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-6 text-[#00abf0] absolute -bottom-full group-hover:bottom-8 left-12 transition-all duration-1000 z-50">
          <a className="flex items-center gap-2" href="">
            <BiLinkExternal className="" />
            <span className="">Live Preview</span>
          </a>
          <a className="flex items-center gap-2" href="">
            <BsGithub className="" />
            <span className="">Github</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
