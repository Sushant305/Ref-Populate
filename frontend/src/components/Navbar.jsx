import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const NavLinkClass = ({ isActive }) => {
    return `rounded-lg px-4 py-2 text-sm font-medium transition ${
      isActive
        ? "bg-blue-500 text-white"
        : "text-slate-600 hover:bg-slate-100 hover:text-blue-600"
    }`;
  };  
  return (
    <div className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 py-4">
        <NavLink to="/" className="text-xl font-bold text-blue-600">
          Ref-Populate
        </NavLink>

        <div className="flex flex-wrap items-center gap-2">
          <NavLink to="/" end className={NavLinkClass}>
            Home
          </NavLink>
          <NavLink to="/users" end className={NavLinkClass}>
            Users
          </NavLink>
          <NavLink to="/posts/create" end className={NavLinkClass}>
            Create Posts
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
