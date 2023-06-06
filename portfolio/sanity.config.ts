import schemas from "@/sanity/schemas";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

const config = defineConfig({
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_DATASET!,
  title: process.env.NEXT_PUBLIC_TITLE,
  apiVersion: process.env.NEXT_PUBLIC_API_VERSION,
  basePath: process.env.NEXT_PUBLIC_BASEPATH,
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
