"use client"
import Image from "next/image";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import {motion} from 'framer-motion';
import { fadeIn } from "../utils/motion";

const AboutMe = () => {
  return (
    <section id="about-me" className="grid grid-cols-1 lg:grid-cols-2 justify-evenly py-10 gap-10 items-center primary-bg w-full space-x-4 px-4 lg:px-10 h-full ">
      <motion.div
      variants={fadeIn("up", "spring",1 * 0.25, 0.75)}
      initial="hidden"
      whileInView="show"
      className="w-full oder-last lg:order-first">
        <Image
          src="/animate.svg"
          alt="software"
          width={500}
          height={500}
          className="mx-auto"
        />
      </motion.div>

      <motion.div
      variants={fadeIn("up", "spring",1 * 0.35, 0.75)}
      initial="hidden"
      whileInView="show"
      className="w-full card-bg rounded-lg p-10">

          <motion.h1
          variants={fadeIn("up", "spring",1 * 0.50, 0.75)}
          initial="hidden"
          whileInView="show"
          className="text-[55px] text-white font-bold ">About Me</motion.h1>
          <motion.p
          variants={fadeIn("up", "spring",1 * 0.75, 0.75)}
          initial="hidden"
          whileInView="show"
          className="text-white text-xl">
            I am a Full-Stack developer and technology consultant for startups
            and enterprises with 3+ years of experience in software product
            development. I am specialized in solving your business problems in
            an optimized way. I do develop a roadmap to make your Software
            Applications project successful.
          </motion.p>
        </motion.div>
    </section>
  );
};

export default AboutMe;
