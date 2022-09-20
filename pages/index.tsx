import { css, Global } from "@emotion/react";
import styled from "@emotion/styled";
import type { NextPage } from "next";
import LandingPage from "../components/landing/LandingPage";
import Navigator from "../components/landing/Navigator";
import landingContent from "../content/landing.json";

const LandingPageContainer = styled.div`
  position: relative;
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  scroll-behavior: smooth;
`;

const Home: NextPage = () => {
  return (
    <>
      <Global
        styles={css`
          body {
            -ms-overflow-style: none;
          }
          *::-webkit-scrollbar {
            display: none;
          }
        `}
      />
      <Navigator />
      <LandingPageContainer>
        {landingContent.map((c, i) => (
          <div key={i} id={c.id}>
            <LandingPage {...c} />
          </div>
        ))}
      </LandingPageContainer>
    </>
  );
};

export default Home;
