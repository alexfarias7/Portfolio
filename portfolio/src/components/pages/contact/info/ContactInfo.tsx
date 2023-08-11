import { ContacttPagedata } from "@/types/schemas/contactPageInfo";
import CardContactInfo from "./CardContactInfo";
import CardAddresContact from "./cardAddresContact";
import CardNetworkContact from "./CardNetworkContact";

const ContactInfo = ({ contactPage }: ContacttPagedata) => {
  return (
    <div className="flex flex-wrap justify-between xl:justify-center  gap-x-10  gap-y-8   md:mx-auto ">
      {contactPage.mycontacts.map((contact) => (
        <CardContactInfo
          href={contact.textContact}
          key={`my contact-${contact.title}`}
          icon={contact.iconContact}
          title={contact.title}
          text={contact.descriptionContact}
        />
      ))}
      <CardAddresContact
        icon={contactPage.myAddress.iconContact}
        text={contactPage.myAddress.descriptionContact}
        title={contactPage.myAddress.title}
      />
      <CardNetworkContact contactPage={contactPage} />
    </div>
  );
};

export default ContactInfo;
