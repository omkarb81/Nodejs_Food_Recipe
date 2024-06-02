import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
    <h1>Welcome To recipe app </h1>
    <Link href={'recipe-list'}>Explore Recipe</Link>
    </div>
  );
}
