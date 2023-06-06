import { TypesHomePage } from "@/types/schemas/homepage";
import { configSchema } from "../config/config";
import { createClient, groq } from "next-sanity";

export async function getHomePage(): Promise<TypesHomePage> {
  const query = groq`*[_type == "homepage"][0]{
      greetingHero,
      nameHero,
      nameHero,
      lastName,
      apresetationHero,
      occupationHero,
      "imageHero": image.asset->url
  }`;
  const res = await createClient(configSchema).fetch(query);
  // console.log(res);
  return res;
}
