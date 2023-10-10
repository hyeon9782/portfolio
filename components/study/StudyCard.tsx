type Study = {
  name: string;
  period: string[];
  subject: string;
  systems: string[];
};
const StudyCard = ({
  study: { name, period, subject, systems },
}: {
  study: Study;
}) => {
  return (
    <div className="w-[200px] h-[300px] bg-white rounded-md p-[10px] box-border animate-slide-in slide-in">
      <div className="text-3xl">{name}</div>
      <div></div>
    </div>
  );
};

export default StudyCard;
