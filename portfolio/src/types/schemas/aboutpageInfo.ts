import { KnownTech } from "./projectsInfo";

export type AboutPageInfo = {
  description: string;
  knowTetchs: KnownTech[];
};

export type AboutPagedata = {
  aboutpage: AboutPageInfo;
};
