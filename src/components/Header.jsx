import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full fixed top-0 bg-black/10 backdrop-blur-2xl z-50">
      <div className="w-10/12 mx-auto h-20 flex items-center justify-between">
        <Link to="/">
          <div>
            <h2 className="text-3xl font-bold text-[#00abf0]">Riyazul</h2>
          </div>
        </Link>
        <div>
          <Link to="/contact">
            <button className="bg-[#00abf0] text-white px-6 py-2 rounded text-base font-semibold shadow">
              Hire Me
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
