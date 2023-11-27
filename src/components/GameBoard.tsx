"use client"; // All client side rendering :)

import { useStateWithLocalStorage } from "@/storage/useStateWithLocalStorage";
import {
  Button,
  Field,
  Switch,
  Title1,
  Title2,
  Textarea,
  Title3,
} from "@fluentui/react-components";
import { useState } from "react";
import { AddAnswerDialog } from "./AddAnswerDialog";
import {
  ArrowUp20Filled,
  Delete20Filled,
  ArrowDown20Filled,
  LockOpen20Filled,
  LockClosed20Filled,
} from "@fluentui/react-icons";
import { useSound } from "use-sound";
import { ImportAnswersDialog } from "./ImportAnswersDialog";

export interface IAnswer {
  points: number;
  answer: string;
  unlocked: boolean;
  id: string;
}

export const GameBoard = () => {
  const [answers, setAnswers] = useStateWithLocalStorage<IAnswer[]>(
    [],
    "answersv1"
  );
  const [gameMode, setGameMode] = useStateWithLocalStorage<boolean>(
    true,
    "gamemodev1"
  );
  const [addAnswerDialog, setAddAnswerDialog] = useState(false);
  const [importAnswersDialog, setImportAnswersDialog] = useState(false);

  const [team1Points, setTeam1Points] = useStateWithLocalStorage(
    0,
    "team1points"
  );

  const [team2Points, setTeam2Points] = useStateWithLocalStorage(
    0,
    "team2points"
  );

  const [team1Name, setTeam1Name] = useStateWithLocalStorage(
    "Team 1",
    "team1name"
  );

  const [team2Name, setTeam2Name] = useStateWithLocalStorage(
    "Team 2",
    "team2name"
  );

  const [question, setQuestion] = useStateWithLocalStorage("", "questionv1");

  const [play, { stop, pause }] = useSound(
    "/sounds/family-feud-good-answer.mp3",
    {
      // `interrupt` ensures that if the sound starts again before it's
      // ended, it will truncate it. Otherwise, the sound can overlap.
      interrupt: true,
    }
  );

  const badAnswerSound = useSound("/sounds/family-feud-bad-answer.mp3", {
    // `interrupt` ensures that if the sound starts again before it's
    // ended, it will truncate it. Otherwise, the sound can overlap.
    interrupt: true,
  });

  const [totalMisses, setTotalMisses] = useStateWithLocalStorage(
    0,
    "totalMissesv1"
  );

  const totalPoints = answers.reduce((prev, curr) => {
    if (!curr.unlocked) return prev;

    return curr.points + prev;
  }, 0);

  const renderTotalMisses = () => {
    const rendered = [];

    for (let i = 0; i < totalMisses; i++) {
      rendered.push(<Title1 key={i}>❌</Title1>);
    }

    if (totalMisses < 3) {
      rendered.push(
        <Button
          key={"MissButton"}
          onClick={() => {
            setTotalMisses(totalMisses + 1);
            badAnswerSound[0]();
          }}
        >
          Miss!
        </Button>
      );
    }

    return rendered;
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <Switch
        label="Game Mode"
        checked={gameMode}
        onChange={(ev, val) => setGameMode(val.checked)}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          padding: "10px",
          backgroundColor: "black",
          color: "white",
          textTransform: "uppercase",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Title1>{totalPoints}</Title1>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Title3>{question}</Title3>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            flexWrap: "wrap",
            height: "300px",
          }}
        >
          {answers.map((answer, index) => {
            return (
              <div
                key={answer.id}
                style={{
                  borderWidth: "2px",
                  borderRadius: "10px",
                  padding: "10px",
                  borderStyle: "solid",
                  borderColor: "yellow",
                  backgroundColor: "blue",
                  flexGrow: 0,
                }}
                onClick={() => {
                  if (!gameMode) return;
                  const newAnswer = { ...answer };
                  newAnswer.unlocked = !answer.unlocked;
                  const index = answers.indexOf(answer);
                  const newAnswers = [...answers];
                  newAnswers[index] = newAnswer;
                  setAnswers(newAnswers);
                  if (newAnswer.unlocked) play();
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontWeight: "bold",
                    flexGrow: 0,
                  }}
                >
                  <Title2>
                    {answer.unlocked || !gameMode ? answer.answer : "-"}
                  </Title2>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: "10px",
                      flexGrow: 0,
                    }}
                  >
                    <Title2>
                      {answer.unlocked || !gameMode ? answer.points : "-"}
                    </Title2>
                    {!gameMode && (
                      <>
                        <Button
                          onClick={() => {
                            const newAnswers = answers.filter(
                              (ans) => ans !== answer
                            );
                            setAnswers(newAnswers);
                          }}
                          icon={<Delete20Filled />}
                        />
                        <Button
                          onClick={() => {
                            const newAnswer = { ...answer };
                            newAnswer.unlocked = !answer.unlocked;
                            const index = answers.indexOf(answer);
                            const newAnswers = [...answers];
                            newAnswers[index] = newAnswer;
                            setAnswers(newAnswers);
                          }}
                          icon={
                            answer.unlocked ? (
                              <LockOpen20Filled />
                            ) : (
                              <LockClosed20Filled />
                            )
                          }
                        />
                        <Button
                          disabled={index === answers.length - 1}
                          onClick={() => {
                            // Move answer down in the array
                            const currentPosition = answers.indexOf(answer);
                            const newAnswers = answers.filter(
                              (ans) => ans !== answer
                            );
                            newAnswers.splice(currentPosition + 1, 0, answer);
                            setAnswers(newAnswers);
                          }}
                          icon={<ArrowDown20Filled />}
                        />
                        <Button
                          disabled={index === 0}
                          onClick={() => {
                            // Move answer up in the array
                            const currentPosition = answers.indexOf(answer);
                            const newAnswers = answers.filter(
                              (ans) => ans !== answer
                            );
                            newAnswers.splice(currentPosition - 1, 0, answer);
                            setAnswers(newAnswers);
                          }}
                          icon={<ArrowUp20Filled />}
                        />
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "row",
          }}
        >
          <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
            {renderTotalMisses()}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Title1>
              {team1Name}: {team1Points}
            </Title1>
          </div>
          <div>
            <Title1>
              {team2Name}: {team2Points}
            </Title1>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Button
              onClick={() => {
                setTeam1Points(totalPoints + team1Points);
              }}
            >
              {team1Name} wins round
            </Button>
          </div>
          <div>
            <Button
              onClick={() => {
                setTeam2Points(totalPoints + team2Points);
              }}
            >
              {team2Name} wins round
            </Button>
          </div>
        </div>
      </div>
      {!gameMode && (
        <div>
          <Button
            onClick={() => {
              setAddAnswerDialog(true);
            }}
          >
            Add answer
          </Button>

          <Button
            onClick={() => {
              setAnswers([]);
              setTotalMisses(0);
              setQuestion("");
            }}
          >
            Clear answers
          </Button>

          <Button
            onClick={() => {
              setImportAnswersDialog(true);
            }}
          >
            Import answers
          </Button>

          {addAnswerDialog && (
            <AddAnswerDialog
              onAnswerAdded={(newAnswer) => setAnswers([...answers, newAnswer])}
              showing={addAnswerDialog}
              onClose={() => setAddAnswerDialog(false)}
            />
          )}

          {importAnswersDialog && (
            <ImportAnswersDialog
              onDataAdded={(obj) => {
                obj.answers.forEach((ans) => (ans.unlocked = false));
                setAnswers(obj.answers);
                setTotalMisses(0);
                setQuestion(obj.question);
              }}
              showing={importAnswersDialog}
              onClose={() => setImportAnswersDialog(false)}
              answers={{
                answers,
                question,
              }}
            />
          )}

          <Field label="Team 1 points">
            <Textarea
              value={team1Points.toString()}
              onChange={(ev, val) => setTeam1Points(parseInt(val.value))}
            />
          </Field>

          <Field label="Team 1 name">
            <Textarea
              value={team1Name}
              onChange={(ev, val) => setTeam1Name(val.value)}
            />
          </Field>

          <Field label="Team 2 points">
            <Textarea
              value={team2Points.toString()}
              onChange={(ev, val) => setTeam2Points(parseInt(val.value))}
            />
          </Field>

          <Field label="Team 2 name">
            <Textarea
              value={team2Name}
              onChange={(ev, val) => setTeam2Name(val.value)}
            />
          </Field>

          <Field label="Total misses">
            <Textarea
              value={totalMisses.toString()}
              onChange={(ev, val) => setTotalMisses(parseInt(val.value))}
            />
          </Field>

          <Field label="Question">
            <Textarea
              value={question}
              onChange={(ev, val) => setQuestion(val.value)}
            />
          </Field>
        </div>
      )}
    </div>
  );
};
