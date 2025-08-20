import PortfolioCard from "@/features/resume/components/Section/PortfolioCard";
import ProjectCard from "@/features/resume/components/Section/ProjectCard";
import TechStackCard from "@/features/resume/components/Section/TechStackCard";
import EducationCard from "@/features/resume/components/Section/EducationCard";

const OptionalSection = () => {
  return (
    <>
      <TechStackCard />
      <PortfolioCard />
      <ProjectCard />
      <EducationCard />
    </>
  );
};

export default OptionalSection;
