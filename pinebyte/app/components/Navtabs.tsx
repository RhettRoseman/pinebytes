"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="relative z-40 bg-green-900 text-white px-4 py-3 flex items-center justify-between"
      style={{
        backgroundImage: 'url("/")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Logo */}
      <Link href="/" onClick={() => setIsOpen(false)}>
        <Image
          src="/pinebytelogo.jpg"
          alt="PineByte Digital Logo"
          width={50}
          height={50}
          className="object-contain"
          priority
        />
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-6">
        <Link href="/" className="hover:text-gray-400">Home</Link>
        <Link href="/about" className="hover:text-gray-400">About</Link>
        <Link href="/services" className="hover:text-gray-400">Services</Link>
        <Link href="/contact" className="hover:text-gray-400">Contact</Link>
      </div>

      {/* Hamburger */}
      <button
        className="md:hidden text-2xl z-50"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-green-900 z-50 flex flex-col items-center py-4 space-y-4 md:hidden">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/services" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
