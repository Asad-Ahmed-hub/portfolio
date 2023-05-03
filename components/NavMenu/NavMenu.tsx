"use client";
import { Fragment, useState } from "react";
import Image from "next/image";
import React from "react";
import Panaverselogo from "../../public/panaverselogo.webp";
import Link from "next/link";
import { useRouter } from 'next/navigation'
import { menu } from "@/data/data";
import { usePathname, useSearchParams } from "next/navigation";
import useMenu from "../../app/hooks/useMenu";
import { Menu } from "@/DataType/DataType";
import { motion, AnimatePresence } from "framer-motion";

import { GiHamburgerMenu } from "react-icons/gi";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { FiArrowUpRight } from "react-icons/fi";
import { fadeIn } from "../utils/motion";

const NavMenu = () => {
  //get url

  const [mobiletoogle, setMobileToogle] = useState<boolean>(false);
  const [desktoptoogle, setDesktopToogle] = useState<boolean>(false);
  const [mobilecourseToogle, setMobileCourseToogle] = useState<boolean>(false);

  // tab styles on onClick
  const desktop_toogle_style: string = desktoptoogle
    ? `hidden md:block`
    : "hidden";
  const mobile_course_toogle: string = mobilecourseToogle ? "" : "hidden";
  const course_tab_style: string = desktoptoogle ? `text-[#d8102f]` : "";

  //Desktop Menu Click Handling
  const handleNavigation = () => {
    setDesktopToogle(false);
    setMobileCourseToogle(false);
    setMobileToogle(false);
  };
  //Mobile Menu Toogle Handling
  const handleMobileNavigation = () => {
    setMobileToogle(!mobiletoogle);
  };

  const variants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.2,
        staggerDirection: 1,
      },
    },
    closed: {
      opacity: 0,
      x: "-100%",
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    },
  };

  return (
    <>
      <div className="flex justify-center items-center content-center py-6  px-4 lg:px-10 sticky inset-x-0 top-0 z-30 primary-bg bg-opacity-50  w-full shadow-xl ">
        <div className="">
          <Link href={"/"} title="Panaverse Dao" onClick={handleNavigation}>
            <h1 className="text-white  text-3xl font-bold">Asad Ahmed</h1>
          </Link>
        </div>
        <div className="hidden  md:block  flex-grow">
          <ul className="flex justify-center items-center  text-white text-lg space-x-6">
            {menu.map((item, index) => (
                  <Link
                    href={item.url}
                    title={item.title}
                    key={item.id}
                    onClick={handleNavigation}
                  >
                    <motion.li
                    whileHover={{ scale: 1.1,  }}
                      key={item.id}
                      className={`lg:text-lg xl:text-lg 2xl:text-lg font-bold mx-1 ${
                        "hover:border-b-2 hover:border-b-white transition-all  transform-x "}`}
                    >
                      {item.title}
                    </motion.li>
                  </Link>
            ))}
          </ul>
        </div>
        <div className="justify-end ml-auto">
          <Link
            href={"https://www.panaverse.co/"}
            onClick={handleNavigation}
            className="hidden md:block"
          >
            <Link href="https://www.linkedin.com/in/asad-ahmed1/" className="bg-white text-black hover:bg-black hover:text-white hover:border-2 hover:border-white px-6 py-3 rounded-sm hover:bg-gradient-to-bl  text-[15px] font-extrabold flex space-x-2 justify-center items-center">
              <span>Lets Talk</span>
              <span>
                <FiArrowUpRight size={20} />
              </span>
            </Link>
          </Link>
          {!mobiletoogle ? (
            <GiHamburgerMenu
              color="#fff"
              size={30}
              onClick={handleMobileNavigation}
              className="block md:hidden"
            />
          ) : (
            <RxCross2
              color="#fff"
              size={30}
              onClick={handleMobileNavigation}
              className="block md:hidden font-bold"
            />
          )}
        </div>
      </div>
      <motion.nav
        animate={mobiletoogle ? "open" : "closed"}
        variants={variants}
        className={`md:hidden ${
          mobiletoogle
            ? "primary-bg h-screen w-[80%] fixed left-0 top-0 primary-bg z-50 overflow-y-auto"
            : "hidden"
        } `}
      >
        <ul className="w-full flex flex-col justify-center items-start  text-white text-lg ">
          {menu.map((item, index) => (
                <Link
                  href={item.url}
                  title={item.title}
                  key={item.id}
                  onClick={handleNavigation}
                >
                  <li
                    key={item.id}
                    className={`p-3 hover:rounded-lg  lg:text-lg xl:text-lg 2xl:text-lg font-bold mx-1 ${
                       "hover:border-b-2 transition-all  translate-x-2 border-white"
                    }`}
                  >
                    {item.title}
                  </li>
                </Link>
          ))}
        </ul>
      </motion.nav>
    </>
  );
};

export default NavMenu;
