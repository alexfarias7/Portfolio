import { ProjectsPageData } from "@/types/schemas/projects";
import { fetchHygraohQuery } from "@/utils/fetchHygraphQuery";

export const getProjectstData = async (): Promise<ProjectsPageData> => {
  const query = `
  query PageProjectsInfoQuery {
    projectsPage(where: {slug: "projects"}) {
      projectsInfoIntro
      projectsIntroIcon
      projectInfo{
            shortDescription
            slug
            title
            thumbnail {
              url
            }
            technologies {
              name
            }
      }
    }
  }
      `;

  return fetchHygraohQuery(query, 1000 * 60 * 60 * 24);
};
