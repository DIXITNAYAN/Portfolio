import { motion } from "framer-motion";

const Dsa = () => {
  return (
    <section id="dsa" className="py-20 px-6">
<div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-blue-500 mb-12"
        >
          DSA Journey
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-slate-900 rounded-3xl p-8 border border-slate-700 shadow-lg"
        >
          <h3 className="text-2xl font-semibold mb-4">
            Currently Learning
          </h3>

          <p className="text-lg text-gray-300 mb-6">
            I am currently learning Data Structures and Algorithms using
            <span className="text-blue-400 font-semibold"> Python</span>.
            My goal is to strengthen my problem-solving skills for coding interviews and software development.
          </p>

          <div className="flex flex-wrap gap-3">
            <span className="bg-blue-600 px-4 py-2 rounded-full">Arrays</span>
            <span className="bg-blue-600 px-4 py-2 rounded-full">Strings</span>
            <span className="bg-blue-600 px-4 py-2 rounded-full">Searching</span>
            <span className="bg-blue-600 px-4 py-2 rounded-full">Sorting</span>
            <span className="bg-blue-600 px-4 py-2 rounded-full">Recursion</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Dsa;