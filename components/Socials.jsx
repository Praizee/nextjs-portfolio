"use client";

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
    path: "https://twitter.com/steve_ade1407",
    name: <RiTwitterXFill />,
    title: "Twitter X",
  },
  {
    path: "https://www.instagram.com/steve_ade14/",
    name: <RiInstagramFill />,
    title: "Instagram",
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <>
            <a
              href={icon.path}
              key={index}
              className={`${iconsStyles}`}
              target="_blank"
              rel="noopener noreferrer"
              title={icon.title}
            >
              {icon.name}
            </a>
          </>
        );
      })}
      <a
        href="https://wa.link/wk4gts"
        className={`${iconsStyles}`}
        target="_blank"
        title="WhatsApp"
      >
        <RiWhatsappFill className="fill-green-400" />
      </a>
    </div>
  );
};

export default Socials;
