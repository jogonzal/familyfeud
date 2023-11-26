"use client"; // All client side rendering :)

import Image from "next/image";
import { PlaySound } from "../components/PlaySound";
import { SpecialButton } from "@/components/SpecialButton";

export default function Home() {
  return (
    <div>
      Hello world
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        width={100}
        height={24}
        priority
      />
      <PlaySound />
      <SpecialButton />
    </div>
  );
}
