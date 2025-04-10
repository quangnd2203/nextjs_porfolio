import React from "react";

const skillsContent = [
  {
    name: "Flutter",
    skillPercent: "95",
  },
  {
    name: "React Native",
    skillPercent: "60",
  },
  {
    name: "React / Next.js",
    skillPercent: "60",
  },
  {
    name: "Node.js & Express.js",
    skillPercent: "75",
  },
  {
    name: "Solidity & Smart Contract",
    skillPercent: "70",
  },
  {
    name: "Web3 / Ether.js / Hardhat",
    skillPercent: "70",
  },
  {
    name: "AWS (EC2, S3, RDS, IAM)",
    skillPercent: "70",
  },
  {
    name: "Docker & CI/CD",
    skillPercent: "70",
  },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="progress_inner" key={i}>
          <span className="label">{val.name}</span>
          <div className="background">
            <div className="bar">
              <div
                className="bar_in"
                style={{ width: val.skillPercent + "%" }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Skills;
