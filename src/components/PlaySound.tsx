import { useSound } from "use-sound";

export const PlaySound = () => {
  const [play] = useSound("/sounds/family-feud-introduction.mp3");

  return <div onClick={() => play()}>Click me!</div>;
};
