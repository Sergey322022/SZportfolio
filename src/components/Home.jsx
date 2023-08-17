import HeroImage from "../assets/heroImage.png";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
function Home() {
  return (
    <>
      <div
        name="home"
        className="pt-20 sm:h-screen sm:w-full bg-gradient-to-b from-black via-black to-gray-800"
      >
        <div className=" max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
          <div className="flex flex-col justify-center h-full ">
            <h2 className="text-4xl sm:text-7xl  font-bold text-white">
              I am a Full Stack Developer
            </h2>
            <p className="text-gray-500 py- max-w-md ">
              Junior full stack developer just graduated In CDI college with
              some experience building responsive websites using frontend,
              backend and database tools like Html5, CSS, JavaScript/TypeScript,
              node.js, react.js, Java, C#, Python, SQL and NoSQL databases
              (MySQL and Mongo DB) and more. I am responsible, creative,
              reliable and good at problem solving.
            </p>
            <div>
              <Link
                to="portfolio"
                smooth
                duration={500}
                className=" group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
              >
                Portfolio
                <span className="group-hover:rotate-90 duration-300 ">
                  <HiArrowRight className="ml-2" />
                </span>
              </Link>
            </div>
          </div>
          <div>
            <img
              src={HeroImage}
              alt="my profile"
              className="rounded-2xl mx-auto w-2/3 md:w-full hover:scale-105 hover:rotate-1 duration-500"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
