type AboutProps = {
  darkMode: boolean;
  t: {
    about: {
      title: string;
      p1: string;
      p2: string;
    };
    skills: string[];
  };
  skillIcons: { [key: string]: React.ReactNode };
};

const About: React.FC<AboutProps> = ({ darkMode, t, skillIcons }) => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h3
          className={`text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r ${
            darkMode
              ? "from-pink-400 to-violet-500"
              : "from-cyan-500 to-blue-500"
          }`}
        >
          {t.about.title}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div className="space-y-6">
            <p
              className={
                darkMode ? "text-lg text-pink-200" : "text-lg text-gray-700"
              }
            >
              {t.about.p1}
            </p>
            <p
              className={
                darkMode ? "text-lg text-violet-200" : "text-lg text-blue-700"
              }
            >
              {t.about.p2}
            </p>
            {/* Skills */}
            <div className="flex flex-wrap gap-4">
              {t.skills.map((skill) => (
                <div
                  key={skill}
                  className={`flex items-center space-x-2 px-3 py-1 rounded-full transition-transform duration-300 hover:scale-105 ${
                    darkMode ? "bg-gray-800" : "bg-gray-200"
                  }`}
                >
                  {skillIcons[skill] || (
                    <div
                      className={`w-6 h-6 rounded-full ${
                        darkMode ? "bg-purple-400" : "bg-blue-600"
                      }`}
                    />
                  )}
                  <span
                    className={`text-sm ${
                      darkMode ? "text-violet-200" : "text-gray-700"
                    }`}
                  >
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* Image Section */}
          <div className="flex justify-center">
            <div className="relative">
              <div
                className={`absolute inset-0 rounded-full blur-lg opacity-75 animate-pulse ${
                  darkMode
                    ? "bg-gradient-to-r from-pink-500 to-violet-500"
                    : "bg-gradient-to-r from-cyan-400 to-blue-400"
                }`}
              />
              <img
                src="https://avatars.githubusercontent.com/u/68071170?v=4"
                alt="Profile"
                className={`relative rounded-full border-4 shadow-lg ${
                  darkMode ? "border-pink-500" : "border-blue-400"
                }`}
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
