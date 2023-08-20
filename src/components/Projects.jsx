import harmonicImg from "../assets/images/harmonic.jpg";
import toyHouseImg from "../assets/images/toyHouse-1.jpg";
import chefsKitchenImg from "../assets/images/chefsKitchen.jpg";
import reactLogo from "../assets/images/reactjs.png";
import expressLogo from "../assets/images/express js white.png";
import nodeLogo from "../assets/images/node js.png";
import mongoDbLogo from "../assets/images/mongodb.png";
import firebaseLogo from "../assets/images/firebase.png";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div
      className="w-10/12 py-20 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-12 lg:mt-16 mb-16"
      id="projects"
    >
      <div>
        <h2 className="text-3xl lg:text-4xl font-bold lg:font-semibold uppercase text-[#00abf0] mb-2 lg:mb-4 text-center lg:text-left">
          My Latest Work
        </h2>
        <p className="text-gray-300 mb-16 w-8/12 hidden md:block">
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
      <ProjectCard
        thumbnail={harmonicImg}
        title={"Harmonic - A online music institute"}
        technology={{
          react: reactLogo,
          express: expressLogo,
          node: nodeLogo,
          mongodb: mongoDbLogo,
          firebase: firebaseLogo,
        }}
        link={"https://harmonic-352e3.web.app"}
      />
      <ProjectCard
        thumbnail={toyHouseImg}
        title={"Toy House - A online toy showroom"}
        technology={{
          react: reactLogo,
          express: expressLogo,
          node: nodeLogo,
          mongodb: mongoDbLogo,
          firebase: firebaseLogo,
        }}
        link={"https://toy-house-97829.web.app/"}
      />
      <ProjectCard
        thumbnail={chefsKitchenImg}
        title={"Chef's Kitchen - Chef's online platform"}
        technology={{
          react: reactLogo,
          express: expressLogo,
          node: nodeLogo,
          mongodb: mongoDbLogo,
          firebase: firebaseLogo,
        }}
        link={"https://chefs-kitchen-87451.web.app"}
      />

      <button className="bg-[#00abf0] text-white px-6 py-2 rounded-full text-base font-semibold shadow lg:hidden">
        View All Projects
      </button>
    </div>
  );
};

export default Projects;
