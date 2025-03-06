import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="motion-preset-expand">
      <div>
        <h1 className="text-center text-3xl underline py-6">Projects</h1>
        <p className="text-center text-xl pb-6">
          You can find all of my projects on my GitHub profile!
        </p>
      </div>
      <div className="grid grid-cols-4 gap-4 text-center py-6">
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
      </div>
      <div className="flex justify-center py-6">
        <Button asChild className="p-8 text-xl">
          <Link
            href={"https://github.com/DominickCS"}
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </Link>
        </Button>
      </div>
    </div>
  );
}
