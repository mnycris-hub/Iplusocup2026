import { useMotionValue, useTransform } from "motion/react";
import { useEffect, RefObject } from "react";

export function useTilt(ref: RefObject<HTMLElement>) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-15, 15]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMove = (e: MouseEvent | TouchEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      let clientX, clientY;

      if (e instanceof MouseEvent) {
        clientX = e.clientX;
        clientY = e.clientY;
      } else {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      }

      const percentX = (clientX - centerX) / (rect.width / 2);
      const percentY = (clientY - centerY) / (rect.height / 2);

      x.set(percentX);
      y.set(percentY);
    };

    const handleLeave = () => {
      x.set(0);
      y.set(0);
    };

    element.addEventListener("mousemove", handleMove as EventListener);
    element.addEventListener("touchmove", handleMove as EventListener);
    element.addEventListener("mouseleave", handleLeave);
    element.addEventListener("touchend", handleLeave);

    return () => {
      element.removeEventListener("mousemove", handleMove as EventListener);
      element.removeEventListener("touchmove", handleMove as EventListener);
      element.removeEventListener("mouseleave", handleLeave);
      element.removeEventListener("touchend", handleLeave);
    };
  }, [x, y, ref]);

  return { rotateX, rotateY };
}
