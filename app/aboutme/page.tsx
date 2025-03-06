import Image from "next/image";

export default function aboutMe() {
  return (
    <>
      <main className="about">
        <div className="text-center">
          <h2 className="text-3xl py-6 underline">About Me</h2>
          <p className="block m-auto max-w-xs md:max-w-3xl text-md md:text-xl py-6">
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
          <h2 className="text-3xl underline py-6">Work Experience</h2>
          <p className="block m-auto max-w-xs md:max-w-3xl text-md md:text-xl py-6">
            In my current role at Global IP Networks, I work as a Datacenter
            Technician, where I have the privilege of gaining hands-on
            experience in the dynamic field of infrastructure technology. Being
            immersed in the very systems that power the code I write has
            deepened my understanding and fueled my passion for both the
            hardware and software aspects of development. Every day presents new
            challenges, from linking network cross-connects to addressing
            power-related issues. I thrive in this environment, constantly
            seeking out opportunities to expand my skillset and enhance my
            problem-solving abilities. With each new experience, I grow both
            technically and creatively, sharpening my expertise and driving my
            curiosity to explore the infinite potential of the tech world.
          </p>
        </div>
        <div className="text-center">
          <h2 className="text-3xl underline py-6">Language Proficiencies</h2>
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
