"use client"
import React, { useState } from "react";
import FiArrowUpRight from "react-icons/fi";
import { fadeIn } from "../utils/motion";
import {motion} from 'framer-motion';
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  ErrorMessage,
  FieldProps,
} from 'formik'
import * as Yup from "yup";
interface MyFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const [sending, setSending] = useState<boolean>(false);
    
  const initialValues: MyFormValues = {
      name: "",
      email: "",
      subject: "",
      message: ""
  }

  const FormSchema = Yup.object().shape({
      name: Yup.string()
        .min(1, 'Too Short!')
        .required('Required'),
      email: Yup.string()
        .email('Invalid email')
        .required('Required'),
      subject: Yup.string()
      .min(1, 'Too Short!')
      .required('Required'),
      message: Yup.string()
      .min(1, 'Too Short!')
      .required('Required'),
    });
  
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
        <Formik
            enableReinitialize
         initialValues={initialValues}
         validationSchema={FormSchema}
         onSubmit={(values, actions) => {
            setSending(true);
           console.log({ values, actions });
           setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);            
           }, 1000);

           setSending(false);
         }}
       >
        {({errors, touched, isSubmitting}) => (
                   <Form className="card-bg p-10">
                   <div className="flex flex-col md:flex-row justify-center items-center w-full">
                   <div className="w-full md:1/2 mx-2">
                   <label
                        className="block mb-2 text-sm font-medium text-white "
                      >
                      Name <span className="text-[#d8102f]">*</span>
                      </label>
                   <Field id="name" name="name" placeholder="Name" className=" p-2 w-full  ring-2 ring-gray-200  bg-[#F4F7FA] rounded-sm" />
                   {errors.name && touched.name ? (
                     <div className="text-[#d8102f]">{errors.name}</div>
                   ) : null}
        
                   </div>
                   <div className="w-full md:1/2 mx-2">
                   <label
                        className="block mb-2 text-sm font-medium text-white "
                      >
                      Email <span className="text-[#d8102f]">*</span>
                      </label>
                   <Field id="email" name="email" placeholder="Email" className=" p-2 w-full  ring-2 ring-gray-200  bg-[#F4F7FA] rounded-sm" />
                   {errors.email && touched.email ? (
                     <div className="text-[#d8102f]">{errors.email}</div>
                   ) : null}
        
                   </div>                       
                   </div>
                   <div className="flex flex-col md:flex-row justify-center items-center w-full">
                   <div className="w-full m-2">
                   <label
                        className="block mb-2 text-sm font-medium text-white "
                      >
                      Subject <span className="text-[#d8102f]">*</span>
                      </label>
                   <Field id="subject" name="subject" placeholder="Subject" className=" p-2 w-full  ring-2 ring-gray-200  bg-[#F4F7FA] rounded-sm" />
                   {errors.subject && touched.subject ? (
                     <div className="text-[#d8102f]">{errors.subject}</div>
                   ) : null}
        
                   </div>                       
                   </div>
                   <div className="flex flex-col md:flex-row justify-center items-center w-full">
                   <div className="w-full m-2">
                   <label
                        className="block mb-2 text-sm font-medium text-white "
                      >
                      Message <span className="text-[#d8102f]">*</span>
                      </label>
                   <Field id="message" name="message" as="textarea" placeholder="Message" className=" p-2 w-full  ring-2 ring-gray-200  bg-[#F4F7FA] rounded-sm h-40" />
                   {errors.message && touched.message ? (
                     <div className="text-[#d8102f]">{errors.message}</div>
                   ) : null}
                   </div>
                               
                   </div>
                    {isSubmitting ? (<button type="submit"  disabled className={`bg-white flex flex- px-3 lg:px-10 py-3 text-black text-[15px] font-extrabold  mt-2 mx-2 `}>Sending... 
                   </button>) : (<button type="submit"  className={`bg-white flex flex- px-3 lg:px-10 py-3 text-black text-[15px] font-extrabold  mt-2 mx-2`}>Submit 
                   </button>)}
        
        
                 </Form>
        )}
      </Formik>
      </div>
    </section>
  );
};

export default ContactForm;
