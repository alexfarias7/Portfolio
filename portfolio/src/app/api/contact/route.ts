import { schmeaContactForm } from "@/components/pages/contact/form/contactFormSchema";
import axios from "axios";
import { NextResponse } from "next/server";

const WEBHOOK_URL = process.env.WEBHOOK_URL!;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { contactForm } = schmeaContactForm.parse(body);

    const messageData = {
      embeds: [
        {
          title: "Mensagem de Contato",
          color: 0x4983f5,
          fields: [
            {
              name: "Nome",
              value: contactForm.name,
              inline: true,
            },
            {
              name: "E-mail",
              value: contactForm.email,
              inline: true,
            },
            {
              name: "Assunto",
              value: contactForm.subject,
              inline: true,
            },
            {
              name: "Mensagem",
              value: contactForm.text,
            },
          ],
        },
      ],
    };

    await axios.post(WEBHOOK_URL, messageData);

    return NextResponse.json({
      message: "Mensagem enviada com sucesso!",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}
