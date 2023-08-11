import { schmeaContactForm } from "@/components/pages/contact/form/contactFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

type ContactFormData = z.infer<typeof schmeaContactForm>;

export const useContactForm = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    mode: "all",
    criteriaMode: "all",
    reValidateMode: "onChange",
    resolver: zodResolver(schmeaContactForm),
  });

  const handleform = async (data: ContactFormData) => {
    try {
      await axios.post("/api/contact", data);
      toast.success("Mensagem enviada com sucesso");
      reset();
    } catch (error) {
      toast.error("Ocorreu um erro ao enviar a mensagem");
    }
  };

  return {
    errors,
    register,
    handleSubmit,
    isSubmitting,
    handleform,
  };
};
