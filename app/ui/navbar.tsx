import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-center pb-8">
      <Link className="link" href={`/`}>
        Home
      </Link>
      <Link className="link" href={`/aboutme`}>
        About Me
      </Link>
      <Link className="link" href={`/projects`}>
        Projects
      </Link>
      <Link className="link" href={`/contact`}>
        Contact Me
      </Link>
    </div>
  );
}
