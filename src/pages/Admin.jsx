import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaProjectDiagram,
  FaCode,
  FaBriefcase,
  FaSignOutAlt,
} from "react-icons/fa";

import Dashboard from "../component/Admin/Dashboard";

import AddProject from "../component/Admin/AddProject";
import ProjectList from "../component/Admin/ProjectList";

import AddSkill from "../component/Admin/AddSkill";
import SkillList from "../component/Admin/SkillList";

import AddExperience from "../component/Admin/AddExperience";
import ExperienceList from "../component/Admin/ExperienceList";

const Admin = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState("dashboard");

  const logout = () => {
    localStorage.removeItem("admin");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex bg-slate-950 text-white">

      {/* Sidebar */}
      <aside className="w-72 bg-slate-900 border-r border-slate-800 p-6">

        <h1 className="text-3xl font-bold text-blue-500 mb-10">
          Admin Panel
        </h1>

        <ul className="space-y-5">

          <li>
            <button
              onClick={() => setActive("dashboard")}
              className={`flex items-center gap-3 w-full text-left transition ${
                active === "dashboard"
                  ? "text-blue-500"
                  : "hover:text-blue-400"
              }`}
            >
              <FaHome />
              Dashboard
            </button>
          </li>

          <li>
            <button
              onClick={() => setActive("project")}
              className={`flex items-center gap-3 w-full text-left transition ${
                active === "project"
                  ? "text-blue-500"
                  : "hover:text-blue-400"
              }`}
            >
              <FaProjectDiagram />
              Projects
            </button>
          </li>

          <li>
            <button
              onClick={() => setActive("skill")}
              className={`flex items-center gap-3 w-full text-left transition ${
                active === "skill"
                  ? "text-blue-500"
                  : "hover:text-blue-400"
              }`}
            >
              <FaCode />
              Skills
            </button>
          </li>

          <li>
            <button
              onClick={() => setActive("experience")}
              className={`flex items-center gap-3 w-full text-left transition ${
                active === "experience"
                  ? "text-blue-500"
                  : "hover:text-blue-400"
              }`}
            >
              <FaBriefcase />
              Experience
            </button>
          </li>

        </ul>

        <button
          onClick={logout}
          className="mt-12 flex items-center gap-3 text-red-500 hover:text-red-400"
        >
          <FaSignOutAlt />
          Logout
        </button>

      </aside>

      {/* Main */}
      <main className="flex-1 p-10 overflow-y-auto">

        {active === "dashboard" && <Dashboard />}

        {active === "project" && (
          <>
            <AddProject />
            <ProjectList />
          </>
        )}

        {active === "skill" && (
          <>
            <AddSkill />
            <SkillList />
          </>
        )}

        {active === "experience" && (
          <>
            <AddExperience />
            <ExperienceList />
          </>
        )}

        <Link
          to="/"
          className="inline-block mt-10 text-blue-400 hover:underline"
        >
          ← Back to Portfolio
        </Link>

      </main>

    </div>
  );
};

export default Admin;