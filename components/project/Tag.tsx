const Tag = ({ text }: { text: string }) => {
  return (
    <div
      className={`${selectClassStr(
        text
      )} px-[10px] rounded-lg border border-red-300`}
    >
      {text}
    </div>
  );
};

function selectClassStr(text: string) {
  switch (text) {
    case "TypeScript":
      return "bg-blue-500 text-blue-800";
    default:
      return "bg-gray-500 text-gray-800";
  }
}

export default Tag;
