import z from "zod";

export const schmeaContactForm = z.object({
  contactForm: z.object({
    name: z.string().min(3, "*Informe um nome válido").max(100).default(""),
    email: z.string().email("*Informe um email válido").default(""),
    subject: z.string().min(3, "*Informe o assunto").max(100).default(""),
    text: z.string().min(3, "*Insira a sua mensagem").max(800).default(""),
  }),
});
