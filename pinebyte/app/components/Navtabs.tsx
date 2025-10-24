"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-900 text-white px-4 py-3 flex items-center justify-between relative">
      {/* Logo / Brand */}
      <h1 className="text-xl font-bold">Pine Bytes</h1>

      {/* Desktop links */}
      <div className="hidden md:flex space-x-6">
        <Link href="/" className="hover:text-gray-400">Home</Link>
        <Link href="/about" className="hover:text-gray-400">About</Link>
        <Link href="/services" className="hover:text-gray-400">Services</Link>
        <Link href="/contact" className="hover:text-gray-400">Contact</Link>
      </div>

      {/* Mobile hamburger */}
      <div className="md:hidden text-2xl cursor-pointer select-none" onClick={toggleMenu}>
        {isOpen ? "✕" : "☰"}
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-900 flex flex-col items-center md:hidden py-4 space-y-3">
          <Link href="/" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/services" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="/contact" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
