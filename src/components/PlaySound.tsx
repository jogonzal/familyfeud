import { useSound } from "use-sound";
import { Button } from "@fluentui/react-components";

export const PlaySound = () => {
  const [play] = useSound("/sounds/family-feud-introduction.mp3");

  return <Button onClick={() => play()}>Click me!</Button>;
};
