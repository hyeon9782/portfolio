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
            <div>
              <Image
                src={"/포트폴리오 사진.jpg"}
                alt="Profile"
                width={300}
                height={300}
                className="rounded-3xl"
              />
              <InfoBar />
            </div>
            <div className="flex flex-col gap-[30px] pt-[40px]">
              <span className="text-3xl font-bold">
                현정호 Frontend Developer
              </span>
              <p className="text-xl font-bold leading-10">
                부족함을 알기에 끊임없이 노력합니다.
                <br />
                새로운 것을 배우는 걸 좋아합니다.
                <br />
                팀원들과의 커뮤니케이션을 중시합니다.
              </p>
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
