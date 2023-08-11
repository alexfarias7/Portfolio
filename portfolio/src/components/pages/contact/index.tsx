"use client";

import SectionTitle from "@/components/TitleSection";
import React from "react";
import FormIcon from "@/components/Icons/Form";
import Form from "./form/ContactForm";
import ContactInfo from "./info/ContactInfo";
import { ContacttPagedata } from "@/types/schemas/contactPageInfo";

const ContactForm = ({ contactPage }: ContacttPagedata) => {
  return (
    <section className="mt-[100px] h-[calc(100vh-100px)] md:h-max md:mt-[80px]">
      <div className="container-max flex justify-between gap-20 md:flex-col-reverse  items-center ">
        <Form />

        <div className="flex flex-1 flex-col  self-start md:h-[calc(100vh-80px)]">
          <SectionTitle title="Fale comigo" punctuation="!" />
          <div className="w-full  flex flex-col ">
            <p className="mb-8 ">{contactPage.messageContact}</p>
            <ContactInfo contactPage={contactPage} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
