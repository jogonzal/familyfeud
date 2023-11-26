"use client"; // All client side rendering :)

import { useStateWithLocalStorage } from "@/storage/useStateWithLocalStorage";
import {
  Button,
  CounterBadge,
  Switch,
  Title2,
} from "@fluentui/react-components";
import { useState } from "react";
import { AddAnswerDialog } from "./AddAnswerDialog";
import {
  ArrowUp20Filled,
  Delete20Filled,
  ArrowDown20Filled,
} from "@fluentui/react-icons";

export interface IAnswer {
  points: number;
  answer: string;
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
          gap: "5px",
          borderWidth: "2px",
          borderStyle: "solid",
          borderColor: "black",
          padding: "10px",
          backgroundColor: "black",
        }}
      >
        {answers.map((answer, index) => {
          return (
            <div
              key={answer.answer}
              style={{
                borderWidth: "2px",
                borderRadius: "10px",
                padding: "10px",
                borderStyle: "solid",
                borderColor: "yellow",
                backgroundColor: "blue",
                color: "white",
                textTransform: "uppercase",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontWeight: "bold",
                }}
              >
                <Title2>{answer.answer}</Title2>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <Title2>{answer.points}</Title2>
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
      {!gameMode && (
        <Button
          onClick={() => {
            setAddAnswerDialog(true);
          }}
        >
          Add answer
        </Button>
      )}
      {addAnswerDialog && (
        <AddAnswerDialog
          onAnswerAdded={(newAnswer) => setAnswers([...answers, newAnswer])}
          showing={addAnswerDialog}
          onClose={() => setAddAnswerDialog(false)}
        />
      )}
    </div>
  );
};
