import Image from "next/image";
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
  return (
    <div
      className={`bg-white rounded-xl p-[10px] flex gap-[20px] w-[50%] h-[200px] ${
        index % 2 === 0 ? "self-start" : "self-end"
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
