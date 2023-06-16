export type KnownTech = {
  iconSvg: string;
  name: string;
  startDate: string;
};

export type Technology = {
  name: string;
};

export type ProjectSection = {
  title: string;
  image: {
    url: string;
  };
};

export type Project = {
  slug: string;
  thumbnail: {
    url: string;
  };
  title: string;
  shortDescription: string;
  technologies: Technology[];
  pageThumbnail: {
    url: string;
  };
  sections: ProjectSection[];
  description: string;
  liveProjectUrl?: string;
  githubUrl?: string;
};
