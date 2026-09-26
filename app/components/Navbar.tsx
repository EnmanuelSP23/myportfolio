"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-6 sm:px-12 py-4 bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
      <a href="#hero" className="flex items-center gap-2" onClick={() => setOpen(false)}>
        <span className="w-3 h-3 rounded-full bg-blue-600 animate-pulse" />
        <span className="text-lg font-bold tracking-tight text-gray-900 font-mono">
          Enmanuel<span className="text-blue-600">.it</span>
        </span>
      </a>

      <button
        className="sm:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <span className={`block h-0.5 w-5 bg-gray-600 transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`block h-0.5 w-5 bg-gray-600 transition-opacity ${open ? "opacity-0" : ""}`} />
        <span className={`block h-0.5 w-5 bg-gray-600 transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

      <ul
        className={`fixed sm:static top-16 left-0 w-full sm:w-auto bg-white sm:bg-transparent border-b sm:border-0 border-gray-200 sm:flex items-center gap-6 text-sm font-medium text-gray-600 transition-all duration-300 ${
          open ? "translate-x-0" : "-translate-x-full sm:translate-x-0"
        }`}
      >
        <li className="hover:text-blue-600 transition-colors border-b sm:border-0 border-gray-100">
          <a href="#hero" className="block px-6 sm:px-0 py-3 sm:py-0" onClick={() => setOpen(false)}>Home</a>
        </li>
        <li className="hover:text-blue-600 transition-colors border-b sm:border-0 border-gray-100">
          <a href="#about" className="block px-6 sm:px-0 py-3 sm:py-0" onClick={() => setOpen(false)}>About</a>
        </li>
        <li className="hover:text-blue-600 transition-colors border-b sm:border-0 border-gray-100">
          <a href="#certifications" className="block px-6 sm:px-0 py-3 sm:py-0" onClick={() => setOpen(false)}>Certs</a>
        </li>
        <li className="hover:text-blue-600 transition-colors border-b sm:border-0 border-gray-100">
          <a href="#projects" className="block px-6 sm:px-0 py-3 sm:py-0" onClick={() => setOpen(false)}>Projects</a>
        </li>
        <li className="hover:text-blue-600 transition-colors">
          <a href="#contact" className="block px-6 sm:px-0 py-3 sm:py-0" onClick={() => setOpen(false)}>Contact</a>
        </li>
      </ul>
    </nav>
  );
}