import { GameType } from "@/app/page";
import { SpecialButton } from "@/components/SpecialButton";
import { Title3 } from "@fluentui/react-components";

export const logoFamilyFeud = "/img/family-feud.png";
export const logo100MexicanosDijeron = "/img/100Mexicanos.png";

export const brandImageFamilyFeud = "/img/SteveHarvey.jpg";
export const brandImage100MexicanosDijeron = "/img/vitor.png";

export const soundGoodAnswerFamilyFeud = "/sounds/family-feud-good-answer.mp3";
export const soundBadAnswerFamilyFeud = "/sounds/family-feud-bad-answer.mp3";

export const soundGoodAnswer100MexicanosDijeron =
  "/sounds/100-mexicanos-good-answer.mp3";
export const soundBadAnswer100MexicanosDijeron = soundBadAnswerFamilyFeud;

const songsFamilyFeud = [
  {
    filename: "/sounds/family-feud-buzz.mp3",
    song: "Buzz 👆",
    color: "blue",
  },
  {
    filename: soundGoodAnswerFamilyFeud,
    song: "Good answer ✅",
    color: "green",
  },
  {
    filename: soundBadAnswerFamilyFeud,
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

export const songsMexicanosDijeron = [
  {
    filename: "/sounds/family-feud-buzz.mp3",
    song: "Buzz 👆",
    color: "blue",
  },
  {
    filename: soundGoodAnswer100MexicanosDijeron,
    song: "Good answer ✅",
    color: "green",
  },
  {
    filename: soundBadAnswer100MexicanosDijeron,
    song: "Bad answer ❌",
    color: "red",
  },
  // {
  //   filename: "/sounds/family-feud-intro.mp3",
  //   song: "Intro 😊",
  //   color: "purple",
  // },
  {
    filename: "/sounds/100-mexicanos-long-music.mp3",
    song: "Music 🎶",
    color: "yellow",
  },
  {
    filename: "/sounds/100-mexicanos-short-music.mp3",
    song: "Short music 🎵",
    color: "cyan",
  },
  {
    filename: "/sounds/100-mexicanos-team-winner.mp3",
    song: "Team Winner 💥",
    color: "black",
  },
  {
    filename: "/sounds/100-mexicanos-thinking-sound.mp3",
    song: "Thinking 🤔",
    color: "orange",
  },
  {
    filename: "/sounds/fart_reverb.mp3",
    song: "Fart 💨",
    color: "green",
  },
  {
    filename: "/sounds/wow_anime.mp3",
    song: "Wow 😲",
    color: "teal",
  },
];

export const SoundBoard = ({
  currentGameType,
}: {
  currentGameType: GameType;
}) => {
  return (
    <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
      <Title3>SoundBoard</Title3>
      <div style={{ display: "flex", gap: "5px", flexDirection: "row" }}>
        {(currentGameType == "100-mexicanos-dijeron"
          ? songsMexicanosDijeron
          : songsFamilyFeud
        ).map((song) => {
          return <SpecialButton key={song.filename} song={song} />;
        })}
      </div>
    </div>
  );
};
