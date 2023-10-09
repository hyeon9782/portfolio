"use client";

import Link from "next/link";
import { GithubIcon, NotionIcon, VelogIcon } from "../shared/icons";

const INFO = [
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
  {
    url: "https://mail.google.com/mail/u/0/#inbox",
    icon: <VelogIcon />,
  },
];

const InfoBar = () => {
  return (
    <ul className="flex gap-[10px]">
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
