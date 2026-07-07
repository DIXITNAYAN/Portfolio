import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";

const AddProject = () => {
  const [project, setProject] = useState({
    title: "",
    description: "",
    github: "",
    live: "",
  });

  const handleChange = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "projects"), {
        title: project.title,
        description: project.description,
        github: project.github,
        live: project.live,
        createdAt: new Date(),
      });

      alert("✅ Project Added Successfully");

      setProject({
        title: "",
        description: "",
        github: "",
        live: "",
      });
    } catch (error) {
      console.log(error);
      alert("❌ " + error.message);
    }
  };

  return (
    <div className="bg-slate-900 p-8 rounded-2xl mt-10 border border-slate-800">

      <h2 className="text-3xl font-bold mb-8 text-blue-500">
        Add Project
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">

        <input
          type="text"
          name="title"
          value={project.title}
          onChange={handleChange}
          placeholder="Project Name"
          className="w-full p-4 rounded-xl bg-slate-800 outline-none"
          required
        />

        <textarea
          name="description"
          value={project.description}
          onChange={handleChange}
          placeholder="Project Description"
          rows="5"
          className="w-full p-4 rounded-xl bg-slate-800 outline-none"
          required
        />

        <input
          type="url"
          name="github"
          value={project.github}
          onChange={handleChange}
          placeholder="GitHub Link (Optional)"
          className="w-full p-4 rounded-xl bg-slate-800 outline-none"
        />

        <input
          type="url"
          name="live"
          value={project.live}
          onChange={handleChange}
          placeholder="Live Demo Link (Optional)"
          className="w-full p-4 rounded-xl bg-slate-800 outline-none"
        />

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl font-semibold transition"
        >
          Save Project
        </button>

      </form>

    </div>
  );
};

export default AddProject;