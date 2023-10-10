import Image from "next/image";
import Container from "../Container";
import InfoBar from "../introduction/InfoBar";
import { DoubleArrowDownIcon } from "../shared/icons";

const IntroductionSection = () => {
  return (
    <section className="h-screen bg-red-50" id="introduction">
      <Container>
        <div className="flex flex-col justify-center h-full">
          <div className="flex gap-[30px]">
            <Image
              src={"/포트폴리오 사진.jpg"}
              alt="Profile"
              width={300}
              height={300}
              className="rounded-3xl"
            />
            <div className="flex flex-col justify-center gap-[30px]">
              <div className="text-2xl font-bold">
                자신의 부족함을 인정하고 끊임없이 노력하는 개발자
              </div>
              <div>
                <span className="text-xl font-bold">
                  현정호 Frontend Developer
                </span>
                <InfoBar />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center pt-[100px]">
            <span className="font-bold block pb-[20px]">
              제가 궁금하시다면 스크롤을 내려주세요!
            </span>
            <DoubleArrowDownIcon className="text-5xl animate-bounce" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default IntroductionSection;
