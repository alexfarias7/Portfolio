import { TypesProject } from "@/types/schemas/projects";
import { createClient, groq } from "next-sanity";
import { configSchema } from "../config/config";

export async function getProjects(): Promise<TypesProject[]> {
  return createClient(configSchema).fetch(
    groq`*[_type == "project"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`
  );
}
export async function getProject(slug: string): Promise<TypesProject> {
  return createClient(configSchema).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`,
    { slug }
  );
}
