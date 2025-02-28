import Link from "next/link";

export default function Projects() {
  return (
    <>
      <h1 className="text-center text-3xl">Projects</h1>;
      <p className="text-center text-xl">
        You can find my projects on my GitHub profile!
      </p>
      <div className="flex justify-center">
        <button>
          <Link href={"https://github.com/DominickCS"}>GitHub</Link>
        </button>
      </div>
    </>
  );
}
