import { AppWindow, Bot, Code } from "lucide-react";
import React from "react";

const Accordion = () => {
  return (
    <div className="px-6 py-10 max-w-md">
      <div className="collapse collapse-arrow bg-[#1a1a2e] border border-[#2a2a3d] rounded-xl mb-3">
        <input type="checkbox" />
        <div className="collapse-title font-semibold text-white flex items-center gap-3">
          <AppWindow color="#4f2877" /> Web Development
        </div>
        <div className="collapse-content text-sm text-gray-400">
          <ul className="list-disc list-inside space-y-1">
            <li>Building responsive UIs with React & Tailwind CSS</li>
            <li>Creating interactive, seamless web experiences</li>
            <li>Frontend development is my strongest suit</li>
          </ul>
        </div>
      </div>

      <div className="collapse collapse-arrow bg-[#1a1a2e] border border-[#2a2a3d] rounded-xl mb-3">
        <input type="checkbox" />
        <div className="collapse-title font-semibold text-white flex items-center gap-3">
          <Code color="#4f2877" /> Java Programming (OOP, DSA)
        </div>
        <div className="collapse-content text-sm text-gray-400">
          <ul className="list-disc list-inside space-y-1">
            <li>Strong understanding of Core Java & OOP concepts</li>
            <li>Experience with data structures and algorithms in Java</li>
          </ul>
        </div>
      </div>

      <div className="collapse collapse-arrow bg-[#1a1a2e] border border-[#2a2a3d] rounded-xl mb-3">
        <input type="checkbox" />
        <div className="collapse-title font-semibold text-white flex items-center gap-3">
          <Bot color="#4f2877" /> AI/ML (Learning)
        </div>
        <div className="collapse-content text-sm text-gray-400">
          <ul className="list-disc list-inside space-y-1">
            <li>Currently exploring Machine Learning fundamentals</li>
            <li>Learning Python libraries like NumPy, Pandas & Scikit-learn</li>
            <li>
              Interested in building intelligent, data-driven applications
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
