import Image from "next/image";

export default function aboutMe() {
  return (
    <>
      <div className="text-center">
        <p className="text-sm">Hello World!</p>
      </div>
      <div className="text-center">
        <h1 className="text-3xl">Language Profficienies</h1>
      </div>
      <div className="flex justify-evenly py-12 items-center">
        <div>
          <Image
            className="block m-auto"
            src={"/js.svg"}
            alt="The JavaScript Programming Language Logo"
            height={80}
            width={80}
          ></Image>
          <p className="text-2xl mt-2 mb-2">Javascript</p>
        </div>
        <div>
          <p className="text-2xl mt-2 mb-2">Python</p>
        </div>
        <div>
          <p className="text-2xl mt-2 mb-2">Java</p>
        </div>
      </div>
    </>
  );
}
