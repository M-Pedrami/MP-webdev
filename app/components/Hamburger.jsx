"use client";
import { Drawer } from "../Libraries";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import { TiThMenu } from "react-icons/ti";
import {
  FaGithub,
  FaLinkedin,
  FaWindowClose,
} from "react-icons/fa";
import { GrContactInfo } from "react-icons/gr";

import "./Hamburger.css";
export default function Hamburger() {
  const [open, setOpen] = useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <>
      <TiThMenu
        onClick={openDrawer}
        className=" cursor-pointer lg:text-5xl text-3xl hover:bg-black hover:lg:p-2 hover:p-1 hover:rounded-full hover:border-white hover:border-4 transition-all duration-300 text-gold"
      />
      <Drawer
        open={open}
        onClose={closeDrawer}
        className="bg-transparent backdrop-blur-md"
        placement="top"
        overlay={false}
        size={850}
      >
        <div className="drawerContainer flex flex-col items-center justify-center h-full w-full gap-10 bg-transparent">
          <div className="Links flex flex-col lg:flex-row gap-10 lg:gap-3 md:mt-20">
            <Link
              href="/contact"
              className="Link h-fit hoverUnderline text-5xl text-black font-bold hover:text-white transition-colors duration-400 "
              onClick={closeDrawer}
            >
              CONTACT <span className="text-red-500">|</span>
            </Link>
            <Link
              href="/projects"
              className="Link h-fit hoverUnderline text-5xl text-black font-bold hover:text-white transition-colors duration-400 "
              onClick={closeDrawer}
            >
              PROJECTS <span className="text-red-500">|</span>
            </Link>

            <Link
              href="/about"
              className="Link h-fit hoverUnderline text-5xl text-black font-bold hover:text-white transition-colors duration-400 "
              onClick={closeDrawer}
            >
              ABOUT <span className="text-red-500">|</span>
            </Link>
          </div>
          <div className="icons  hoverUnderline  flex gap-5 text-7xl cursor-pointer ">
            <Link href="https://github.com/M-Pedrami" target="blank">
            <FaGithub className="hover:text-red-500 transition-colors duration-500 " />
            </Link>
            <Link href="https://www.linkedin.com/in/maziar-pedrami" target="blank">
            <FaLinkedin className="hover:text-blue-900 transition-colors duration-500 " />
            </Link>
            <Link href="https://bold.pro/my/maziar-pedrami" target="blank">
            <GrContactInfo className="hover:text-purple-900 transition-colors duration-500" />
            </Link>
          </div>
          <div className="cursor-pointer hoverUnderline" onClick={closeDrawer}>
            <FaWindowClose className="rounded-sm text-7xl hover:text-red-500 transition-colors duration-500" />
          </div>
        </div>
      </Drawer>
    </>
  );
}
