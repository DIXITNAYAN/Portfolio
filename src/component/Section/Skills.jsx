import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const Skill = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "skills"));

        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setSkills(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSkills();
  }, []);

  // Category wise group
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-blue-500 mb-16"
        >
          My Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {Object.keys(groupedSkills).length === 0 ? (
            <div className="col-span-full text-center text-gray-400">
              No Skills Added Yet
            </div>
          ) : (
            Object.entries(groupedSkills).map(([category, list]) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-slate-900 rounded-2xl p-6 border border-slate-700 hover:border-blue-500 transition"
              >
                <h3 className="text-2xl font-semibold mb-5 text-blue-400">
                  {category}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {list.map((skill) => (
                    <span
                      key={skill.id}
                      className="bg-blue-600 px-4 py-2 rounded-full text-sm"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>

              </motion.div>
            ))
          )}

        </div>

      </div>
    </section>
  );
};

export default Skill;