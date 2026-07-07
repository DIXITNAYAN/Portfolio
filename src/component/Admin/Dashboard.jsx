import { useEffect, useState } from "react";
import {
  FaProjectDiagram,
  FaCode,
  FaBriefcase,
} from "react-icons/fa";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const Dashboard = () => {
  const [projectCount, setProjectCount] = useState(0);
  const [skillCount, setSkillCount] = useState(0);
  const [experienceCount, setExperienceCount] = useState(0);

  useEffect(() => {
    fetchCounts();
  }, []);

  const fetchCounts = async () => {
    try {
      const projectSnapshot = await getDocs(collection(db, "projects"));
      setProjectCount(projectSnapshot.size);

      const skillSnapshot = await getDocs(collection(db, "skills"));
      setSkillCount(skillSnapshot.size);

      const experienceSnapshot = await getDocs(collection(db, "experience"));
      setExperienceCount(experienceSnapshot.size);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>

      <h1 className="text-4xl font-bold mb-10">
        Welcome Admin 👋
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <FaProjectDiagram className="text-4xl text-blue-500 mb-5" />

          <h2 className="text-xl font-semibold">
            Projects
          </h2>

          <p className="text-5xl font-bold mt-5 text-blue-500">
            {projectCount}
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <FaCode className="text-4xl text-green-500 mb-5" />

          <h2 className="text-xl font-semibold">
            Skills
          </h2>

          <p className="text-5xl font-bold mt-5 text-green-500">
            {skillCount}
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <FaBriefcase className="text-4xl text-pink-500 mb-5" />

          <h2 className="text-xl font-semibold">
            Experience
          </h2>

          <p className="text-5xl font-bold mt-5 text-pink-500">
            {experienceCount}
          </p>
        </div>

      </div>

      <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8 mt-10">

        <h2 className="text-2xl font-bold mb-3">
          Portfolio Overview
        </h2>

        <p className="text-slate-400 leading-8">
          Welcome to your Portfolio Admin Dashboard.
          Here you can manage Projects, Skills and Experience.
          All changes are automatically synced with Firebase and
          reflected on your portfolio website.
        </p>

      </div>

    </div>
  );
};

export default Dashboard;