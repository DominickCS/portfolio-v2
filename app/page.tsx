import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="introContainer text-3xl text-center intro">
        <h1 className="text-3xl text-center pr-2">Hi, I’m Dominick</h1>
        <p className="handEmoji pl-2">👋</p>
      </div>
      <Image
        src={`/pfp.jpg`}
        alt="A photo of me, Dominick"
        width={400}
        height={1}
        className="pfp flex justify-center mx-auto py-8"
      ></Image>
      <h2 className="text-2xl text-center caption">
        I craft sleek, scalable, and high-performance web experiences.
      </h2>
    </main>
  );
}
