import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
<div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-blue-500 mb-16"
        >
          About Me
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Card */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-slate-900 rounded-3xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-semibold mb-6">
              Quick Info
            </h3>

            <div className="space-y-4 text-lg">

              <p><strong>Name :</strong> Nayan Dixit</p>

              <p><strong>Location :</strong> Lucknow, India</p>

              <p><strong>Education :</strong> B.Tech (IT)</p>

              <p><strong>Status :</strong> Open for Internship</p>

            </div>

          </motion.div>

          {/* Right Card */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <p className="text-lg leading-9">

              I am passionate about building modern,
              responsive and user-friendly web applications.

              I enjoy learning new technologies and creating
              beautiful user experiences.

            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <span className="bg-blue-600 px-5 py-2 rounded-full">
                React
              </span>

              <span className="bg-blue-600 px-5 py-2 rounded-full">
                JavaScript
              </span>

              <span className="bg-blue-600 px-5 py-2 rounded-full">
                Python
              </span>

              <span className="bg-blue-600 px-5 py-2 rounded-full">
                Firebase
              </span>

              <span className="bg-blue-600 px-5 py-2 rounded-full">
                UI/UX
              </span>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;