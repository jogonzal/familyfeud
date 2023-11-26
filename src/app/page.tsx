"use client"; // All client side rendering :)

import { useState } from "react";
import { Title1 } from "@fluentui/react-components";
import { SoundBoard } from "@/components/SoundBoard";
import { GameBoard } from "@/components/GameBoard";
import Image from "next/image";

export default function Home() {
  const [song, setSong] = useState<
    { filename: string; song: string } | undefined
  >(undefined);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <Title1>Let&apos;s play Family Feud!</Title1>
        <Image alt="" src="/img/SteveHarvey.jpg" width={70} height={70} />
        <img src="/img/family-feud.png" height="70px" />
      </div>
      <SoundBoard />
      <GameBoard />
    </div>
  );
}
