import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <header className="bg-[var(--background)] shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex space-x-8 mx-auto">
            <Link
              href="/"
              className="text-[var(--black)] hover:text-[var(--primary)] px-3 py-2 text-lg font-medium"
            >
              Home
            </Link>
            <Link
              href="/charts"
              className="text-[var(--black)] hover:text-[var(--primary)] px-3 py-2 text-lg font-medium"
            >
              Charts
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
