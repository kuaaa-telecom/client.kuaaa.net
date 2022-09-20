import { MutableRefObject, useCallback, useState } from "react";
import Position from "../types/Position";
import useThrottledEffect from "./useThrottledEffect";

const useScrollPosition = (
  ref: MutableRefObject<HTMLDivElement | null>,
  throttle?: number
): Position => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  const listen = useCallback(() => {
    setPosition({
      x: ref.current?.scrollLeft || 0,
      y: ref.current?.scrollTop || 0,
    });
  }, [setPosition, ref]);

  useThrottledEffect(
    () => {
      ref.current && ref.current.addEventListener("scroll", listen);
      window.addEventListener("resize", listen);
      listen();
      return () => {
        ref.current && ref.current.removeEventListener("scroll", listen);
        window.removeEventListener("resize", listen);
      };
    },
    throttle || 0,
    [listen]
  );

  return position;
};

export default useScrollPosition;
