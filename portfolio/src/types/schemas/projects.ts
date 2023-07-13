import { Project } from "./projectsInfo";

/* export type ProjectPageInfo = {
  projectInfo: Project;
}; */

export type ProjectPageData = {
  projectPage: Project;
};

export type ProjectsPageInfo = {
  projectsInfoIntro: string;
  projectsIntroIcon: string;
  projectInfo: Project[];
};

export type ProjectsPageStaticData = {
  projectPages: {
    slug: string;
  }[];
};

export type ProjectsPageData = {
  projectsPage: ProjectsPageInfo;
};
