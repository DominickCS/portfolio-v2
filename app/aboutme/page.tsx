import Image from "next/image";

export default function aboutMe() {
  return (
    <>
      <div className="text-center mb-4">
        <h2 className="text-3xl mb-4">Biography</h2>
        <p className="block m-auto max-w-lg text-sm">
          A highly motivated and skilled Software Development Student with an
          Associate’s degree in Computer Networking, offering a solid foundation
          in Python, HTML, CSS, and JavaScript. With a deep understanding of
          computer systems and a track record of hands-on project experience, I
          thrive in fast-paced, innovative environments. As a fast learner, I'm
          committed to expanding my expertise and delivering impactful,
          results-driven solutions. Ready to apply my growing portfolio of live
          project demos to contribute to forward-thinking teams and drive
          technological success.
        </p>
      </div>
      <div className="text-center">
        <h2 className="text-3xl">Language Profficienies</h2>
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
    </>
  );
}
