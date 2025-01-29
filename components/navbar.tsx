"use client";

import { useState } from "react";
import { SunIcon, MoonIcon, GlobeIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

type NavBarProps = {
  darkMode: boolean;
  language: "en" | "pt";
  toggleDarkMode: () => void;
  toggleLanguage: () => void;
  t: {
    nav: string[];
    sectionIds: string[];
    name: string;
  };
};

const NavBar: React.FC<NavBarProps> = ({
  darkMode,
  language,
  toggleDarkMode,
  toggleLanguage,
  t,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavItems = ({ mobile = false }: { mobile?: boolean }) => (
    <ul
      className={`${
        mobile ? "flex flex-col space-y-4" : "hidden md:flex md:space-x-6"
      }`}
    >
      {t.nav.map((item, i) => (
        <li key={item}>
          <a
            href={`#${t.sectionIds[i]}`}
            className={`text-base md:text-lg font-medium transition duration-300 relative group ${
              darkMode
                ? "text-violet-400 hover:text-pink-500"
                : "text-blue-500 hover:text-cyan-500"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            {item}
            <span
              className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                darkMode ? "bg-pink-500" : "bg-cyan-500"
              }`}
            ></span>
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-opacity-90 backdrop-blur-md ${
        darkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <h1
            className={`text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${
              darkMode
                ? "from-pink-500 to-violet-500"
                : "from-blue-500 to-cyan-500"
            }`}
          >
            {t.name}
          </h1>
          <div className="flex items-center space-x-6">
            <NavItems />
            <div className="hidden md:flex items-center space-x-2">
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
                  darkMode
                    ? "bg-gray-700 text-yellow-300 hover:bg-gray-200 hover:text-blue-500"
                    : "bg-gray-200 text-blue-500 hover:bg-gray-700 hover:text-yellow-300"
                }`}
                aria-label={
                  darkMode ? "Switch to light mode" : "Switch to dark mode"
                }
              >
                {darkMode ? (
                  <SunIcon className="w-5 h-5" />
                ) : (
                  <MoonIcon className="w-5 h-5" />
                )}
              </button>
              <button
                onClick={toggleLanguage}
                className={`p-2 rounded-full transition-all duration-300 transform hover:[transform:rotateY(180deg)] ${
                  darkMode
                    ? "bg-gray-700 text-yellow-300"
                    : "bg-gray-200 text-blue-500"
                }`}
                aria-label={
                  language === "en"
                    ? "Switch to Portuguese"
                    : "Switch to English"
                }
              >
                <GlobeIcon className="w-5 h-5" />
              </button>
            </div>
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <button
                    className={`p-2 rounded-md ${
                      darkMode
                        ? "bg-gray-700 text-pink-200"
                        : "bg-gray-200 text-blue-500"
                    }`}
                    aria-label="Open menu"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className={`w-[300px] sm:w-[400px] ${
                    darkMode
                      ? "bg-gray-800 text-pink-100"
                      : "bg-white text-blue-900"
                  }`}
                >
                  <div className="flex flex-col h-full justify-between py-6">
                    <div className="space-y-4">
                      <NavItems mobile />
                    </div>
                    <div className="flex justify-center space-x-4">
                      <button
                        onClick={toggleDarkMode}
                        className={`p-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
                          darkMode
                            ? "bg-gray-700 text-yellow-300 hover:bg-gray-200 hover:text-blue-500"
                            : "bg-gray-200 text-blue-500 hover:bg-gray-700 hover:text-yellow-300"
                        }`}
                        aria-label={
                          darkMode
                            ? "Switch to light mode"
                            : "Switch to dark mode"
                        }
                      >
                        {darkMode ? (
                          <SunIcon className="w-6 h-6" />
                        ) : (
                          <MoonIcon className="w-6 h-6" />
                        )}
                      </button>
                      <button
                        onClick={toggleLanguage}
                        className={`p-2 rounded-full transition-all duration-300 transform hover:[transform:rotateY(180deg)] ${
                          darkMode
                            ? "bg-gray-700 text-yellow-300"
                            : "bg-gray-200 text-blue-500"
                        }`}
                        aria-label={
                          language === "en"
                            ? "Switch to Portuguese"
                            : "Switch to English"
                        }
                      >
                        <GlobeIcon className="w-6 h-6" />
                      </button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
