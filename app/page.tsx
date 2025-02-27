import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="text-3xl text-center">
        <h1 className="text-3xl text-center intro">Hi, I’m Dominick</h1>
        <p className="handEmoji">👋</p>
      </div>
      <Image
        src={`/pfp.jpg`}
        alt="A photo of me, Dominick"
        width={400}
        height={1}
        className="pfp flex justify-center mx-auto py-8"
      ></Image>
      <h2 className="text-2xl text-center caption">
        I Build Modern & Scalable Web Experiences
      </h2>
    </main>
  );
}
