import Container from "../Container";
import SubTitle from "../shared/SubTitle";
import Title from "../shared/Title";

const NotionSection = () => {
  return (
    <section className="h-screen bg-lime-500" id="notion">
      <Container>
        <Title text="Notion" />
        <SubTitle>
          <p>
            프로그래밍 학습은 책이나 공식 문서를 통해 주로 학습하며 때로는
            인강을 활용합니다. <br />
            학습한 내용을 Notion에 정리하면서 이해하는 편입니다.
          </p>
        </SubTitle>
      </Container>
    </section>
  );
};

export default NotionSection;
