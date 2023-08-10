import React from "react";
import { useForm } from "react-hook-form";
import { ContactFormData, contactFormSchema } from ".";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "./Input";

const InputNome = () => {
  const { register } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  return (
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
  );
};

export default InputNome;
