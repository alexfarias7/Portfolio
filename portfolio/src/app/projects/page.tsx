import ProjectList from "@/components/pages/projects/projectList";
import ProjectsInto from "@/components/pages/projects/projectsIntro/Index";
import { getProjectstData } from "@/queries/ProjectPageInfoQuery";

export const metadata = {
  title: "Projetos",
};

const PageProjects = async () => {
  const { projectsPage } = await getProjectstData();

  return (
    <main>
      <ProjectsInto projectsIntro={projectsPage} />
      <ProjectList projectsPage={projectsPage.projectInfo} />
    </main>
  );
};

export default PageProjects;
