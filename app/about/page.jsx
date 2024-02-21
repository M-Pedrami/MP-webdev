//ICONS
import { DiPostgresql } from "react-icons/di";
import { TbSql } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { SiContentful } from "react-icons/si";
import { TbBrandNextjs, TbBrandVite } from "react-icons/tb";
import { SiTsnode } from "react-icons/si";
import {
  FaPython,
  FaHtml5,
  FaCss3,
  FaJs,
  FaNode,
  FaReact,
  FaAngular,
} from "react-icons/fa6";

//Tooltip
import { Tooltip } from "../Libraries";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <section className="about lg:flex-row flex flex-col gap-5 lg:items-start px-10 py-10 lg:p-32">
        <div className=" lg:w-1/2 flex flex-col gap-10">
          <h1 className="text-7xl pl-5 font-bold border-l-8 border-black">
            About Me
          </h1>
          <div className="logos flex flex-col gap-10">
            <Tooltip
              className="bg-transparent backdrop-blur-md border-gold border-2  font-semibold"
              placement="right-center"
              content={<img src="/WBS.jpg"></img>}
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}
            >
              <img src="/wbs.png" className="w-1/2" />
            </Tooltip>
            <Tooltip
              className="bg-transparent backdrop-blur-md border-gold border-2  font-semibold"
              placement="right-center"
              content={<img src="/Master.jpg" className="w-1/2 m-auto"></img>}
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}
            >
              <img src="/unifreiburg.png" className="w-1/2" />
            </Tooltip>
            <Link href="https://uni-freiburg.academia.edu/maziarpedrami" target="blank">
            <img  src="/academia.edu.png" className="w-1/2" />
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 text-justify flex flex-col gap-5">
          <p>
            Greetings, world 👋 ! I'm Maziar Pedrami, your polyglot ‍🌍 with a
            techy streak . Over 14 years, I've mastered the art of translating
            ideas across languages , music , and the digital sphere . Think of
            me as your communication magician 🧙‍♂️, bridging the gap between words
            and wonders ✨.
          </p>{" "}
          <p>
            My mind bridges the gap between language and tech. A linguistics
            master's unlocked the secrets of communication, while an intensive
            web dev course equipped me to build modern apps and websites. I
            continuously embrace cutting-edge tech, ensuring my projects are
            fresh and innovative. Want proof? Have a look at my recent <Link href="/projects"><span className=" underline-offset-2  underline font-bold">Projects</span></Link> or some of my publicly available  <Link href="https://uni-freiburg.academia.edu/maziarpedrami" target="blank"><span className=" underline-offset-2 underline font-bold ">Academic Papers</span></Link>. Dive in and let's create something remarkable
            together! Have A look at my recent certificates and publications <span className=" hidden lg:inline-block ">on the left ⬅️</span><span className=" inline-block lg:hidden">Up top 🡹</span>
          </p>
          <p>
            Have I picked your interest? Then what are you waiting for?Let's explore how I can translate your vision into something remarkable.😊
          </p>
        </div>
      </section>
      <section className="about lg:flex-row flex flex-col gap-5 lg:gap-28 lg:items-start px-10 py-10 lg:p-32">
        <div className=" lg:w-1/2 flex flex-col gap-10">
          <h1 className="text-7xl text-left pl-5 font-bold border-l-8 border-black">
            My Tech Stack
          </h1>
          <div className="text-justify flex flex-col gap-10">
            <p>
            From data depths to user interfaces, my tech stack is a diverse arsenal I wield to bring web applications to life. On the backend, I leverage the agility of <span className="italic font-semibold">Node.js</span> and <span className="italic font-semibold">Express.js</span> ⚡️, ensuring powerful and efficient server-side operations. I further solidify my code with TypeScript's robust typing, guaranteeing both functionality and maintainability.
            </p>
            <p>
            For data 🛢️, I'm comfortable navigating both the structured world of <span className="italic font-semibold">SQL</span>  and the flexible realm of <span className="italic font-semibold">NoSQL</span> databases. This allows me to tailor data storage to your specific needs, ensuring information stays organized and accessible. 
            </p>
            <p>On the frontend 🖥️, I switch between React's component-based magic and the framework flexibility of <span className="italic font-semibold">Next.js</span> and <span className="italic font-semibold">Vite.js</span>, all while keeping an ace up my sleeve with <span className="italic font-semibold">Angular's</span> structured approach. This versatility guarantees I can craft user interfaces that are not only visually appealing but also intuitive and responsive.
              </p>
          </div>
        </div>
        <div className="lg:w-1/2 flex flex-col gap-10">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center items-center">
            <h1 className="text-xl font-semibold border-l-4 border-black pl-5">
              Databases
            </h1>
            <div className="flex text-8xl ">
              <Tooltip
                className="bg-gray-700 border-gold border-2  font-semibold"
                content={<span>Elephant SQL</span>}
                animate={{
                  mount: { scale: 1, y: 0 },
                  unmount: { scale: 0, y: 25 },
                }}
              >
                <DiPostgresql className="hover:text-gold hover:bg-gray-700 rounded-full cursor-pointer transition-all duration-300" />
              </Tooltip>
              <TbSql className="hover:text-gold cursor-pointer transition-all duration-300 hover:bg-gray-700 rounded-full" />
              <Tooltip
                className="bg-gray-700 border-gold border-2  font-semibold"
                content={<span>Contentful</span>}
                animate={{
                  mount: { scale: 1, y: 0 },
                  unmount: { scale: 0, y: 25 },
                }}
              >
                <SiContentful className="hover:text-gold cursor-pointer transition-all duration-300 hover:bg-gray-700 rounded-full" />
              </Tooltip>
              <Tooltip
                className="bg-gray-700 border-gold border-2  font-semibold"
                content={<span>MongoDB</span>}
                animate={{
                  mount: { scale: 1, y: 0 },
                  unmount: { scale: 0, y: 25 },
                }}
              >
                <SiMongodb className="hover:text-gold hover:bg-gray-700 rounded-full cursor-pointer transition-all duration-300" />
              </Tooltip>
            </div>
          </div>
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center items-center">
            <h1 className="text-xl font-semibold border-l-4 border-black pl-5">
              Backend
            </h1>
            <div className="flex text-8xl">
              <Tooltip
                className="bg-gray-700 border-gold border-2  font-semibold"
                content={<span>Node.js</span>}
                animate={{
                  mount: { scale: 1, y: 0 },
                  unmount: { scale: 0, y: 25 },
                }}
              >
                <FaNode className="hover:text-gold hover:bg-gray-700 rounded-full cursor-pointer transition-all duration-300" />
              </Tooltip>
              <Tooltip
                className="bg-gray-700 border-gold border-2  font-semibold"
                content={<span>Python</span>}
                animate={{
                  mount: { scale: 1, y: 0 },
                  unmount: { scale: 0, y: 25 },
                }}
              >
                <FaPython className="hover:text-gold hover:bg-gray-700 rounded-full cursor-pointer transition-all duration-300" />
              </Tooltip>
              <Tooltip
                className="bg-gray-700 border-gold border-2  font-semibold"
                content={<span>TypeScript</span>}
                animate={{
                  mount: { scale: 1, y: 0 },
                  unmount: { scale: 0, y: 25 },
                }}
              >
                <SiTsnode className="hover:text-gold hover:bg-gray-700 rounded-full cursor-pointer transition-all duration-300" />
              </Tooltip>
            </div>
          </div>
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center items-center">
            <h1 className="text-xl font-semibold border-l-4 border-black pl-5">
              Frontend
            </h1>
            <div className="flex text-8xl">
              <Tooltip
                className="bg-gray-700 border-gold border-2  font-semibold"
                content={<span>HTML5</span>}
                animate={{
                  mount: { scale: 1, y: 0 },
                  unmount: { scale: 0, y: 25 },
                }}
              >
                <FaHtml5 className="hover:text-gold hover:bg-gray-700 rounded-full cursor-pointer transition-all duration-300" />
              </Tooltip>
              <Tooltip
                className="bg-gray-700 border-gold border-2  font-semibold"
                content={<span>CSS3</span>}
                animate={{
                  mount: { scale: 1, y: 0 },
                  unmount: { scale: 0, y: 25 },
                }}
              >
                <FaCss3 className="hover:text-gold cursor-pointer transition-all duration-300 hover:bg-gray-700 rounded-full" />
              </Tooltip>
              <Tooltip
                className="bg-gray-700 border-gold border-2  font-semibold"
                content={<span>JavaScript</span>}
                animate={{
                  mount: { scale: 1, y: 0 },
                  unmount: { scale: 0, y: 25 },
                }}
              >
                <FaJs className="hover:text-gold hover:bg-gray-700 rounded-full cursor-pointer transition-all duration-300" />
              </Tooltip>
            </div>
          </div>
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center items-center">
            <h1 className="text-xl font-semibold border-l-4 border-black pl-5">
              Frameworks and Libraries
            </h1>
            <div className="flex text-8xl">
              <Tooltip
                className="bg-gray-700 border-gold border-2  font-semibold"
                content={<span>React.js</span>}
                animate={{
                  mount: { scale: 1, y: 0 },
                  unmount: { scale: 0, y: 25 },
                }}
              >
                <FaReact className="hover:text-gold hover:bg-gray-700 rounded-full cursor-pointer transition-all duration-300" />
              </Tooltip>
              <Tooltip
                className="bg-gray-700 border-gold border-2  font-semibold"
                content={<span>Angular</span>}
                animate={{
                  mount: { scale: 1, y: 0 },
                  unmount: { scale: 0, y: 25 },
                }}
              >
                <FaAngular className="hover:text-gold cursor-pointer transition-all duration-300 hover:bg-gray-700 rounded-full" />
              </Tooltip>
              <Tooltip
                className="bg-gray-700 border-gold border-2  font-semibold"
                content={<span>Next.js</span>}
                animate={{
                  mount: { scale: 1, y: 0 },
                  unmount: { scale: 0, y: 25 },
                }}
              >
                <TbBrandNextjs className="hover:text-gold hover:bg-gray-700 rounded-full cursor-pointer transition-all duration-300" />
              </Tooltip>
              <Tooltip
                className="bg-gray-700 border-gold border-2  font-semibold"
                content={<span>Vite.js</span>}
                animate={{
                  mount: { scale: 1, y: 0 },
                  unmount: { scale: 0, y: 25 },
                }}
              >
                <TbBrandVite className="hover:text-gold hover:bg-gray-700 rounded-full cursor-pointer transition-all duration-300" />
              </Tooltip>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
