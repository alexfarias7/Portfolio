import { KnownTech } from "./projectsInfo";

export type Social = {
  name: string;
  url: string;
  iconSvg: string;
};

export type HomePageInfo = {
  greetingHero: string;
  nameHero: string;
  lastName: string;
  apresetationHero: string;
  occupationHero: string;
  imageHero: {
    url: string;
  };
  socials: Social[];
  technologies: KnownTech[];
};

export type HomePageData = {
  pagehome: HomePageInfo;
};
