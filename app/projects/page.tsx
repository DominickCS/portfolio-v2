import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Projects() {
  return (
    <>
      <div className="motion-preset-expand">
        <h1 className="text-center text-3xl">Projects</h1>
        <p className="text-center text-xl">
          You can find all of my projects on my GitHub profile!
        </p>
        <div className="flex justify-center">
          <Button asChild className="py-4 my-4">
            <Link href={"https://github.com/DominickCS"}>GitHub</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
