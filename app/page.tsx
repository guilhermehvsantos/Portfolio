"use client";

import { useState } from "react";

import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebaseConfig.";

import {
  JavaOriginal,
  ReactOriginal,
  AzuresqldatabaseOriginal,
  JavascriptOriginal,
  SpringOriginal,
  Html5Original,
  Css3Original,
} from "devicons-react";

import { translations } from "./translations";

import Home from "@/components/home";
import About from "@/components/about";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import NavBar from "@/components/navbar";

type Language = "en" | "pt";

export default function Component() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState<Language>("pt");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleLanguage = () => setLanguage(language === "pt" ? "en" : "pt");

  const t = translations[language];

  const skillIcons: { [key: string]: React.ReactNode } = {
    Java: <JavaOriginal size={24} />,
    Javascript: <JavascriptOriginal size={24} />,
    Html: <Html5Original size={24} />,
    Css: <Css3Original size={24} />,
    SQL: <AzuresqldatabaseOriginal size={24} />,
    React: <ReactOriginal size={24} />,
    JavaScript: <JavascriptOriginal size={24} />,
    Spring: <SpringOriginal size={24} />,
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    try {
      await addDoc(collection(db, "messages"), {
        name,
        email,
        message,
        timestamp: new Date(),
      });

      alert("Mensagem enviada com sucesso!");
      form.reset();
    } catch (error) {
      console.error("Erro ao enviar a mensagem:", error);
      alert("Erro ao enviar a mensagem. Tente novamente mais tarde.");
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-pink-100" : "bg-blue-50 text-blue-900"
      }`}
    >
      <NavBar
        darkMode={darkMode}
        language={language}
        toggleDarkMode={toggleDarkMode}
        toggleLanguage={toggleLanguage}
        t={t}
      />
      <main className="pt-16">
        <Home darkMode={darkMode} t={t} />

        <About darkMode={darkMode} t={t} skillIcons={skillIcons} />

        <Projects darkMode={darkMode} t={t} />

        <Contact darkMode={darkMode} t={t} handleSubmit={handleSubmit} />
      </main>

      <Footer darkMode={darkMode} t={t} />
    </div>
  );
}
