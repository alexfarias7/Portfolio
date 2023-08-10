"use client";

import BtnIcon from "@/components/Buttons/BtnIcon";
import SectionTitle from "@/components/TitleSection";
import { FaArrowRight } from "react-icons/fa";
import React from "react";
import FormIcon from "@/components/Icons/Form";
import Input from "./Input";
import { useContactForm } from "@/hooks/useContactForm";

const ContactForm = () => {
  const { errors, handleSubmit, handleform, register } = useContactForm();

  return (
    <section className="mt-[120px]">
      <div className="container-max">
        <SectionTitle title="Fale comigo" punctuation="!" />

        <div className="flex justify-between items-center">
          <div className="w-full max-w-[600px]">
            <p className="">
              Se tiver alguma pergunta ou algo a me dizer, não hesite em falar
              comigo! Prometo responder assim que for possível.
            </p>
            <form
              className=" w-full shadow-md rounded-lg mt-2 py-4 px-5 bg-blue4 flex flex-col gap-4"
              onSubmit={handleSubmit(handleform)}
            >
              <div>
                <label
                  className="block text-blue0 text-lg sm:text-sm font-firamono font-bold mb-2"
                  htmlFor="name"
                >
                  Nome
                </label>
                <input
                  placeholder="Digite o seu nome"
                  type="text"
                  className="w-full h-12 bg-blue7 rounded-lg placeholder:text-gray-500 font-firamono font-medium text-lg focus:bg-blue0   text-blue0 focus:text-purple7  p-4 focus:outline-none focus:ring-2 ring-purple7"
                  id="name"
                  {...register("contactForm.name")}
                />
                {errors.contactForm?.name?.message && (
                  <span className="text-purple5  text-sm font-firamono font-normal">
                    {errors.contactForm?.name?.message}
                  </span>
                )}
              </div>

              <div>
                <label
                  className="block text-blue0 text-lg sm:text-sm font-firamono font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  placeholder="Digite o seu e-mail"
                  type="email"
                  className="w-full h-12 bg-blue7 rounded-lg placeholder:text-gray-500 font-firamono font-medium text-lg focus:bg-blue0   text-blue0 focus:text-purple7  p-4 focus:outline-none focus:ring-2 ring-purple7"
                  id="email"
                  {...register("contactForm.email")}
                />
                {errors.contactForm?.email?.message && (
                  <span className="text-purple5  text-sm font-firamono font-normal">
                    {errors.contactForm?.email?.message}
                  </span>
                )}
              </div>
              <div>
                <label
                  className="block text-blue0 text-lg sm:text-sm font-firamono font-bold mb-2"
                  htmlFor="message"
                >
                  Sua mensagem
                </label>
                <textarea
                  placeholder="Digite a sua mensagem"
                  className="resize-none w-full h-[120px] rounded-lg   p-4 focus:outline-none focus:ring-2    text-blue0 focus:text-purple7
                bg-blue7  placeholder:text-gray-500 font-firamono font-medium text-lg focus:bg-blue0   ring-purple7
                "
                  maxLength={500}
                  id="message"
                  {...register("contactForm.text")}
                />
                {errors.contactForm?.text?.message && (
                  <span className="text-purple5  text-sm font-firamono font-normal">
                    {errors.contactForm?.text?.message}
                  </span>
                )}
              </div>
              <BtnIcon
                text="Enviar"
                icon={<FaArrowRight size={18} className="" />}
              />
            </form>
          </div>
          <div className="text-purple5  text-sm font-firamono font-normal">
            <FormIcon />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
