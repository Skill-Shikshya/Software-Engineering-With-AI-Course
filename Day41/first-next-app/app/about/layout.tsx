import Link from "next/link";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav className="flex gap-10">
        <h1>Header</h1>
        <Link className="text-blue-900" href="/about">
          About
        </Link>
        <Link className="text-blue-900" href="/about/aboutme">
          AboutMe
        </Link>
      </nav>
      <input className="border-gray-500" type="text" />
      {children}
      <h1>Footer</h1>
    </>
  );
}

export default layout;
