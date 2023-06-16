import { AboutPagedata } from "@/types/schemas/aboutpageInfo";
import { fetchHygraohQuery } from "@/utils/fetchHygraphQuery";

export const getPageAboutInfoQuery = async (): Promise<AboutPagedata> => {
  const query = `
    query PageAboutQuery {
        aboutpage(where: {slug: "aboutpage"}) {
          knowTetchs {
            iconSvg
            name
            startDate
          }
        }
      }
      
    `;

  return fetchHygraohQuery(query, 60 * 60 * 24);
};
