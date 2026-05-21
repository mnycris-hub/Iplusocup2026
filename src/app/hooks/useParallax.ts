import { useScroll, useTransform } from "motion/react";
import { RefObject } from "react";

export function useParallax(ref: RefObject<HTMLElement>, distance = 50) {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-distance, distance]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return { y, opacity };
}
