import { AiOutlineHome } from "react-icons/ai";
import { BiUser, BiMessageDetail } from "react-icons/bi";
import { GiSkills } from "react-icons/gi";
import { HiOutlineBriefcase } from "react-icons/hi";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <div className="bg-black/20 backdrop-blur-2xl rounded-full py-3 px-6 mb-10 fixed bottom-1 left-1/2 transform -translate-x-1/2 z-50">
      <ul className="flex justify-between gap-6">
        <li className="text-white p-2 cursor-pointer">
          <Link
            to="home"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
            offset={-200}
          >
            <AiOutlineHome className="w-6 h-6" />
          </Link>
        </li>
        <li className="text-white p-2 cursor-pointer">
          <Link
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
          >
            <BiUser className="w-6 h-6" />
          </Link>
        </li>
        <li className="text-white p-2 cursor-pointer">
          <Link href="">
            <GiSkills className="w-6 h-6" />
          </Link>
        </li>
        <li className="text-white p-2 cursor-pointer">
          <Link
            to="projects"
            smooth={true}
            activeClass="active"
            spy={true}
            duration={500}
            offset={10}
          >
            <HiOutlineBriefcase className="w-6 h-6" />
          </Link>
        </li>
        <li className="text-white p-2 cursor-pointer">
          <Link
            to="contact"
            smooth={true}
            activeClass="active"
            spy={true}
            duration={500}
          >
            <BiMessageDetail className="w-6 h-6" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
