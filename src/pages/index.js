import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
<div>
  <h1 className="text-3xl font-bold underline">Kubabibb Mushtaq</h1>
  <p>I am a Web Developer </p>
  <p>I love to code</p>
</div>
  );
}
