import { AiOutlineHome } from "react-icons/ai";
import { BiUser, BiMessageDetail } from "react-icons/bi";
import { GiSkills } from "react-icons/gi";
import { HiOutlineBriefcase } from "react-icons/hi";
import { NavLink } from "react-router-dom";
// import { Link } from "react-scroll";

const Nav = () => {
  return (
    <div className="bg-black/20 backdrop-blur-2xl rounded-full py-3 px-6 mb-10 fixed bottom-1 left-1/2 transform -translate-x-1/2 z-50">
      <ul className="flex justify-between gap-6">
        <li className="text-white p-2 cursor-pointer">
          <NavLink to="/">
            <AiOutlineHome className="w-6 h-6" />
          </NavLink>
        </li>
        <li className="text-white p-2 cursor-pointer">
          <NavLink to="/about">
            <BiUser className="w-6 h-6" />
          </NavLink>
        </li>
        <li className="text-white p-2 cursor-pointer">
          <NavLink to="/skills">
            <GiSkills className="w-6 h-6" />
          </NavLink>
        </li>
        <li className="text-white p-2 cursor-pointer">
          <NavLink to="/projects">
            <HiOutlineBriefcase className="w-6 h-6" />
          </NavLink>
        </li>
        <li className="text-white p-2 cursor-pointer">
          <NavLink to="/contact">
            <BiMessageDetail className="w-6 h-6" />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
