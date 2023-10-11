import Container from "../Container";
import SubTitle from "../shared/SubTitle";
import Title from "../shared/Title";
import { LongArrowDownIcon } from "../shared/icons";
import Accordions from "../career/Accordions";

const CareerSection = () => {
  return (
    <section className="min-h-screen bg-yellow-200" id="career">
      <Container>
        <Title text="Career" />
        <SubTitle>
          <p>
            스타트업에 1인 개발자로 입사하여 정말 많은 일들이 있었지만 <br />
            많은 것을 배우고 느낄 수 있었던 좋은 경험이라 생각합니다.
          </p>
        </SubTitle>
        <div>
          <div className="font-bold text-lg">
            주식회사 컨택틱 (2021.07 ~ 2022.11) [1년 5개월]
          </div>
          <Accordions />
        </div>
        <div className="flex justify-center py-[10px]">
          <LongArrowDownIcon className="text-4xl animate-bounce" />
        </div>
        <div className="text-3xl font-bold text-center bg-slate-400 py-[15px]">
          다음은 어디일까요?
        </div>
      </Container>
    </section>
  );
};

export default CareerSection;
