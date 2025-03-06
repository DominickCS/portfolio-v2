import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="motion-preset-expand">
      <div>
        <h1 className="text-center text-3xl py-6">Featured Projects ⭐</h1>
        <p className="text-center text-xl pb-6">
          You can find all of my projects on my GitHub profile!
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 text-center p-6">
        <Link
          href={"https://github.com/DominickCS/pyZombie"}
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="outline rounded-md p-4 hover:motion-preset-pulse-sm">
            <h3 className="text-xl py-2 underline">PyZombie</h3>
            <p className="text-sm py-2">
              A top-down shooter game where the zombies don't stop! You are
              destined to die, but how long can you last?
            </p>
            <p className="text-xs text-blue-500 py-2">
              #Python #PyGame #GameDev
            </p>
          </div>
        </Link>
        <Link
          href={"https://github.com/DominickCS/respotdl"}
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="outline rounded-md p-4 hover:motion-preset-pulse-sm">
            <h3 className="text-xl py-2 underline">respotdl</h3>
            <p className="text-sm py-2">
              A Python script to download Music to a remote server.
            </p>
            <p className="text-xs text-blue-500 py-2">
              #Python #SysAdmin #Utility
            </p>
          </div>
        </Link>
      </div>
      <div className="flex justify-center py-6">
        <Button asChild className="p-8 text-xl hover:motion-preset-pulse-sm">
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
