import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="container w-[800px]  mx-auto py-[20px] h-full">
      {children}
    </div>
  );
};

export default Container;
