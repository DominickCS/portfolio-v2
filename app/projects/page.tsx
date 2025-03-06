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
      <div className="grid grid-cols-4 gap-6 text-center p-6">
        <Link href={"https://github.com/DominickCS/pyZombie"}>
          <div className="outline rounded-md p-4">
            <h3 className="text-2xl py-2 underline">PyZombie</h3>
            <p className="text-sm py-2">
              A top-down shooter game where the zombies don't stop! You are
              destined to die, but how long can you last?
            </p>
            <p className="text-xs text-blue-500 py-2">
              #Python #PyGame #GameDev
            </p>
          </div>
        </Link>
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
