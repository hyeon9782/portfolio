"use client";
const NAVS = [
  {
    id: "introduction",
    icon: "1",
  },
  {
    id: "project",
    icon: "2",
  },
  {
    id: "study",
    icon: "3",
  },
  {
    id: "activity",
    icon: "4",
  },
  {
    id: "notion",
    icon: "5",
  },
  {
    id: "career",
    icon: "6",
  },
];
const SideBar = () => {
  const handleClick = (id: string) => {
    window.scrollTo({
      top: document.getElementById(id).offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div className="fixed top-[20%] right-5">
      <nav className="bg-slate-400 rounded-xl p-[10px]">
        <ul className="flex flex-col gap-[10px]">
          {NAVS.map((nav, index) => (
            <li
              className="cursor-pointer rounded-full bg-white w-[40px] h-[40px] flex justify-center items-center"
              key={index}
              onClick={() => handleClick(nav.id)}
            >
              {nav.icon}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
