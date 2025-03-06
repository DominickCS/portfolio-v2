import React from "react";
import Image from "next/image";

const imageStyle = {
  borderRadius: "50%",
};

export default function Home() {
  return (
    <main>
      <div className="introContainer text-3xl text-center pt-6 pb-2 intro">
        <h1 className="text-3xl text-center pr-2">Hello, I’m Dominick!</h1>
        <p className="handEmoji pl-2">👋</p>
      </div>
      <div className="text-center text-sm">
        <p className="block m-auto motion-preset-typewriter-[14] motion-duration-2000">
          Web Developer
        </p>
      </div>
      <Image
        src={`/pfp.jpg`}
        alt="A photo of me, Dominick"
        width={500}
        height={1}
        className="pfp flex justify-center mx-auto py-2"
        style={imageStyle}
      ></Image>
      <h2 className="text-2xl text-center caption py-6">
        I craft sleek, scalable, and high-performance web experiences.
      </h2>
    </main>
  );
}
