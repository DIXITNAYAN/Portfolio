import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { FaCode } from "react-icons/fa";

const AddSkill = () => {
  const [skill, setSkill] = useState({
    name: "",
    category: "",
    level: "Intermediate",
  });

  const handleChange = (e) => {
    setSkill({
      ...skill,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "skills"), skill);

      alert("✅ Skill Added Successfully");

      setSkill({
        name: "",
        category: "",
        level: "Intermediate",
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">

      <div className="flex items-center gap-3 mb-8">
        <FaCode className="text-3xl text-green-500" />
        <h2 className="text-3xl font-bold">
          Add Skill
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">

        <input
          type="text"
          name="name"
          placeholder="Skill Name"
          value={skill.name}
          onChange={handleChange}
          className="w-full p-4 rounded-xl bg-slate-800 outline-none"
          required
        />

        <input
          type="text"
          name="category"
          placeholder="Category (Frontend / Backend)"
          value={skill.category}
          onChange={handleChange}
          className="w-full p-4 rounded-xl bg-slate-800 outline-none"
        />

        <select
          name="level"
          value={skill.level}
          onChange={handleChange}
          className="w-full p-4 rounded-xl bg-slate-800 outline-none"
        >
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </select>

        <button
          className="bg-green-600 hover:bg-green-700 px-8 py-3 rounded-xl"
        >
          Save Skill
        </button>

      </form>

    </div>
  );
};

export default AddSkill;