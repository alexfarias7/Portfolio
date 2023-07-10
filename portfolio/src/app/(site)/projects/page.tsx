import SectionTitle from "@/components/TitleSection";
import ProjectList from "@/components/pages/projects/projectList";
import ProjectsInto from "@/components/pages/projects/projectsIntro/Index";

const PageProjects = () => {
  return (
    <main>
      <ProjectsInto />
      <ProjectList />
    </main>
  );
};

export default PageProjects;
