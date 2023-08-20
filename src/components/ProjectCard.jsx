import { BiLinkExternal } from "react-icons/bi";

const ProjectCard = ({ thumbnail, title, technology, link }) => {
  const { react, node, mongodb, firebase, express } = technology;
  return (
    <div className="relative group overflow-hidden border-2 border-white/50 rounded-xl h-[182px] lg:h-[260px] xl:h-[300px] 2xl:h-[396px]">
      <div className="absolute group-hover:bg-black/70 z-30 w-full h-full transition-all duration-300"></div>
      <img
        className="group-hover:scale-125 transition-all duration-500 w-full h-full"
        src={thumbnail}
        alt=""
      />
      <h2 className="absolute -bottom-full group-hover:bottom-24 lg:group-hover:bottom-32 left-4 lg:left-12 transition-all duration-500 text-lg xl:text-2xl 2xl:text-3xl text-white z-40">
        {title}
      </h2>
      <div className="flex gap-4 lg:gap-6 items-center absolute -bottom-full group-hover:bottom-16 left-4 lg:left-12 transition-all duration-700 z-40">
        <span className="text-base lg:text-2xl text-white border-r border-white pr-4 lg:pr-6">
          Build With
        </span>
        <ul className="flex items-center gap-4">
          <li>
            <img className="w-auto h-6 lg:h-12" src={react} alt="" />
          </li>
          <li>
            <img className="w-auto h-6 lg:h-12" src={express} alt="" />
          </li>
          <li>
            <img className="w-auto h-6 lg:h-12" src={node} alt="" />
          </li>
          <li>
            <img className="w-auto h-6 lg:h-12" src={mongodb} alt="" />
          </li>
          <li>
            <img className="w-auto h-6 lg:h-12" src={firebase} alt="" />
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-4 lg:gap-6 text-[#00abf0] absolute -bottom-full group-hover:bottom-8 left-4 lg:left-12 transition-all duration-1000 z-40">
        <a
          className="flex items-center gap-2"
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          <BiLinkExternal className="" />
          <span className="">Live Preview</span>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
