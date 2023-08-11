import ContactForm from "@/components/pages/contact";
import { getPageCotactInfoQuery } from "@/queries/ContactPageInfoQuery";
import React from "react";

export const metadata = {
  title: "Contato",
};

const PageContatc = async () => {
  const { contactPage } = await getPageCotactInfoQuery();
  return (
    <main>
      <ContactForm contactPage={contactPage} />
    </main>
  );
};

export default PageContatc;
