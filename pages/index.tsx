import { css, Global } from "@emotion/react";
import styled from "@emotion/styled";
import type { NextPage } from "next";
import { useCallback, useEffect, useRef, useState } from "react";
import LandingPage from "../components/landing/LandingPage";
import Navigator from "../components/landing/Navigator";
import landingContent from "../content/landing.json";
import usePageSize from "../hooks/usePageSize";
import useScrollPosition from "../hooks/useScrollPosition";
import useThrottledEffect from "../hooks/useThrottledEffect";

const LandingPageContainer = styled.div`
  position: relative;
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  scroll-behavior: smooth;
`;

const Home: NextPage = () => {
  const size = usePageSize(30);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const scrollPosition = useScrollPosition(containerRef, 30);
  const elements = useRef<Map<string, HTMLDivElement>>(new Map());
  const [currentPage, setCurrentPage] = useState<string | null>(null);

  const [displayedItemHeights, setDisplayedItemHeights] = useState<
    { id: string; height: number }[]
  >([]);
  const [displayedItemPos, setDisplayedItemPos] = useState<
    { id: string; position: number }[]
  >([]);

  const invalidateHeights = useCallback(() => {
    setDisplayedItemHeights(
      landingContent.map((i) => ({
        id: i.id,
        height: elements.current.get(i.id)?.offsetHeight || 0,
      }))
    );
  }, [elements]);

  const invalidatePositions = useCallback(() => {
    setDisplayedItemPos(
      landingContent.map((c, i) => ({
        id: c.id,
        position: displayedItemHeights.reduce(
          (a, b, j) => (j < i ? a + b.height : a + 0),
          0
        ),
      }))
    );
  }, [displayedItemHeights]);

  const handleMoveToPage = useCallback(
    (id: string) => {
      const top = displayedItemPos.find((i) => i.id === id)?.position;
      if (top === undefined) return;
      containerRef.current?.scrollTo({ top });
    },
    [displayedItemPos]
  );

  const handleScrollChange = useCallback(() => {
    const currentId = displayedItemPos
      .filter((i, idx) => i.position - size.y * 0.4 < scrollPosition.y)
      .reduceRight((max, curr) => (max.position > curr.position ? max : curr), {
        position: -1,
        id: null as string | null,
      });
    setCurrentPage(currentId.id);
  }, [displayedItemPos, scrollPosition.y, size.y]);

  useEffect(() => {
    invalidateHeights();
  }, [invalidateHeights]);

  useEffect(() => {
    invalidatePositions();
  }, [displayedItemHeights, invalidatePositions]);

  useThrottledEffect(handleScrollChange, 30, [scrollPosition]);

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
      <Navigator
        currentPage={currentPage}
        handleMoveToPage={handleMoveToPage}
      />
      <LandingPageContainer ref={containerRef}>
        {landingContent.map((c, i) => {
          const ref = (e: HTMLDivElement) => {
            elements.current.set(c.id, e);
            return elements.current.get(c.id);
          };
          return (
            <div key={i} id={c.id} ref={ref}>
              <LandingPage {...c} />
            </div>
          );
        })}
      </LandingPageContainer>
    </>
  );
};

export default Home;
