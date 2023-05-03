"use client"
import Image from "next/image";
import React from "react";
import { fadeIn } from "../utils/motion";
import {motion} from 'framer-motion';
const Progress = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 justify-evenly py-10 gap-10 items-center primary-bg w-full space-x-4 px-4 lg:px-10 h-full ">

          <motion.div
          variants={fadeIn("up", "spring",1 * 0.35, 0.75)}
          initial="hidden"
          whileInView="show"
          className="w-full card-bg rounded-lg p-10">
            <div className=''>
            <motion.h1
            variants={fadeIn("up", "spring",1 * 0.50, 0.75)}
            initial="hidden"
            whileInView="show"
            className="text-[55px] text-white font-bold ">See My growth, progress, and evolution</motion.h1>
              <motion.p
              variants={fadeIn("up", "spring",1 * 0.75, 0.75)}
              initial="hidden"
              whileInView="show"
              className="text-white text-xl">
              My mission is to leverage technology to push beyond the limits of what is believed to be possible, advance the tech industry, challenge conventional thinking about solutions, and make a meaningful and lasting impact on society.
              </motion.p>
            </div>
          </motion.div>
          <motion.div 
          variants={fadeIn("up", "spring",1 * 0.25, 0.75)}
          initial="hidden"
          whileInView="show"
          className="w-full ">
            <Image src='/progress-image.webp' alt='software' width={500} height={500} className=' mx-auto' />
          </motion.div>
    </section>
  );
};

export default Progress;
