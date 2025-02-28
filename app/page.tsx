import React from "react";
import Image from "next/image";

const imageStyle = {
  borderRadius: "50%",
};

export default function Home() {
  return (
    <main>
      <div className="introContainer text-3xl text-center pt-4">
        <h1 className="text-3xl text-center pr-2">
          Hi, I’m <span className="motion-preset-typewriter-[8]">Dominick</span>
        </h1>
        <p className="handEmoji pl-2">👋</p>
      </div>
      <Image
        src={`/pfp.jpg`}
        alt="A photo of me, Dominick"
        width={500}
        height={1}
        className="pfp flex justify-center mx-auto py-4"
        style={imageStyle}
      ></Image>
      <h2 className="text-2xl text-center caption pb-8">
        I craft sleek, scalable, and high-performance web experiences.
      </h2>
    </main>
  );
}
