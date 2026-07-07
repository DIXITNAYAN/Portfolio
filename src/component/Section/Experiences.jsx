import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const Experiences = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "experience"));

        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setExperiences(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchExperience();
  }, []);

  return (
    <section id="experience" className="py-24">
      <div className="max-w-[1250px] mx-auto px-8">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-5xl font-bold text-center mb-16 text-blue-500"
        >
          Experience
        </motion.h2>

        <div className="space-y-8">

          {experiences.length === 0 ? (
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-700 text-center text-gray-400">
              No Experience Added Yet
            </div>
          ) : (
            experiences.map((exp) => (
              <div
                key={exp.id}
                className="bg-slate-900 p-8 rounded-2xl border border-slate-700"
              >
                <h3 className="text-2xl font-bold">
                  {exp.role}
                </h3>

                <p className="text-blue-400 mt-2">
                  {exp.company} • {exp.duration}
                </p>

                <p className="text-pink-400 mt-1">
                  {exp.type}
                </p>

                <p className="mt-5 text-gray-300 leading-8">
                  {exp.description}
                </p>
              </div>
            ))
          )}

        </div>

      </div>
    </section>
  );
};

export default Experiences;