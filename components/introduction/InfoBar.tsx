"use client";

import Link from "next/link";
import { EmailIcon, GithubIcon, NotionIcon, VelogIcon } from "../shared/icons";

const INFO = [
  {
    url: "mailto:hyeon9782@gmail.com",
    icon: <EmailIcon />,
  },
  {
    url: "https://github.com/hyeon9782",
    icon: <GithubIcon />,
  },
  {
    url: "https://url.kr/5nmsad",
    icon: <NotionIcon />,
  },
  {
    url: "https://velog.io/@hyeon9782",
    icon: <VelogIcon />,
  },
];

const InfoBar = () => {
  return (
    <ul className="flex justify-around my-[20px]">
      {INFO.map((info, index) => (
        <li key={index}>
          <Link className="text-4xl" href={info.url}>
            {info.icon}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default InfoBar;
