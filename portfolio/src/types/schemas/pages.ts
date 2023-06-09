import { AboutPageInfo } from "./aboutpageInfo";
import { HomePageInfo } from "./pageinfo";
import { ProjectsPageData } from "./projects";

/* export type TypesHomePage = {
  greetingHero: string;
  nameHero: string;
  lastName: string;
  occupationHero: string;
  apresetationHero: string;
  image: string;
}; */

export type homePageInfo = {
  homeInfo: HomePageInfo;
};

export type aboutpageInfo = {
  aboutInfo: AboutPageInfo;
};
