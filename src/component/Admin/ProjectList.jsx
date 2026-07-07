import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../firebase";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaTrash,
  FaEdit,
} from "react-icons/fa";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "projects"));

      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setProjects(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this project?"
    );

    if (!confirmDelete) return;

    try {
      await deleteDoc(doc(db, "projects", id));
      fetchProjects();
      alert("Project Deleted Successfully ✅");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="mt-12">

      <h2 className="text-3xl font-bold mb-8 text-blue-500">
        All Projects
      </h2>

      <div className="space-y-6">

        {projects.length === 0 ? (
          <div className="bg-slate-900 rounded-xl p-8 text-center text-slate-400">
            No Projects Found
          </div>
        ) : (
          projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
            >
              <h3 className="text-2xl font-bold">
                {project.title}
              </h3>

              <p className="text-slate-400 mt-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-4 mt-6">

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                )}

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-lg hover:bg-green-600 transition"
                  >
                    <FaExternalLinkAlt />
                    Live
                  </a>
                )}

              </div>

              <div className="flex gap-4 mt-8">

                <button
                  className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 px-5 py-2 rounded-lg"
                >
                  <FaEdit />
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(project.id)}
                  className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg"
                >
                  <FaTrash />
                  Delete
                </button>

              </div>

            </div>
          ))
        )}

      </div>

    </div>
  );
};

export default ProjectList;