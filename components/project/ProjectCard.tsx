"use client";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import Image from "next/image";
import { useRef, useState } from "react";
type Project = {
  name: string;
  explanation: string;
  skills: string[];
  functions: string[];
};
const ProjectCard = ({
  project: { name, explanation, skills, functions },
  index,
}: {
  project: Project;
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

  const isLeft = index % 2 === 0;

  useIntersectionObserver(show, hide, targetRef);
  return (
    <div
      ref={targetRef}
      className={`${
        isVisible
          ? "opacity-100 translate-x-0"
          : "opacity-0 translate-x-[-100%]"
      } transition-all duration-1000 bg-white rounded-xl p-[10px] flex gap-[20px] w-[50%] h-[200px] ${
        isLeft ? "self-start" : "self-end"
      }`}
    >
      <Image
        src={"/포트폴리오 사진.jpg"}
        alt="Project"
        width={100}
        height={100}
      />
      <div>
        <span>{name}</span>
        <p>{explanation}</p>
        <ul className="flex gap-[10px] flex-wrap">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
        <div className="flex gap-[10px]">
          <button className="bg-black rounded-xl text-white">GitHub</button>
          <button className="bg-black rounded-xl text-white">바로가기</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
