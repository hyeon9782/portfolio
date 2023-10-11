"use client";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { useRef, useState } from "react";

type Study = {
  name: string;
  period: string[];
  subject: string;
  systems: string[];
};
const StudyCard = ({
  study: { name, period, subject, systems },
  index,
}: {
  study: Study;
  index: number;
}) => {
  const targetRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const show = () => {
    setIsVisible(true);
  };

  const hide = () => {
    setIsVisible(false);
  };
  useIntersectionObserver(show, hide, targetRef);
  return (
    <div
      ref={targetRef}
      className={`${
        isVisible ? "opacity-100 scale-x-[1]" : "opacity-0 scale-x-0"
      } w-[200px] h-[300px] bg-white rounded-md p-[10px] box-border transition-all duration-1000`}
    >
      <div className={`text-3xl ${isVisible ? "block" : "hidden"}`}>{name}</div>
      <div></div>
    </div>
  );
};

export default StudyCard;
