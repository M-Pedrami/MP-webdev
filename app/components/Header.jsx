import Link from "next/link";
import Image from "next/image";
import Brand from "../../public/Brand.png";
import Hamburger from "./Hamburger";
import { MdOutlineMail } from "react-icons/md";

export default function Header() {
  return (
    <header
      className="group flex justify-between pt-2 pb-2 px-20 items-center hover-underline-animation shadow-xl xl:px-44 xl:justify-evenly "
      style={{
        backgroundImage: `url("/HeaderBackground.jpg")`,
      }}
    >
      <div className="left flex items-center gap-5">
        <Link href="mailto:pedrami@proton.me">
          <MdOutlineMail className="cursor-pointer lg:text-5xl text-3xl hover:bg-black hover:lg:p-2 hover:p-1 hover:rounded-full hover:border-white hover:border-4 transition-all duration-300 text-gold" />
        </Link>
      </div>
      <div className="center  border-4 border-blue-gray-100 rounded-full group-hover:border-gold transition-all  duration-500">
        <Link href="/">
          <Image src={Brand} alt="Logo" className="w-20 lg:w-28" />
        </Link>
      </div>
      <div className="right">
        <Hamburger />
      </div>
    </header>
  );
}
