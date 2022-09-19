import { css, Global } from "@emotion/react";
import styled from "@emotion/styled";
import type { NextPage } from "next";
import LandingPage from "../components/landing/LandingPage";
import landingContent from "../content/landing.json";

const LandingPageContainer = styled.div`
  position: relative;
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
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
      <LandingPageContainer>
        {landingContent.map((c, i) => (
          <LandingPage key={i} {...c} />
        ))}
      </LandingPageContainer>
    </>
  );
};

export default Home;
