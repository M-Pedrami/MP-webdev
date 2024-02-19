import Link from "next/link";
import { Typography } from "../Libraries";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import { GrContactInfo } from "react-icons/gr";

export function Footer() {
  return (
    <footer
      className="w-full p-8"
      style={{
        backgroundImage: `url("/FooterBackground.jpg")`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12  text-center md:justify-between xl:justify-evenly">
        <img src="/crop_title.png" alt="logo-ct" className=" w-64" />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            
            <Typography
              as="a"
              href="/contact"
              className="text-gold font-normal transition-colors hover:text-white focus:text-gray-300"
            >
              CONTACT
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="/about"
              className="text-gold font-normal transition-colors hover:text-white focus:text-gray-300 "
            >
              ABOUT
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="/projects"
              className="text-gold font-normal transition-colors hover:text-white focus:text-gray-300"
            >
              PROJECTS
            </Typography>
          </li>
        </ul>
     
      </div>
      <div className="flex justify-center space-x-4 text-white text-5xl mt-5  ">
      <Link href="https://www.linkedin.com/in/maziar-pedrami" target="blank">
        <FaLinkedinIn className="hover:text-gold transition-all duration-500 cursor-pointer" />
        </Link>
        <Link href="https://github.com/M-Pedrami" target="blank">
        <FaGithub className="hover:text-gold transition-all duration-500 cursor-pointer" />
        </Link>
        <Link href="https://bold.pro/my/maziar-pedrami" target="blank">
        <GrContactInfo className="hover:text-gold transition-all duration-500 cursor-pointer" />
        </Link>
      </div>
      <hr className=" m-auto my-4 w-52 border-2  border-gold rounded-full" />
      <Typography color="blue-gray" className="text-white text-center font-normal md:block ">
        &copy; 2024 Maziar Pedrami
      </Typography>
    </footer>
  );
}
