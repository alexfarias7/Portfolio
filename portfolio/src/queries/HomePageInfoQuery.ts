import { HomePageData } from "@/types/schemas/pageinfo";
import { fetchHygraohQuery } from "@/utils/fetchHygraphQuery";

export const getPageHomeInfoQuery = async (): Promise<HomePageData> => {
  const query = `
  query PageHomeInfoQuery {
    pagehome(where: {slug: "home"}) {
      greetingHero
      nameHero
      lastName
      apresetationHero 
      occupationHero
      imageHero {
        url
      }
     socials {
      name
      url
      iconSvg
    }
    technologies {
      name
    }
    }
  }
    `;

  return fetchHygraohQuery(query, 60 * 60 * 24);
};
