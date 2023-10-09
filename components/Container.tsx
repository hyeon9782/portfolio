import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return <div className="container mx-auto py-[20px] h-full">{children}</div>;
};

export default Container;
