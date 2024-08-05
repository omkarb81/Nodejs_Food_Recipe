import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <div className="flex justify-center items-center min-h-screen flex-col">
    <h1 className=" lg:text-8xl md:text-6xl text-2xl font-extrabold">Welcome To recipe app </h1>
    <Link href={'recipe-list'}> <button className="p-3 mt-10 lg:text-2xl text-xs rounded-md text-white bg-black  ">Explore Recipe</button> </Link>
    </div>
  );
}
