import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../firebase";
import { FaTrash } from "react-icons/fa";

const ExperienceList = () => {
  const [experiences, setExperiences] = useState([]);

  const fetchExperience = async () => {
    const querySnapshot = await getDocs(collection(db, "experience"));

    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setExperiences(data);
  };

  useEffect(() => {
    fetchExperience();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this experience?")) return;

    await deleteDoc(doc(db, "experience", id));

    fetchExperience();

    alert("Experience Deleted Successfully");
  };

  return (
    <div className="mt-10">

      <h2 className="text-3xl font-bold mb-6">
        All Experience
      </h2>

      {experiences.length === 0 ? (
        <div className="bg-slate-900 p-6 rounded-xl">
          No Experience Found
        </div>
      ) : (
        <div className="space-y-5">

          {experiences.map((exp) => (

            <div
              key={exp.id}
              className="bg-slate-900 border border-slate-700 rounded-xl p-6 flex justify-between items-center"
            >

              <div>

                <h3 className="text-2xl font-bold">
                  {exp.role}
                </h3>

                <p className="text-blue-400">
                  {exp.company}
                </p>

                <p className="text-gray-400">
                  {exp.type}
                </p>

                <p className="text-gray-400">
                  {exp.duration}
                </p>

              </div>

              <button
                onClick={() => handleDelete(exp.id)}
                className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg flex items-center gap-2"
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

export default ExperienceList;