import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-center">
      <Link className="link" href={`/`}>
        Home
      </Link>
      <Link className="link" href={`/aboutMe`}>
        About Me
      </Link>
      <Link className="link" href={`/projects`}>
        Projects
      </Link>
    </div>
  );
}
