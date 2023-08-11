export type myAddressType = {
  title: string;
  descriptionContact: string;
  iconContact: string;
};

export type networkType = {
  iconSvg: string;
  url: string;
};

export type mymycontactsType = {
  title: string;
  descriptionContact: string;
  textContact: string;
  iconContact: string;
};

export type ContactPageInfo = {
  messageContact: string;
  myAddress: myAddressType;
  mycontacts: mymycontactsType[];
  networks: networkType[];
};

export type ContacttPagedata = {
  contactPage: ContactPageInfo;
};
