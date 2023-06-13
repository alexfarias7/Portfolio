import { KnownTech } from "./projectsInfo";

export type Social = {
  name: string;
  url: string;
  iconSvg: string;
};

export type FunctionHome = {
  iconSvg: string;
  activity: string;
  activityComplement: string;
  description: string;
};

export type SkillHability = {
  iconSvg: string;
  language: string;
  width: string;
  percent: number;
};

export type SkillNavbar = {
  iconSvg: string;
  language: string;
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
  functions: FunctionHome[];
  skillInfoFrontEnd: {
    iconSvg: string;
  };
  skillInfoBackend: {
    iconSvg: string;
  };
  skillsFrontEnd: SkillHability[];
  skillsBackEnd: SkillHability[];
  frontEndNav: SkillNavbar;
  backEndNav: SkillNavbar;
};

export type HomePageData = {
  pagehome: HomePageInfo;
};
