import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

type Project = {
  name: string;
  description: string;
  image: string;
  link: string;
  try: string;
};

type ProjectsProps = {
  darkMode: boolean;
  t: {
    projects: {
      title: string;
      subtitle: string;
      projectsList: Project[];
      cta: string;
    };
  };
};

const Projects: React.FC<ProjectsProps> = ({ darkMode, t }) => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h3
          className={`text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r ${
            darkMode
              ? "from-violet-400 to-pink-500"
              : "from-blue-600 to-cyan-500"
          }`}
        >
          {t.projects.title}
        </h3>
        {/* Subtitle */}
        <h2
          className={`mb-12 ${
            darkMode ? "text-lg text-violet-200" : "text-lg text-blue-700"
          }`}
        >
          {t.projects.subtitle}
        </h2>
        {/* Project Cards */}
        <div
          className="grid gap-16 justify-center"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            paddingLeft: "10%",
            paddingRight: "10%",
          }}
        >
          {t.projects.projectsList.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className={`rounded-lg shadow-lg overflow-hidden ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
              style={{ minWidth: "300px" }}
            >
              {/* Project Image */}
              <div
                className="h-48 bg-contain bg-no-repeat bg-center m-4 border-1"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              {/* Project Details */}
              <div className="p-6">
                {/* Project Name */}
                <h4
                  className={`text-2xl font-semibold mb-2 ${
                    darkMode ? "text-pink-300" : "text-blue-700"
                  }`}
                >
                  {project.name}
                </h4>
                {/* Project Description */}
                <p
                  className={
                    darkMode ? "text-violet-200 mb-4" : "text-blue-600 mb-4"
                  }
                >
                  {project.description}
                </p>
                {/* Call to Action */}
                <div className="flex justify-between content-center">
                  {/* Link to Code */}
                  <a
                    href={project.link}
                    className={`bg-gradient-to-r text-white px-4 py-2 rounded-full font-semibold transition duration-300 ${
                      darkMode
                        ? "from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600"
                        : "from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600"
                    }`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.projects.cta}
                  </a>
                  {/* Try Project */}
                  <a
                    href={project.try}
                    className={`bg-gradient-to-r text-white p-2 rounded-full transition-all duration-300 transform hover:[transform:rotateZ(45deg)] ${
                      darkMode
                        ? "from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600"
                        : "from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600"
                    }`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
