import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
const SubTitle = ({ children }: Props) => {
  return (
    <div className="text-xl font-bold text-center leading-10 py-[10px]">
      {children}
    </div>
  );
};

export default SubTitle;
