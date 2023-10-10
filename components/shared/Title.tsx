type Props = {
  text: string;
};
const Title = ({ text }: Props) => {
  return <div className="text-5xl font-bold text-center">{text}</div>;
};

export default Title;
