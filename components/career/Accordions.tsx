"use client";
import { WORKS } from "@/constants/works";
import Accordion from "../shared/Accordion";

const Accordions = () => {
  return (
    <ul className="py-[20px]">
      {WORKS.map((work, index) => {
        return (
          <Accordion key={index} title={work.name} index={index}>
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
  );
};

export default Accordions;
