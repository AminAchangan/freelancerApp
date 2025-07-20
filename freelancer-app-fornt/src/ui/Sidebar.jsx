import React from "react";
import { HiCollection, HiHome } from "react-icons/hi";
import { NavLink } from "react-router-dom";

function Sidebar({ children }) {
  return (
    <div className="bg-secondary-0 py-4 px-4 row-start-1 row-span-2 border-l border-secondary-150">
      <ul className="flex flex-col gap-y-4">
        {children}
      </ul>
    </div>
  );
}

export default Sidebar;

