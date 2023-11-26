import Image from "next/image";
import { useState } from "react";
import { Caption1 } from "@fluentui/react-components";
import { useSound } from "use-sound";

export const SpecialButton = ({
  song,
}: {
  song: {
    filename: string;
    song: string;
    color: string;
  };
}) => {
  const [pressed, setPressed] = useState(false);
  const [play, { stop, pause }] = useSound(song.filename, {
    // `interrupt` ensures that if the sound starts again before it's
    // ended, it will truncate it. Otherwise, the sound can overlap.
    interrupt: true,
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100px",
      }}
    >
      <div
        style={{
          backgroundColor: song.color,
          borderRadius: "50%",
          userSelect: "none",
          width: "100px",
          height: "100px",
        }}
        onMouseDown={() => setPressed(true)}
        onMouseOut={() => setPressed(false)}
        onMouseUp={() => setPressed(false)}
        onClick={() => play()}
      >
        <div>
          <Image
            src={pressed ? "/img/button-pressed.png" : "/img/button.png"}
            alt={""}
            draggable={false}
            width={100}
            height={100}
            style={{
              userSelect: "none",
            }}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Caption1 align="center">{song.song}</Caption1>
      </div>
    </div>
  );
};
