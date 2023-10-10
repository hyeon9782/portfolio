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
            짧은 시간동안 목표를 달성하기 위해 몰입하는 것을 좋아하는 편입니다.
            <br />
            여유가 된다면 해커톤이나 오픈 소스에 참여하는 것을 즐깁니다!
          </p>
        </SubTitle>
        <div>
          <div>React 공식 문서 한국어 번역 참여</div>
          <div>GEN AI Hackathon</div>
          <div>KURLY HACK FESTA 2022</div>
        </div>
      </Container>
    </section>
  );
};

export default ActivitySection;
