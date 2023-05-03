"use client"
import React from "react";
import FiArrowUpRight from "react-icons/fi";
import { fadeIn } from "../utils/motion";
import {motion} from 'framer-motion';
const ContactForm = () => {
  return (
    <section id="contact-us" className="primary-bg px-4 lg:px-10">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <motion.h2
          variants={fadeIn("up", "spring",1 * 0.25, 0.75)}
          initial="hidden"
          whileInView="show"
        className="text-[55px] text-white font-bold text-center">
          Contact Us
        </motion.h2>
        <motion.p
        variants={fadeIn("up", "spring",1 * 0.50, 0.75)}
        initial="hidden"
        whileInView="show"
        className="text-white text-xl text-center  my-8">
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our Business plan? Let us know.
        </motion.p>
        <motion.form 
        variants={fadeIn("up", "spring",1 * 0.75, 0.75)}
        initial="hidden"
        whileInView="show"
        action="#" className="space-y-8 card-bg p-10  rounded-lg my-8">
          <div>
            <label
              className="block mb-2 text-sm font-medium text-white "
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div>
            <label
              className="block mb-2 text-sm font-medium text-white "
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-black bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              className="block mb-2 text-sm font-medium text-white dark:text-gray-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              className="block p-2.5 w-full text-sm text-black bg-gray-50 rounded-lg shadow-sm border border-gray-300 h-40 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-white text-black hover:bg-black hover:text-white hover:border-2 hover:border-white px-6 py-3 rounded-sm hover:bg-gradient-to-bl  text-[15px] font-extrabold flex space-x-2 justify-center items-center"
          >
            Submit
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;
