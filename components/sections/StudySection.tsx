import { STUDY } from "@/constants/study";
import Container from "../Container";
import SubTitle from "../shared/SubTitle";
import Title from "../shared/Title";
import StudyCard from "../study/StudyCard";

const StudySection = () => {
  return (
    <section className="h-screen bg-gray-300" id="study">
      <Container>
        <Title text="Study" />
        <SubTitle>
          <p>
            혼자서 공부하는 것도 좋지만 마음이 맞는 사람들과 함께 공부하는 것을
            좋아합니다. <br />
            공부에 목표성을 부여할 수 있고, 서로의 부족한 부분을 채워주는 좋은
            방법이라고 생각합니다.
          </p>
        </SubTitle>
        <div className="flex justify-between">
          {STUDY.map((study, index) => (
            <StudyCard key={index} study={study} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default StudySection;
