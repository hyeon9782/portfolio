"use client";

import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { useRef, useState } from "react";
type Activity = {
  name: string;
};
const ActivityCard = ({ activity }: { activity: Activity }) => {
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
      }bg-red-400 p-[10px] rounded-md text-5xl text-center transition-all duration-1000`}
    >
      {activity.name}
    </div>
  );
};

export default ActivityCard;
