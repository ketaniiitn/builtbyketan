import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaJava,
  FaDatabase,
  FaDocker,
  FaAws,
} from "react-icons/fa";

import {
  SiPython,
  SiCplusplus,
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiPostgresql,
  SiFlask,
  SiJavascript,
  SiMysql,
} from "react-icons/si";

export default function Skills() {
  // Programming Languages
  const programming = [
    { name: "C++", icon: <SiCplusplus color="#00599C" /> },
    { name: "Java", icon: <FaJava color="#007396" /> },
    { name: "Python", icon: <SiPython color="#3776AB" /> },
    { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
  ];

  // Web / Backend / Frameworks
  const webTech = [
    { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
    { name: "Express.js", icon: <SiExpress color="#f4f4f4" /> },
    { name: "React.js", icon: <FaReact color="#61DAFB" /> },
    { name: "Next.js", icon: <SiNextdotjs color="#ffffff" /> },
    { name: "Flask", icon: <SiFlask color="#ffffff" /> },
  ];

  // DevOps / Cloud
  const devopsCloud = [
    { name: "Docker", icon: <FaDocker color="#1D63ED" /> },
    { name: "AWS Deployment", icon: <FaAws color="#FF9900" /> },
  ];

  // Databases
  const databases = [
    { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
    { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
    { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
    { name: "SQL", icon: <FaDatabase color="#4479A1" /> },
  ];

  return (
    <section className="section-skills" id="skills">
      <h1>
        My <span className="half-text">Skills</span>
      </h1>

      {/* Programming Languages */}
      <h2>
        <span className="half-text">Programming</span> Languages
      </h2>
      <div className="skills-container">
        {programming.map((skill, i) => (
          <div key={i} className="skill">
            {skill.icon}
          </div>
        ))}
      </div>

      {/* Web & Backend */}
      <h2>
        <span className="half-text">Web</span> Technologies
      </h2>
      <div className="skills-container">
        {webTech.map((skill, i) => (
          <div key={i} className="skill">
            {skill.icon}
          </div>
        ))}
      </div>

      {/* DevOps / Cloud */}
      <h2>
        <span className="half-text">DevOps</span> & Cloud
      </h2>
      <div className="skills-container">
        {devopsCloud.map((skill, i) => (
          <div key={i} className="skill">
            {skill.icon}
          </div>
        ))}
      </div>

      {/* Databases */}
      <h2>
        <span className="half-text">Database</span> Systems
      </h2>
      <div className="skills-container">
        {databases.map((skill, i) => (
          <div key={i} className="skill">
            {skill.icon}
          </div>
        ))}
      </div>
    </section>
  );
}
