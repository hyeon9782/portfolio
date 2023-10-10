import Container from "../Container";
import SubTitle from "../shared/SubTitle";
import Title from "../shared/Title";

const ActivitySection = () => {
  return (
    <section className="h-screen bg-purple-200" id="activity">
      <Container>
        <Title text="Activity" />
        <SubTitle>
          <p>
            짧은 시간동안 집중적으로 목표를 위해 노력하는 것을 좋아하는
            편입니다. <br />
            때문에 여유가 된다면 개발과 관련된 다양한 공모전이나 해커톤에
            참가하는 것을 즐깁니다!
          </p>
        </SubTitle>
      </Container>
    </section>
  );
};

export default ActivitySection;
