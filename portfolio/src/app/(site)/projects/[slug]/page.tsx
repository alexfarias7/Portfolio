import ProjectDetails from "@/components/pages/project/projectDetails";
import ProjectSections from "@/components/pages/project/projectSections";
import { getProjectDetails } from "@/queries/ProjectDetailQuery";
import {
  ProjectPageData,
  ProjectsPageStaticData,
} from "@/types/schemas/projects";
import { fetchHygraohQuery } from "@/utils/fetchHygraphQuery";
import { Metadata } from "next";

import React from "react";

type ProjectProps = {
  params: {
    slug: string;
  };
};

const Project = async ({ params: { slug } }: ProjectProps) => {
  const { projectPage } = await getProjectDetails(slug);

  console.log(projectPage);

  return (
    <div className="mt-[200px] ">
      <ProjectDetails projectPage={projectPage} />
      <ProjectSections sections={projectPage.sections} />
    </div>
  );
};

export default Project;

export async function generateStaticParams() {
  const query = `
    query ProjectsSlugsQuery {
      projectPages(first: 100) {
        slug
      }
    }
  `;
  const { projectPages } = await fetchHygraohQuery<ProjectsPageStaticData>(
    query
  );

  return projectPages;
}

export async function generateMetadata({
  params: { slug },
}: ProjectProps): Promise<Metadata> {
  const data = await getProjectDetails(slug);
  const project = data.projectPage;

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      images: [
        {
          url: project.thumbnail.url,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}
