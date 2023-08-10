"use client";

import BtnIcon from "@/components/Buttons/BtnIcon";
import SectionTitle from "@/components/TitleSection";
import { FaArrowRight } from "react-icons/fa";
import React, { useState } from "react";
import { useForm, UseControllerProps, useController } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import FormIcon from "@/components/Icons/Form";
import InputNome from "./InputNome";
import Input from "./Input";

export const contactFormSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email(),
  message: z.string().min(1).max(800),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmt = (data: ContactFormData) => {
    console.log(data);
  };

  type FormValues = {
    FirstName: string;
  };

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
              className=" w-full shadow-md rounded-lg mt-10 py-4 px-3 bg-blue4 flex flex-col gap-4"
              onSubmit={handleSubmit(onSubmt)}
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
                  className="w-full h-14 bg-blue7 rounded-lg placeholder:text-gray-500 font-firamono font-medium text-lg focus:bg-blue0 text-blue0 focus:text-purple7 p-4 focus:outline-none focus:ring-2 ring-purple7"
                  id="name"
                  {...register("name")}
                />
              </div>
              {/*               <InputNome /> */}
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
                  className="w-full h-14 bg-blue7 rounded-lg placeholder:text-gray-500 font-firamono font-medium text-lg focus:bg-blue0   text-blue0 focus:text-purple7  p-4 focus:outline-none focus:ring-2 ring-purple7"
                  id="email"
                  {...register("email")}
                />
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
                  className="resize-none w-full h-[138px] rounded-lg   p-4 focus:outline-none focus:ring-2    text-blue0 focus:text-purple7
                bg-blue7  placeholder:text-gray-500 font-firamono font-medium text-lg focus:bg-blue0   ring-purple7
                "
                  maxLength={500}
                  id="message"
                  {...register("message")}
                />
              </div>
              <BtnIcon
                text="Enviar"
                icon={<FaArrowRight size={18} className="" />}
              />
            </form>
          </div>
          <div className="text-blue0 hover:text-purple-500 transition-all">
            <FormIcon />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
