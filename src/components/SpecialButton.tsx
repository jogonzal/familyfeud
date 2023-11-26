import Image from "next/image";
import { useState } from "react";

export const SpecialButton = () => {
  const [pressed, setPressed] = useState(false);

  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        backgroundColor: "red",
        borderRadius: "50%",
        userSelect: "none",
      }}
      onMouseDown={() => setPressed(true)}
      onMouseOut={() => setPressed(false)}
      onMouseUp={() => setPressed(false)}
    >
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
  );
};
