import Container from "../Container";
import Accordion from "../shared/Accordion";
import SubTitle from "../shared/SubTitle";
import Title from "../shared/Title";

const CareerSection = () => {
  return (
    <section className="h-screen bg-yellow-200" id="career">
      <Container>
        <Title text="Career" />
        <SubTitle>
          <p>
            저의 첫 커리어는 개발자와 한 번도 일해보지 않은 작은
            스타트업이었습니다. <br />
            사수가 없는 환경에서 신입 개발자로 입사하여 정말 많은 일들이
            있었지만 <br />
            많은 것을 배우고 느낄 수 있었던 좋은 경험이라 생각합니다.
          </p>
        </SubTitle>
        <div>
          <div className="font-bold text-xl">
            주식회사 컨택틱 (2021.07 ~ 2022.11) [1년 5개월]
          </div>
          <ul className="py-[20px]">
            <Accordion title="인터널 프로덕트 개발">
              <div>내용입니다.</div>
            </Accordion>
          </ul>
        </div>
        <div className="text-6xl font-bold text-center bg-slate-400 py-[30px]">
          다음은 어디일까요?
        </div>
      </Container>
    </section>
  );
};

export default CareerSection;
