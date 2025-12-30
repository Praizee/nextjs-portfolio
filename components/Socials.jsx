"use client";

import Link from "next/link";
import {
  RiTwitterXFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill,
  RiWhatsappFill,
} from "react-icons/ri";

const icons = [
  {
    path: "https://www.linkedin.com/in/stephen-adeniji/",
    name: <RiLinkedinFill />,
    title: "LinkedIn",
  },
  {
    path: "https://github.com/Praizee",
    name: <RiGithubFill />,
    title: "GitHub",
  },
  {
    path: "https://www.facebook.com/steve.ade1407/",
    name: <RiFacebookFill />,
    title: "Facebook",
  },
  {
    path: "https://twitter.com/steevenadeniji",
    name: <RiTwitterXFill />,
    title: "Twitter X",
  },
  {
    path: "https://www.instagram.com/steeven_adeniji/",
    name: <RiInstagramFill />,
    title: "Instagram",
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link
            href={icon.path}
            key={`social-icon-${index}`}
            className={`${iconsStyles}`}
            target="_blank"
            rel="noopener noreferrer"
            title={icon.title}
          >
            {icon.name}
          </Link>
        );
      })}
      <Link
        href="https://wa.link/wk4gts"
        className={`${iconsStyles}`}
        target="_blank"
        title="WhatsApp"
      >
        <RiWhatsappFill className="fill-green-400" />
      </Link>
    </div>
  );
};

export default Socials;

