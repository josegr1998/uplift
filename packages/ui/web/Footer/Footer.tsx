import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-[var(--background)] border-t border-[var(--accent)] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-[var(--neutral)] text-sm">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="#"
              className="text-[var(--neutral)] hover:text-[var(--primary)] text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-[var(--neutral)] hover:text-[var(--primary)] text-sm"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-[var(--neutral)] hover:text-[var(--primary)] text-sm"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
