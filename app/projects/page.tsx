import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="motion-preset-expand">
      <div>
        <h1 className="text-center text-3xl underline py-8">Projects</h1>
      </div>
      <div className="flex justify-center">
        <Button asChild className="p-8 my-8 text-xl">
          <Link
            href={"https://github.com/DominickCS"}
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </Link>
        </Button>
      </div>
      <p className="text-center text-xl p-16">
        You can find all of my projects on my GitHub profile!
      </p>
    </div>
  );
}
