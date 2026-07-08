import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const education = [
  {
    year: "2023 - 2027",
    title: "Bachelor of Technology (Information Technology)",
    institute: "Babu Banarasi Das Institute of Technology & Management",
    location: "Lucknow, Uttar Pradesh",
  },
  {
    year: "2021 - 2023",
    title: "Intermediate",
    institute: "Jeevan Jyoti Higher Sec School",
    location: "Uttar Pradesh",
  },
  {
    year: "2020 - 2021",
    title: "High School",
    institute: "Jeevan Jyoti Higher Sec School",
    location: "Uttar Pradesh",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 px-6">
<div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-blue-500 mb-16"
        >
          Education
        </motion.h2>

        <div className="space-y-8">

          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-slate-900 rounded-2xl p-8 shadow-lg border border-slate-700"
            >
              <div className="flex items-center gap-4 mb-4">
                <FaGraduationCap className="text-blue-500 text-3xl" />

                <div>
                  <h3 className="text-2xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-blue-400">
                    {item.year}
                  </p>
                </div>
              </div>

              <p className="text-lg">{item.institute}</p>

              <p className="text-gray-400">{item.location}</p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Education;
