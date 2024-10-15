import {
  faCss3,
  faGit,
  faLaravel,
  faLinux,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Index = () => {
  const skill = [
    { name: "React.js", icon: faReact },
    { name: "Tailwindcss", icon: faCss3 },
    { name: "Laravel", icon: faLaravel },
    { name: "Linux", icon: faLinux },
    { name: "Git", icon: faGit },
    { name: "Mysql", icon: faDatabase },
  ];
  return (
    <>
      <section className="max-w-xl mx-auto text-secondary text-opacity-70">
        <h1 className="text-3xl font-bold mb-4">Tech Stack</h1>
        <ul className="flex flex-wrap gap-3 items-center">
          {skill.map((item, index) => (
            <li
              key={index}
              className="flex bg-blue-600 bg-opacity-70 text-opacity-70 rounded-md py-1 px-4 items-center gap-2 text-xl"
            >
              <FontAwesomeIcon icon={item.icon} className="text-2xl" />
              {item.name}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Index;
