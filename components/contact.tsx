interface ContactProps {
  darkMode: boolean;
  t: {
    contact: {
      title: string;
      name: string;
      email: string;
      message: string;
      send: string;
    };
  };
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Contact: React.FC<ContactProps> = ({ darkMode, t, handleSubmit }) => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h3
          className={`text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r ${
            darkMode
              ? "from-pink-500 to-violet-500"
              : "from-blue-600 to-cyan-500"
          }`}
        >
          {t.contact.title}
        </h3>
        <form
          onSubmit={handleSubmit}
          className={`max-w-lg mx-auto p-8 rounded-lg shadow-lg ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <div className="mb-6">
            <label
              htmlFor="name"
              className={`block text-sm font-medium mb-2 ${
                darkMode ? "text-pink-300" : "text-blue-700"
              }`}
            >
              {t.contact.name}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={`w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 ${
                darkMode
                  ? "bg-gray-700 border border-gray-600 focus:ring-pink-500 text-pink-100"
                  : "bg-white border border-blue-300 focus:ring-blue-500 text-blue-900"
              }`}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className={`block text-sm font-medium mb-2 ${
                darkMode ? "text-pink-300" : "text-blue-700"
              }`}
            >
              {t.contact.email}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 ${
                darkMode
                  ? "bg-gray-700 border border-gray-600 focus:ring-pink-500 text-pink-100"
                  : "bg-white border border-blue-300 focus:ring-blue-500 text-blue-900"
              }`}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className={`block text-sm font-medium mb-2 ${
                darkMode ? "text-pink-300" : "text-blue-700"
              }`}
            >
              {t.contact.message}
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className={`w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 ${
                darkMode
                  ? "bg-gray-700 border border-gray-600 focus:ring-pink-500 text-pink-100"
                  : "bg-white border border-blue-300 focus:ring-blue-500 text-blue-900"
              }`}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className={`w-full bg-gradient-to-r text-white px-6 py-3 rounded-md font-semibold transition duration-300 shadow-lg ${
              darkMode
                ? "from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 shadow-pink-500/50 hover:shadow-pink-500/75"
                : "from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 shadow-blue-500/50 hover:shadow-blue-500/75"
            }`}
          >
            {t.contact.send}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
