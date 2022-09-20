import styled from "@emotion/styled";
import "animate.css/animate.min.css";
import Link from "next/link";
import landingContent from "../../content/landing.json";

const NavigatorBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 16vh;
  background: linear-gradient(
    rgba(0, 0, 0, 0.3),
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0)
  );
  z-index: 10000;
`;

const NavigatorContainer = styled.div`
  width: 1280px;
  max-width: 100%;
  height: 100%;
  padding: 0 8vw;
  margin: 0 auto;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

const NavigatorContent = styled.div`
  padding: 12px;
  font-size: calc(10px + 1vmin);
  font-weight: 400;
  color: white;
  opacity: 60%;
  user-select: none;
  transition: opacity 0.15s ease-in-out;

  &:hover {
    opacity: 100%;
    text-shadow: rgba(255, 255, 255, 0.5) 0 0 8px;
  }
`;

const Navigator: React.FC = () => {
  return (
    <>
      <NavigatorBackground>
        <NavigatorContainer>
          {landingContent.map((c) => (
            <Link key={c.id} href={`#${c.id}`}>
              <NavigatorContent>{c.displayName}</NavigatorContent>
            </Link>
          ))}
        </NavigatorContainer>
      </NavigatorBackground>
    </>
  );
};

export default Navigator;
