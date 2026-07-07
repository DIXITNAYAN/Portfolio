import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { FaBriefcase } from "react-icons/fa";

const AddExperience = () => {
  const [experience, setExperience] = useState({
    company: "",
    role: "",
    type: "",
    duration: "",
    description: "",
  });

  const handleChange = (e) => {
    setExperience({
      ...experience,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "experience"), experience);

      alert("Experience Added Successfully ✅");

      setExperience({
        company: "",
        role: "",
        type: "",
        duration: "",
        description: "",
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">

      <div className="flex items-center gap-3 mb-8">
        <FaBriefcase className="text-3xl text-pink-500" />
        <h2 className="text-3xl font-bold">
          Add Experience
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">

        <input
          type="text"
          name="company"
          placeholder="Company Name"
          value={experience.company}
          onChange={handleChange}
          className="w-full p-4 rounded-xl bg-slate-800 outline-none"
          required
        />

        <input
          type="text"
          name="role"
          placeholder="Job Role"
          value={experience.role}
          onChange={handleChange}
          className="w-full p-4 rounded-xl bg-slate-800 outline-none"
          required
        />

        <select
          name="type"
          value={experience.type}
          onChange={handleChange}
          className="w-full p-4 rounded-xl bg-slate-800 outline-none"
        >
          <option value="">Select Job Type</option>
          <option>Internship</option>
          <option>Full Time</option>
          <option>Part Time</option>
          <option>Freelance</option>
          <option>Leadership</option>
        </select>

        <input
          type="text"
          name="duration"
          placeholder="Jan 2025 - Mar 2025"
          value={experience.duration}
          onChange={handleChange}
          className="w-full p-4 rounded-xl bg-slate-800 outline-none"
        />

        <textarea
          rows="5"
          name="description"
          placeholder="Describe your work..."
          value={experience.description}
          onChange={handleChange}
          className="w-full p-4 rounded-xl bg-slate-800 outline-none"
        />

        <button
          className="bg-pink-600 hover:bg-pink-700 px-8 py-3 rounded-xl"
        >
          Save Experience
        </button>

      </form>

    </div>
  );
};

export default AddExperience;