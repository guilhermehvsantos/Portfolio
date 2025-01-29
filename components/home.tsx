import React from "react";
import { motion } from "framer-motion";

type HomeProps = {
  darkMode: boolean;
  t: {
    hero: {
      title: string;
      subtitle: string;
      cta: string;
    };
  };
};

const Home: React.FC<HomeProps> = ({ darkMode, t }) => {
  return (
    <section id="home" className="py-20 text-center relative overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 z-0">
        <div
          className={`absolute inset-0 ${
            darkMode
              ? "bg-gradient-to-b from-transparent to-gray-900"
              : "bg-gradient-to-b from-blue-500 via-blue-400 to-cyan-200"
          }`}
        />
        <div
          className={`absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjOWY3YWVhIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiM4YjVjZjYiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-20 ${
            darkMode ? "" : "invert"
          }`}
        />
      </div>
      {/* Content */}
      <div className="relative z-10">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`text-4xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r ${
            darkMode
              ? "from-pink-400 via-violet-500 to-purple-500"
              : "from-zinc-300 via-white to-zinc-300"
          }`}
        >
          {t.hero.title}
        </motion.h2>
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`text-lg md:text-xl mb-8 ${
            darkMode ? "text-violet-300" : "text-white"
          }`}
        >
          {t.hero.subtitle}
        </motion.p>
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="inline-block"
        >
          <a
            href="#contact"
            className={`bg-gradient-to-r text-white px-8 py-3 rounded-full font-semibold transition duration-300 shadow-lg ${
              darkMode
                ? "from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 shadow-pink-500/50 hover:shadow-pink-500/75"
                : "from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-blue-500/50 hover:shadow-blue-500/75"
            }`}
          >
            {t.hero.cta}
          </a>
        </motion.div>
      </div>
      {/* Gradient at the bottom */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-24 ${
          darkMode
            ? "bg-gradient-to-t from-gray-900 to-transparent"
            : "bg-gradient-to-t from-blue-50 to-transparent"
        }`}
      />
    </section>
  );
};

export default Home;
