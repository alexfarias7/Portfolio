"use client";

import { ContacttPagedata } from "@/types/schemas/contactPageInfo";
import CardContactInfo from "./CardContactInfo";
import CardAddresContact from "./cardAddresContact";
import CardNetworkContact from "./CardNetworkContact";
import { motion } from "framer-motion";

const ContactInfo = ({ contactPage }: ContacttPagedata) => {
  return (
    <motion.div className="flex flex-wrap justify-between xl:justify-center  gap-x-10  gap-y-8   md:mx-auto ">
      {contactPage.mycontacts.map((contact, i) => (
        <motion.div
          key={`my contact-${contact.title}`}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, delay: i * 0.2 }}
        >
          <CardContactInfo
            href={contact.textContact}
            icon={contact.iconContact}
            title={contact.title}
            text={contact.descriptionContact}
          />
        </motion.div>
      ))}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <CardAddresContact
          icon={contactPage.myAddress.iconContact}
          text={contactPage.myAddress.descriptionContact}
          title={contactPage.myAddress.title}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <CardNetworkContact contactPage={contactPage} />
      </motion.div>
    </motion.div>
  );
};

export default ContactInfo;
