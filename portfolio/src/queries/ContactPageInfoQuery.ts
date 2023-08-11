import { ContacttPagedata } from "@/types/schemas/contactPageInfo";
import { fetchHygraohQuery } from "@/utils/fetchHygraphQuery";

export const getPageCotactInfoQuery = async (): Promise<ContacttPagedata> => {
  const query = `
    query PageContactQuery {
        contactPage(where: {id: "cll5vimwu29o60am191sy5j2x"}) {
          messageContact
          myAddress{
            title
            descriptionContact
            iconContact
          }
          mycontacts{
            title
            descriptionContact
            textContact
            iconContact
          }
          networks{
            iconSvg
            url
          }
        }
      }
        
      `;
  return fetchHygraohQuery(query, 60 * 60 * 24);
};
