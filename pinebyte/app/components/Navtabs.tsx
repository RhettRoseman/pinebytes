"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-green-900 text-white px-4 py-3 flex items-center justify-between relative"
     style={{
    backgroundImage: 'url("/")',              // make sure path is correct
    backgroundSize: 'cover',                  // image covers whole nav area
    backgroundPosition: 'center',      // center the image
    backgroundRepeat: 'no-repeat',            // don’t repeat
    backdropFilter: 'brightness(0.6)',        // darken for readability
  }}>
      {/* Logo / Brand */}
      <Link href="/">
       <Image
        src="/pinebytelogo.png"
        alt="PineByte Digital Logo"
        width={50}
        height={50}
        className="object-contain"
        priority
      />
      </Link>

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
