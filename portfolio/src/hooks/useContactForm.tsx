import { schmeaContactForm } from "@/components/pages/contact/form/contactFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

type ContactFormData = z.infer<typeof schmeaContactForm>;

export const useContactForm = () => {
  const {
    handleSubmit,
    register,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm<ContactFormData>({
    mode: "all",
    criteriaMode: "all",
    reValidateMode: "onChange",
    resolver: zodResolver(schmeaContactForm),
  });

  console.log(errors);

  const handleform = (data: ContactFormData) => {
    console.log({ data });
    reset();
  };

  return {
    errors,
    register,
    handleSubmit,
    handleform,
  };
};
