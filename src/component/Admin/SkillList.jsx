import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../firebase";
import { FaTrash } from "react-icons/fa";

const SkillList = () => {
  const [skills, setSkills] = useState([]);

  const fetchSkills = async () => {
    const querySnapshot = await getDocs(collection(db, "skills"));

    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setSkills(data);
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Delete this skill?"
    );

    if (!confirmDelete) return;

    await deleteDoc(doc(db, "skills", id));

    fetchSkills();

    alert("Skill Deleted Successfully");
  };

  return (
    <div className="mt-10">

      <h2 className="text-3xl font-bold mb-6">
        All Skills
      </h2>

      {skills.length === 0 ? (
        <div className="bg-slate-900 p-6 rounded-xl">
          No Skills Found
        </div>
      ) : (
        <div className="space-y-4">

          {skills.map((skill) => (

            <div
              key={skill.id}
              className="bg-slate-900 border border-slate-700 rounded-xl p-5 flex justify-between items-center"
            >

              <div>

                <h3 className="text-xl font-bold">
                  {skill.name}
                </h3>

                <p className="text-gray-400">
                  {skill.category}
                </p>

                <span className="text-green-400">
                  {skill.level}
                </span>

              </div>

              <button
                onClick={() => handleDelete(skill.id)}
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg flex items-center gap-2"
              >
                <FaTrash />
                Delete
              </button>

            </div>

          ))}

        </div>
      )}

    </div>
  );
};

export default SkillList;