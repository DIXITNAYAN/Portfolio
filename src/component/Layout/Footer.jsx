import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 mt-20">

      <div className="max-w-[1250px] mx-auto px-8 py-10">

        <div className="flex flex-col md:flex-row justify-between items-center gap-5">

          <div>
            <h2 className="text-3xl font-bold text-blue-500">
              Nayan Dixit
            </h2>

            <p className="text-gray-400 mt-2">
              MERN Stack Developer
            </p>
          </div>

          <div className="flex gap-6 text-3xl">

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500 duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500 duration-300"
            >
              <FaLinkedin />
            </a>

          </div>

        </div>

        <div className="text-center mt-8 border-t border-slate-800 pt-6 text-gray-400">

          Made with <FaHeart className="inline text-red-500" /> by
          <span className="text-blue-500 font-semibold">
            {" "}Nayan Dixit
          </span>

        </div>

      </div>

    </footer>
  );
};

export default Footer;