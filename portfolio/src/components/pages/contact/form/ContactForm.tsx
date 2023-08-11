"use client";

import BtnIcon from "@/components/Buttons/BtnIcon";
import { useContactForm } from "@/hooks/useContactForm";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import ContactFormBtn from "./ContactFormBtn";

const Form = () => {
  const { errors, handleSubmit, handleform, register, isSubmitting } =
    useContactForm();

  return (
    <form
      className=" shadow-md border-solid border-purple7 border-[1px] rounded-lg mt-2 md:mt-0 bg-blue4 flex flex-col gap-6 w-max h-max p-5"
      onSubmit={handleSubmit(handleform)}
    >
      <div className="flex gap-5 lg:flex-col lg:gap-6">
        <div className="relative">
          <label
            className="block text-blue0 text-lg sm:text-sm font-firamono font-bold mb-1"
            htmlFor="name"
          >
            Nome
          </label>
          <input
            placeholder="Digite o seu nome"
            type="text"
            className="w-[240px] h-12 bg-blue7 rounded-lg placeholder:text-gray-500 font-firamono font-medium text-lg focus:bg-blue0   text-blue0 focus:text-purple7  p-4 focus:outline-none focus:ring-2 ring-purple7"
            required
            id="name"
            {...register("contactForm.name")}
          />
          {errors.contactForm?.name?.message && (
            <span className="text-purple5  text-sm font-firamono font-normal absolute -bottom-[20px] left-0">
              {errors.contactForm?.name?.message}
            </span>
          )}
        </div>
        <div className="relative">
          <label
            className="block text-blue0 text-lg sm:text-sm font-firamono font-bold mb-1"
            htmlFor="email"
          >
            Email
          </label>
          <input
            placeholder="Digite o seu e-mail"
            type="email"
            className="w-[240px] h-12 bg-blue7 rounded-lg placeholder:text-gray-500 font-firamono font-medium text-lg focus:bg-blue0   text-blue0 focus:text-purple7  p-4 focus:outline-none focus:ring-2 ring-purple7"
            id="email"
            {...register("contactForm.email")}
          />
          {errors.contactForm?.email?.message && (
            <span className="text-purple5  text-sm font-firamono font-normal absolute -bottom-[20px] left-0">
              {errors.contactForm?.email?.message}
            </span>
          )}
        </div>
      </div>
      <div className="relative">
        <label
          className="block text-blue0 text-lg sm:text-sm font-firamono font-bold mb-1"
          htmlFor="subject"
        >
          Assunto
        </label>
        <input
          placeholder="Digite o seu assunto"
          type="text"
          className="w-full h-12 bg-blue7 rounded-lg placeholder:text-gray-500 font-firamono font-medium text-lg focus:bg-blue0   text-blue0 focus:text-purple7  p-4 focus:outline-none focus:ring-2 ring-purple7"
          required
          id="subject"
          {...register("contactForm.subject")}
        />
        {errors.contactForm?.subject?.message && (
          <span className="text-purple5  text-sm font-firamono font-normal absolute -bottom-[20px] left-0">
            {errors.contactForm?.subject?.message}
          </span>
        )}
      </div>
      <div className="relative">
        <label
          className="block text-blue0 text-lg sm:text-sm font-firamono font-bold mb-1"
          htmlFor="message"
        >
          Sua mensagem
        </label>
        <textarea
          placeholder="Digite a sua mensagem"
          className="resize-none w-full h-[120px] rounded-lg   p-2 focus:outline-none focus:ring-2    text-blue0 focus:text-purple7
      bg-blue7  placeholder:text-gray-500 font-firamono font-medium text-lg focus:bg-blue0   ring-purple7
      "
          maxLength={500}
          id="message"
          {...register("contactForm.text")}
        />
        {errors.contactForm?.text?.message && (
          <span className="text-purple5  text-sm font-firamono font-normal absolute -bottom-[20px] left-0">
            {errors.contactForm?.text?.message}
          </span>
        )}
      </div>
      <ContactFormBtn
        text="Enviar"
        icon={<FaArrowRight size={18} className="" />}
        disabled={isSubmitting}
      />
      {/*       <BtnIcon text="Enviar" icon={<FaArrowRight size={18} className="" />} />
       */}{" "}
    </form>
  );
};

export default Form;
