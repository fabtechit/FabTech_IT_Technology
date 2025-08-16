import ContactForm from "@/form/ContactForm";

import PageSection from "@/utilits/PageSection";
import React from "react";
import { BiSupport } from "react-icons/bi";
import { FaInfo, FaPhone } from "react-icons/fa";

const page = () => {
  return (
    <div>
      <PageSection second="contact us" />
      <div className="Container py-6">
        <div className="grid xl:grid-cols-2 lg:grid-cols-2 lg:gap-0 gap-12 mt-4">
          <div className=" relative ">
            <div>
              <h2 className="text-xl font-medium">Contact Us</h2>
              <div className="border-b-4 border-primary w-[30px] mt-1"></div>
            </div>

            <div className="mt-4">
              <p className="text-[#262626]/60">
                Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
            </div>
            <div className="mt-8 z-10 relative">
              <p>Numbers:</p>
              <div className="flex items-center gap-2 mt-2">
                <p className="w-[22px] h-[22px] bg-primary flex items-center justify-center text-[#fff] text-[12px] rounded">
                  <FaPhone />
                </p>
                <p className="text-[#262626]/60 group-hover:text-[#262626]">
                  General Inquiries: <a href="tel:+8801313-186576">+8801313-186576</a>
                </p>
              </div>
            </div>

            <div className="mt-4 z-10 relative">
              <p>Email:</p>
              <div className="flex items-center gap-2 mt-2">
                <p className="w-[22px] h-[22px] bg-primary flex items-center justify-center text-[#fff] text-[12px] rounded">
                  <FaInfo />
                </p>
                <p className="text-[#262626]/60 group-hover:text-[#262626]">
                  <a href="mailto:support@fabtechit.com">support@fabtechit.com</a>
                </p>
              </div>

              <div className="flex items-center gap-2 mt-2">
                <p className="w-[22px] h-[22px] bg-primary flex items-center justify-center text-[#fff] text-[12px] rounded">
                  <BiSupport />
                </p>
                <p className="text-[#262626]/60 group-hover:text-[#262626]">
                  <a href="mailto:nazmuss024@gmail.com">nazmuss024@gmail.com</a>
                </p>
              </div>
            </div>

            <div className="mt-4 z-10 relative">
              <p>Shopping Hours:</p>
              <div className="flex items-center gap-2 mt-2">
                <p className="text-[#262626]/60 group-hover:text-[#262626]">
                  Saturday — Thursday 9am – 5pm
                </p>
              </div>

              <div className="flex items-center gap-2 mt-2">
                <p className="text-[#262626]/60 group-hover:text-[#262626]">
                  Friday — Closed
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div>
              <h2 className="text-lg font-medium">Send Us a Message</h2>
              <p className="mt-2 text-[#262626]/60">
                Enter your name, valid email address, and number to contact us
              </p>
            </div>

            <ContactForm />
          </div>
        </div>

        <div
          className="mt-8 rounded"
          style={{ width: "100%", height: "400px" }}
        >
          <iframe
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.205808536635!2d90.41954157500507!3d23.846824478604745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c700094f80c7%3A0x387310a2dcde21ec!2sFabTech.IT!5e0!3m2!1sen!2sbd!4v1755354577039!5m2!1sen!2sbd"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default page;
