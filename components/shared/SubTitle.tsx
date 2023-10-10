import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
const SubTitle = ({ children }: Props) => {
  return (
    <div className="text-md font-bold text-center leading-7 py-[10px]">
      {children}
    </div>
  );
};

export default SubTitle;
