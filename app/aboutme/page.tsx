import Image from "next/image";

export default function aboutMe() {
  return (
    <>
      <main className="about">
        <div className="text-center pb-8">
          <h2 className="text-3xl pb-8 underline">About Me</h2>
          <p className="block m-auto max-w-3xl text-lg">
            I am a highly motivated and skilled Software Engineering student. I
            am currently enrolled at Western Governors University under the
            BWSWE program. I currently possess a Associate’s degree in Computer
            Networking from Collin County Community College. I am seeking
            opportunity to utilize my skillset in as a Front-End Web Developer.
            I have a deep understanding of computer systems and a proven track
            record of project experience. I thrive in fast-paced, innovative
            environments. As a fast learner, I'm committed to expanding my
            expertise and delivering impactful, results-driven solutions. Ready
            to apply my growing portfolio of live project demos to contribute to
            forward-thinking teams and drive technological success.
          </p>
        </div>
        <div className="text-center">
          <h2 className="text-3xl underline">Language Proficiencies</h2>
        </div>
        <div className="flex justify-evenly py-12 items-center text-center">
          <div>
            <Image
              className="block m-auto"
              src={"/js.svg"}
              alt="The JavaScript Programming Language Logo"
              height={65}
              width={65}
            ></Image>
            <p className="text-2xl mt-2 mb-2">Javascript</p>
          </div>
          <div>
            <Image
              className="block m-auto"
              src={"/python.png"}
              alt="The Python Programming Language Logo"
              height={80}
              width={80}
            ></Image>
            <p className="text-2xl mt-2 mb-2">Python</p>
          </div>
          <div>
            <Image
              className="block m-auto"
              src={"/java.png"}
              alt="The Java Programming Language Logo"
              height={80}
              width={80}
            ></Image>
            <p className="text-2xl mt-2 mb-2">Java</p>
          </div>
        </div>
        <div className="flex justify-evenly py-12 items-center text-center">
          <div>
            <Image
              className="block m-auto"
              src={"/react.png"}
              alt="The React Framework Logo"
              height={80}
              width={80}
            ></Image>
            <p className="text-2xl mt-2 mb-2">React</p>
          </div>
          <div>
            <Image
              className="block m-auto"
              src={"/tailwind.png"}
              alt="The Tailwind CSS Logo"
              height={80}
              width={80}
            ></Image>
            <p className="text-2xl mt-2 mb-2">Tailwind CSS</p>
          </div>
        </div>
        <div className="flex justify-evenly py-12 items-center text-center">
          <div>
            <Image
              className="block m-auto"
              src={"/nextjs.png"}
              alt="The NextJS Framework Logo"
              height={80}
              width={80}
            ></Image>
            <p className="text-2xl mt-2 mb-2">NextJS</p>
          </div>
        </div>
      </main>
    </>
  );
}
