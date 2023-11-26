import { SpecialButton } from "@/components/SpecialButton";
import { Title3 } from "@fluentui/react-components";

const songs = [
  {
    filename: "/sounds/family-feud-buzz.mp3",
    song: "Buzz 👆",
    color: "blue",
  },
  {
    filename: "/sounds/family-feud-good-answer.mp3",
    song: "Good answer ✅",
    color: "green",
  },
  {
    filename: "/sounds/family-feud-bad-answer.mp3",
    song: "Bad answer ❌",
    color: "red",
  },
  {
    filename: "/sounds/family-feud-intro.mp3",
    song: "Intro 😊",
    color: "purple",
  },
  {
    filename: "/sounds/family-feud-music.mp3",
    song: "Music 🎶",
    color: "yellow",
  },
  {
    filename: "/sounds/family-feud-return-music.mp3",
    song: "Return music 🎵",
    color: "cyan",
  },
  {
    filename: "/sounds/vine-boom.mp3",
    song: "Vine boom 💥",
    color: "black",
  },
  //   {
  //     filename: "/sounds/aw-hell-nah-man.mp3",
  //     song: "Aww hell nawhh 🙈",
  //     color: "orange",
  //   },
];

export const SoundBoard = () => {
  return (
    <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
      <Title3>SoundBoard</Title3>
      <div style={{ display: "flex", gap: "5px", flexDirection: "row" }}>
        {songs.map((song) => {
          return <SpecialButton key={song.filename} song={song} />;
        })}
      </div>
    </div>
  );
};
