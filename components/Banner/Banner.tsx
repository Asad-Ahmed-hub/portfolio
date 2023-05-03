"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import {motion} from 'framer-motion'
import Typewriter from "typewriter-effect";
import { fadeIn } from "../utils/motion";

const Banner = () => {
  return (
    <section className="bg-main-background w-full h-[80vh] bg-center bg-cover bg-fixed px-4 lg:px-10 ">
      <div className="flex flex-col  justify-center  items-center  w-full  h-full ">
        <div className="text-center w-2/2">
          <motion.div
          variants={fadeIn("up", "spring",1 * 0.25, 0.75)}
          initial="hidden"
          whileInView="show"
          >
          <Image src="/asad.jpeg" alt="Asad Ahmed" width={200} height={200} className="rounded-full w-50 h-50 mx-auto my-8"/>
          </motion.div>
          <motion.h5 
          variants={fadeIn("up", "spring",1 * 0.50, 0.75)}
          initial="hidden"
          whileInView="show"
          className="text-xl text-white font-bold ">Hello There,</motion.h5>
          <motion.h1
          variants={fadeIn("up", "spring",1 * 0.75, 0.75)}
          initial="hidden"
          whileInView="show"
          className="text-[55px] font-bold text-white ">
            <Typewriter
              options={{
                strings: ["I Am Asad Ahmed", "I Am A Software Engineer"],
                autoStart: true,
                loop: true,
              }}
            />
          </motion.h1>
          <motion.p
          variants={fadeIn("up", "spring",1 * 1, 0.75)}
          initial="hidden"
          whileInView="show"
          className="text-xl text-white text-center">
            I create and maintain modern websites and applications. I solve all
            your business problems.
          </motion.p>
          <motion.div
          variants={fadeIn("up", "spring",1 * 1.25, 0.75)}
          initial="hidden"
          whileInView="show"
          className="mt-10 flex flex-row justify-center items-center">
            <Link href="https://www.linkedin.com/in/asad-ahmed1/" className="bg-white text-black hover:bg-black hover:text-white hover:border-2 hover:border-white px-6 py-3 rounded-sm hover:bg-gradient-to-bl  text-[15px] font-extrabold flex space-x-2 justify-center items-center">
              <span>Lets Talk</span>
              <span>
                <FiArrowUpRight size={20} />
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
