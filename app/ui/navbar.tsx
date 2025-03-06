import { ModeToggle } from "@/components/ui/darkmodetoggle";
import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="flex mt-4 justify-center">
        <ModeToggle></ModeToggle>
      </div>
      <div className="flex flex-wrap py-6 justify-center">
        <div>
          <Link className="link" href={`/`}>
            Home
          </Link>
        </div>
        <div>
          <Link className="link" href={`/aboutme`}>
            About
          </Link>
        </div>
        <div>
          <Link className="link" href={`/projects`}>
            Projects
          </Link>
        </div>
        <div>
          <Link className="link" href={"mailto:dominick.smith938@gmail.com"}>
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}
