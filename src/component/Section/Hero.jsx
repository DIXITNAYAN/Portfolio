import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20"
    >
      <div className="max-w-[1400px] mx-auto w-full px-8 lg:px-20">

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">

          {/* LEFT SIDE */}

          <motion.div
            className="pl-8 lg:pl-14"
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <p className="text-blue-500 text-2xl mb-5">
              👋 Hello, I'm
            </p>

            <h1 className="text-6xl md:text-7xl lg:text-[92px] font-extrabold leading-[0.95] mb-5">
              Nayan
              <br />
              Dixit
            </h1>

            <h2 className="text-4xl text-blue-400 font-semibold mb-6">
              MERN Stack Developer
            </h2>

            <p className="text-lg text-gray-300 leading-9 max-w-[560px]">
              I build modern, responsive and user-friendly web applications
              using the MERN Stack. I enjoy creating clean UI, scalable
              backend solutions and continuously improving my development
              skills.
            </p>

            {/* Buttons */}

            <div className="flex gap-5 mt-10">

              <a
                href="/Resume.pdf"
                download
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-7 py-3 rounded-xl transition-all duration-300"
              >
                <FaDownload />
                Resume
              </a>

              <a
                href="#projects"
                className="border border-blue-500 hover:bg-blue-600 px-7 py-3 rounded-xl transition-all duration-300"
              >
                View Projects
              </a>

            </div>

            {/* Social Icons */}

            <div className="flex gap-6 mt-10 text-4xl">

              <a
                href="https://github.com/DIXITNAYAN"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-500 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/nayan-dixit-827401245?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-500 transition"
              >
                <FaLinkedin />
              </a>

            </div>

          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            className="flex justify-end"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >

            <img
              src="/profile.jpeg"
              alt="Nayan Dixit"
              className="w-[420px] h-[420px] lg:w-[520px] lg:h-[520px] object-cover rounded-full border-[7px] border-blue-500 shadow-[0_0_80px_rgba(59,130,246,0.45)]"
            />

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Hero;