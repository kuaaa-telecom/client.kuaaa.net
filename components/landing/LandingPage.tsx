import styled from "@emotion/styled";
import "animate.css/animate.min.css";
import Image from "../Image";

interface Props {
  backgroundUrl: string;
  titleText: string;
  subTitleText: string;
  content: string[];
}

const Page = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  background: black;
  scroll-snap-align: start;
  scroll-snap-stop: always;
`;

const BackgroundImg = styled(Image)`
  position: absolute;
  left: 0;
  top: 0;
  object-fit: cover;
  opacity: 80%;
`;

const ContentContainer = styled.div`
  position: relative;
  width: 1280px;
  max-width: 100%;
  height: 100%;
  padding: 0 8vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: white;
  word-break: keep-all;
`;

const Title = styled.div`
  font-size: calc(10px + 9vmin);
  font-weight: 700;
`;

const SubTitle = styled.div`
  font-size: calc(10px + 3vmin);
  font-weight: 600;
  color: white;
  opacity: 60%;
`;

const Content = styled.div`
  font-size: calc(10px + 1vmin);
  font-weight: 400;
  opacity: 80%;
`;

const ContentText = styled.p`
  margin-bottom: 6px;
  margin-top: 6px;
`;

const LandingPage: React.FC<Props> = (props) => {
  const { backgroundUrl, titleText, subTitleText, content } = props;

  return (
    <>
      <Page>
        <BackgroundImg src={backgroundUrl} layout="fill" />
        <ContentContainer>
          <Title>{titleText}</Title>
          <SubTitle>{subTitleText}</SubTitle>
          <div style={{ height: "8vh" }} />
          <Content>
            {content.map((c, i) => (
              <ContentText key={i}>{c}</ContentText>
            ))}
          </Content>
        </ContentContainer>
      </Page>
    </>
  );
};

export default LandingPage;
