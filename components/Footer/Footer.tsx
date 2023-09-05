"use client";
import { menu } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from 'next/router'
import React from "react";
import { usePathname } from "next/navigation";
import { FaPhoneAlt } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import {motion} from 'framer-motion'
import Typewriter from "typewriter-effect";
import { fadeIn } from "../utils/motion";
const Footer = () => {

  return (
    <footer className="grid grid-cols-1 md:grid-cols-1 lg:md:grid-cols-3 gap-10 py-12  content-center card-bg text-white px-8 lg:px-20">
      <div>
      <Link href={"/"} title="Asad Ahmed">
            <h1 className="text-white  text-3xl font-bold">Asad Ahmed</h1>
      </Link>
      <motion.p
          variants={fadeIn("up", "spring",1 * 1, 0.90)}
          initial="hidden"
          whileInView="show"
          className="text-xl text-white text-justify mt-4">
          Full Stack Developer- NextJS 13.4 | ReactJS | React Native | NextJS | Redux Toolkit |
          NodeJS | Shopify | Wordpress | Woocommerce | JavaScript | TypeScript 
          </motion.p>
      </div>

      <div className="justify-self-start">
        <h1 className="text-2xl heading-style text-left text-white">
          Social Media
        </h1>
        <div className="flex flex-row justify-start gap-4  items-center mt-2">
          <Link
            href={"https://www.facebook.com/asad.ahmed4"}
            title={"facebook"}
          >
            <BsFacebook size={40} className=" hover:text-[#1975f0]"/>
          </Link>
          <Link href={"https://github.com/Asad-Ahmed-hub"} title={"github"}>
          <SiGithub size={40}  className="hover:text-[#78228d]"/>
          </Link>
          <Link href={"https://www.linkedin.com/in/asad-ahmed1/"} title={"Linkedin"}>
          <SiLinkedin size={40}  className="hover:text-[#0A66C2] rounded-full "/>
          </Link>
        </div>
      </div>
      <div>
        <h1 className="text-2xl heading-style text-white">Contact Us</h1>
        <div className="w-full">

          <div className="flex flex-row items-center justify-start w-full space-x-2 pt-4">
            <div>
            <FaPhoneAlt size={30} color="#fff" />
            </div>
            <div>
              <p className="  text-[20px] text-whitetext-center  font-bold hover:border-b-2 hover:border-white">
              <Link href="tel:+92-3072884889">+92-3072884889</Link> 
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start w-full space-x-2 pt-4">
            <div>
            <RiWhatsappFill size={30} color="#fff" />
            </div>
            <div>
              <p className="  text-[20px] text-white text-center  font-bold hover:border-b-2 hover:border-white">
              <Link href="https://wa.me/923072884889">+92-3072884889</Link>
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start w-full space-x-2 pt-4 ">
            <div>
            <MdEmail size={30} color="#fff" />
            </div>
            <div>
              <p className="  text-[20px] text-white text-center  font-bold hover:border-b-2 hover:border-white">
              <Link href="mailto:asad.ahmed2813@gmail.com">asad.ahmed2813@gmail.com</Link>
              </p>
            </div>
          </div>

        </div>
      </div>
      <div className="w-full md:col-span-2 lg:col-span-3 border-t-2 border-gray-500 flex flex-row items-center justify-center  space-x-2 pt-4 ">
        <p className="text-white text-center text-xl font-bold">Designde By <Link href={"https://www.linkedin.com/in/asad-ahmed1/"} title={"Linkedin"} className="border-b-[1px] border-white">Asad Ahmed</Link></p>
      </div>
    </footer>
  );
};

export default Footer;
