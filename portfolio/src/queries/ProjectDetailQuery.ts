import { ProjectPageData } from "@/types/schemas/projects";
import { fetchHygraohQuery } from "@/utils/fetchHygraphQuery";

export const getProjectDetails = async (
  slug: string
): Promise<ProjectPageData> => {
  const query = `

  query ProjectQuery {
    projectPage(where: {slug: "${slug}"}) {
      pageThumbnail {
      url
    }
    thumbnail {
      url
    }
    
    sections {
      title
      image {
        url
      }
    }
    
     title
    shortDescription
    description 
    
    technologies {
      name
    }
    liveProjectUrl
    githubUrl
  
    }
  }

  `;
  const data = fetchHygraohQuery(
    query,
    1000 * 60 * 60 * 24 // 1 day
  );

  return data;
};
