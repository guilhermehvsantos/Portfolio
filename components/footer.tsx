import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

interface FooterProps {
  darkMode: boolean;
  t: {
    footer: string;
  };
}

const Footer: React.FC<FooterProps> = ({ darkMode, t }) => {
  return (
    <footer>
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-between items-center">
          <div className="flex space-x-4 my-4 md:mt-0">
            <a
              href="https://www.linkedin.com/in/guilhermehvs/"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors duration-300 ${
                darkMode
                  ? "text-pink-400 hover:text-violet-400"
                  : "text-blue-500 hover:text-cyan-500"
              }`}
              aria-label="LinkedIn Profile"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
            <a
              href="https://github.com/guilhermehvsantos"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors duration-300 ${
                darkMode
                  ? "text-pink-400 hover:text-violet-400"
                  : "text-blue-500 hover:text-cyan-500"
              }`}
              aria-label="GitHub Profile"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
          </div>
          <p>{t.footer}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
