'use client';
import Link from "next/link"
import Image from "next/image"
import { useEffect } from "react";

export default function ContactComp() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full flex justify-center">
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/rhettroseman1"
        style={{ minWidth: "400px", height: "800px" }}
      ></div>
    </div>
  );
}
