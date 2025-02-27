import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <h1 className="text-3xl text-center">Hi, I’m Dominick 👋</h1>
      <Image
        src={`/pfp.jpg`}
        alt="A photo of me, Dominick"
        width={500}
        height={1}
        className="pfp flex justify-center mx-auto py-8"
      ></Image>
      <h2 className="text-2xl text-center">
        I Build Modern & Scalable Web Experiences
      </h2>
    </main>
  );
}
