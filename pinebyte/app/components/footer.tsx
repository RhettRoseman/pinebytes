import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white text-center py-8">
      {/* Links */}
      <div className="text-sm space-x-2">
        <Link href="/privacypolicy" className="hover:underline">
          Privacy Policy
        </Link>
        <span>|</span>
        <Link href="/terms-conditions" className="hover:underline">
          Terms & Conditions
        </Link>
      </div>

      {/* Logo */}
      <div className="mt-4 flex justify-center">
        <Image
          src="/pinebytelogo.png"
          alt="PineByte Digital Logo"
          width={20}
          height={20}
          className="object-contain opacity-90"
        />
      </div>

      {/* Copyright */}
      <p className="mt-4 text-xs text-gray-200 max-w-md mx-auto">
        &copy; {new Date().getFullYear()} PineByte Digital. All rights reserved. <br />
        PineByte Digital™ is a trademark of PineByte Digital, LLC. Any unauthorized use is prohibited.
      </p>
    </footer>
  );
}
