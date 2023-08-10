import z from "zod";

export const schmeaContactForm = z.object({
  contactForm: z.object({
    name: z.string().min(3, "*Informe um nome válido").max(100).default(""),
    email: z.string().email("*Informe um email válido").default(""),
    text: z.string().min(3, "*Insira a sua mensagem").max(800).default(""),
  }),
});
/*  .transform((field) => ({
    contactForm: {
      name: field.contactForm.name,
      email: field.contactForm.email,
      text: field.contactForm.text,
    },
  })); */
