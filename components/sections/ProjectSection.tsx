import { PROJECTS } from "@/constants/projects";
import Container from "../Container";
import SubTitle from "../shared/SubTitle";
import Title from "../shared/Title";
import ProjectCard from "../project/ProjectCard";

const ProjectSection = () => {
  return (
    <section className="min-h-screen bg-blue-500" id="project">
      <Container>
        <Title text="Projects" />
        <SubTitle>
          <p>
            실제로 필요성을 느끼는 간단한 사이드 프로젝트를 꾸준히 진행하고
            있습니다. <br />
            제가 개발을 시작한 이유이자 개발자로서 이루고싶은 목표중 하나입니다.
          </p>
        </SubTitle>
        <div className="flex flex-col gap-[30px] py-[50px]">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProjectSection;
