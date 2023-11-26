"use client"; // All client side rendering :)

import Image from "next/image";
import { PlaySound } from "../components/PlaySound";
import { ClientWrapper } from "@/components/ClientWrapper";

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
    </div>
  );
}
