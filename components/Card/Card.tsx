"use client"
import { Project } from "@/DataType/DataType";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { fadeIn } from "../utils/motion";
import {motion} from 'framer-motion';
const Card = ({item}: {item:Project}) => {
    const {id, title, image, description,link} = item;
  return (
    <motion.div
    whileHover={{ scale: 1.1,  }}
    key={id}
    variants={fadeIn("up", "spring", id * 0.5, 0.75)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="w-full card-bg  z-20 rounded-lg shadow ">
      <a href="#">
        <Image
          className="rounded-t-lg w-full"
          src={image}
          alt={title}
          width={400}
          height={400}
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-white ">
            {description}
        </p>
        <Link href={link} title={title} target="_blank" >
        <button className='bg-white hover:bg-black hover:text-white text-black hover:border-2 hover:border-white px-6 py-3 my-2 rounded-sm hover:bg-gradient-to-bl  text-[15px] font-extrabold flex space-x-2 justify-center items-center'><span>Visit Now</span><span><FiArrowUpRight size={20} /></span></button>
        </Link>
      </div>
    </motion.div>
  );
};

export default Card;
