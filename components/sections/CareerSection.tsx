import { WORKS } from "@/constants/works";
import Container from "../Container";
import Accordion from "../shared/Accordion";
import SubTitle from "../shared/SubTitle";
import Title from "../shared/Title";
import { LongArrowDownIcon } from "../shared/icons";

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
          <ul className="py-[20px]">
            {WORKS.map((work, index) => {
              return (
                <Accordion key={index} title={work.name}>
                  <div>
                    <ul>
                      <li>프로젝트 설명 : {work.explanation}</li>
                      {work.environment && (
                        <li>개발 환경 : {work.environment.join(", ")}</li>
                      )}
                      <li>
                        <span>상세 업무</span>
                        {work.functions.map((functionItem, index) => (
                          <div key={index}>- {functionItem}</div>
                        ))}
                      </li>
                      <li>
                        <span>결과 및 성과</span>
                        {work.results.map((result, index) => (
                          <div key={index}>- {result}</div>
                        ))}
                      </li>
                    </ul>
                  </div>
                </Accordion>
              );
            })}
          </ul>
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
