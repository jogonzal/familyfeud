"use client"; // All client side rendering :)

import { Switch, Title1 } from "@fluentui/react-components";
import {
  SoundBoard,
  brandImage100MexicanosDijeron,
  brandImageFamilyFeud,
  logo100MexicanosDijeron,
  logoFamilyFeud,
} from "@/components/SoundBoard";
import { GameBoard } from "@/components/GameBoard";
import Image from "next/image";
import { useStateWithLocalStorage } from "@/storage/useStateWithLocalStorage";

export type GameType = "family-feud" | "100-mexicanos-dijeron";

export default function Home() {
  const [currentGameType, setCurrentGameType] =
    useStateWithLocalStorage<GameType>("family-feud", "currentGameType");

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
        <Title1>
          {currentGameType === "100-mexicanos-dijeron"
            ? "Juguemos 100 Mexicanos Dijeron!"
            : "Let's play Family Feud!"}
        </Title1>
        <Image
          alt=""
          src={
            currentGameType === "100-mexicanos-dijeron"
              ? logo100MexicanosDijeron
              : logoFamilyFeud
          }
          width={120}
          height={70}
        />
        <Image
          alt=""
          src={
            currentGameType === "100-mexicanos-dijeron"
              ? brandImage100MexicanosDijeron
              : brandImageFamilyFeud
          }
          height={70}
          width={70}
        />
        <Switch
          label={
            currentGameType === "100-mexicanos-dijeron"
              ? "100 Mexicanos Dijeron"
              : "Family Feud"
          }
          checked={currentGameType === "family-feud"}
          onChange={(ev, val) => {
            if (val.checked) {
              setCurrentGameType("family-feud");
            } else {
              setCurrentGameType("100-mexicanos-dijeron");
            }
          }}
        />
      </div>
      <SoundBoard currentGameType={currentGameType} />
      <GameBoard currentGameType={currentGameType} />
    </div>
  );
}
