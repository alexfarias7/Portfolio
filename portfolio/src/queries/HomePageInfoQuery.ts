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
    functions{
      iconSvg
      activity
      activityComplement
      description
    }
    skillInfoFrontEnd {
      iconSvg
    }
    skillInfoBackend{
      iconSvg
    }
    skillsFrontEnd{
      iconSvg
      language
      width
      percent
      percentual
  } 
   skillsBackEnd{
     id
     iconSvg
     language
     width
     percent
  } 
  frontEndNav{
    language
    iconSvg
  }
  backEndNav{
    language
    iconSvg
  }

  highlightProjects {
    slug
   thumbnail {
     url
    }
   title
   shortDescription
   technologies {
     name
    }
  } 



    }
  }
    `;

  return fetchHygraohQuery(query, 60 * 60 * 24);
};
