import Image from "next/image";
import Container from "../Container";
import InfoBar from "../introduction/InfoBar";

const IntroductionSection = () => {
  return (
    <section className="h-screen bg-red-50" id="introduction">
      <Container>
        <div className="flex">
          <div className="rounded-full">
            <Image
              src={"/이력서 사진.jpg"}
              alt="Profile"
              width={400}
              height={400}
              className=""
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="text-2xl font-bold">
              "자신의 부족함을 인정하고 끊임없이 노력하는 개발자"
            </div>
            <div>
              <span className="text-2xl">현정호 Frontend Developer</span>
              <InfoBar />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default IntroductionSection;
