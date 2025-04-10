import React from "react";
import {
  FiFacebook,
  FiLinkedin,
  FiGithub
} from "react-icons/fi";

const SocialShare = [
  {
    iconName: <FiGithub />,
    link: "https://github.com/quangnd2203",
  },
  {
    iconName: <FiFacebook />,
    link: "https://www.facebook.com/quangnguyen22032001",
  },
  {
    iconName: <FiLinkedin />,
    link: "https://www.linkedin.com/in/quang-nguyen-b248aa21a/",
  },
];
const Social = () => {
  return (
    <ul>
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            {val.iconName}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
