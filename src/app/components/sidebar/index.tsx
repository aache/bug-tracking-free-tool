import React from "react";

export const Sidebar = () => {
  return (
    <>
      <aside className="w-64 bg-gray-800 text-white p-4 h-full">
        <h1 className="text-2xl font-bold mb-6">Bug Tracker</h1>
        <nav>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-blue-400">
                Dashboard
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-blue-400">
                Projects
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-blue-400">
                Issues
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-blue-400">
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};
