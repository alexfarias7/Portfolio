"use client";

import SectionTitle from "@/components/TitleSection";
import React from "react";
import FormIcon from "@/components/Icons/Form";
import Form from "./form/ContactForm";
import ContactInfo from "./info/ContactInfo";
import { ContacttPagedata } from "@/types/schemas/contactPageInfo";
import { motion } from "framer-motion";

const ContactForm = ({ contactPage }: ContacttPagedata) => {
  return (
    <section
      className="mt-[100px] h-[calc(100vh-100px)] md:h-max md:mt-[80px] border-solid border-red-600 border-2
"
    >
      <div className="container-max flex justify-between gap-20 md:flex-col-reverse  items-center ">
        <Form />

        <motion.div
          className="flex flex-1 flex-col  self-start md:h-[calc(100vh-80px)]"
          /*       initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }} */
        >
          <SectionTitle title="Fale comigo" punctuation="!" />
          <div className="w-full  flex flex-col ">
            <motion.p
              className="mb-8 "
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              {contactPage.messageContact}
            </motion.p>
            <ContactInfo contactPage={contactPage} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
