"use client";
import { ReactNode, useRef, useState } from "react";
import { ArrowDownIcon, ArrowUpIcon } from "./icons";
type Props = {
  title: string;
  children: ReactNode;
};
const Accordion = ({ title, children }: Props) => {
  const parentRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);
  const [isCollapse, setIsCollapse] = useState<boolean>(false);

  const handleArrowClick = (e: MouseEvent) => {
    e.stopPropagation();
    if (parentRef.current === null || childRef.current === null) {
      return;
    }
    if (parentRef.current.clientHeight > 0) {
      parentRef.current.style.height = "0";
    } else {
      parentRef.current.style.height = `${childRef.current.clientHeight}px`;
    }
    setIsCollapse(!isCollapse);
  };

  return (
    <div className="flex flex-col rounded-md border border-silver overflow-hidden">
      <div
        className="flex items-center p-2 box-border justify-between"
        onClick={handleArrowClick}
      >
        <div className="text-center w-11/12 font-bold text-xl">{title}</div>
        <div className="text-center w-1/12 text-xl">
          {!isCollapse ? <ArrowDownIcon /> : <ArrowUpIcon />}
        </div>
      </div>
      <div className="h-0 transition-height duration-300" ref={parentRef}>
        <div className="p-4" ref={childRef}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
