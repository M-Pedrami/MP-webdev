import Link from "next/link";
import { TypeAnimation } from "../Libraries";
import ThreeDCard from "./ThreeDCard";

export default function HeroSection() {
  return (
    <section
      className="bg-gray-300 p-16 xl:px-32 flex flex-col lg:flex-row gap-20 items-center xl:justify-center"
      style={{
        backgroundImage: `url("/HeroBackgroundv2.jpg")`,
        backgroundSize: "",
        backgroundPosition: "0% 40%",
      }}
    >
      <div className="lg:w-3/4 xl:w-2/4 flex flex-col gap-5 xl:justify-center  ">
        <p className=" text-xl lg:text-4xl font-bold leading-8 ">
          Hello! My Name is{" "}
          <span className="text-white bg-gray-600 font-extrabold font-serif italic text-xl lg:text-4xl">
            Maziar
          </span>
          .I am a{" "}
          <span className="text-white bg-gray-600 font-extrabold font-serif italic text-xl lg:text-4xl">
            Full-Stack
          </span>{" "}
          Web Developer{" "}
          <span className=" text-white bg-gray-600 font-extrabold font-serif italic text-xl lg:text-4xl ">
            Experienced
          </span>{" "}
          In:
        </p>
        <div className="pt-5 pb-5 lg:pb-10">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed once, initially
              "Javascript",
              1000,
              "React",
              1000,
              "Node.js",
              1000,
              "Databases",
              1000,
            ]}
            speed={50}
            style={{
              color: "white",
              backgroundColor: "gray",
              fontWeight: "bold",
              fontSize: "2rem",
            }}
            repeat={Infinity}
          />
        </div>
        <p className="hidden lg:block text-left text-2xl font-semibold leading-relaxed  ">
          Building{" "}
          <span className="  text-white bg-gray-600 italic font-bold">
            Awesome Websites
          </span>{" "}
          and Bringing{" "}
          <span className="  text-white bg-gray-600 italic font-bold">
            Ideas
          </span>{" "}
          to Life: Your{" "}
          <span className="  text-white bg-gray-600 italic font-bold">
            Vision
          </span>
          , My Code, Let's Create Something{" "}
          <span className=" bg-white text-gold italic font-bold">
            Extraordinary!
          </span>
        </p>
        <div className="flex flex-col lg:flex-row lg:justify-end lg:gap-5 gap-2">
          <Link href="/contact">
          <button className="bg-gold bg-opacity-85 py-2 px-4 rounded-3xl font-bold text-white hover:bg-opacity-55 hover:text-gray-800 border-2 border-gray-400 hover:border-2 hover:border-gold transition-all duration-300">
            CONTACT ME
          </button>
          </Link>
          <Link href="/projects">
          <button className="bg-gold bg-opacity-45 py-2 px-4 rounded-3xl font-bold text-gray-800 hover:bg-opacity-85 hover:text-white border-2 border-gold hover:border-2 hover:border-gray-400 transition-all duration-300">
            PROJECTS
          </button>
          </Link>
        </div>
      </div>
      <div className="">
        <ThreeDCard />
      </div>
    </section>
  );
}
