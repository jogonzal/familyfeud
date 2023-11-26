import { useState } from "react";
import { IAnswer } from "./GameBoard";
import {
  Button,
  Caption1,
  Dialog,
  DialogSurface,
  Field,
  Textarea,
  Title1,
} from "@fluentui/react-components";

export const AddAnswerDialog = ({
  onAnswerAdded,
  showing,
  onClose,
}: {
  onAnswerAdded: (newAnswer: IAnswer) => void;
  showing: boolean;
  onClose: () => void;
}) => {
  const [answer, setAnswer] = useState("");
  const [value, setValue] = useState("");

  const hasError = answer === "" || Number.isNaN(parseInt(value));

  return (
    <Dialog open={showing} onOpenChange={(ev, val) => onClose()}>
      <DialogSurface>
        <div style={{ display: "fiex", flexDirection: "column", gap: "10px" }}>
          <Title1>Add answer</Title1>
          <Field label="Answer">
            <Textarea
              value={answer}
              onChange={(ev, val) => setAnswer(val.value)}
            />
          </Field>

          <Field label="Points">
            <Textarea
              value={value}
              onChange={(ev, val) => setValue(val.value)}
            />
          </Field>

          {hasError && (
            <div>
              <Caption1 color="red">
                ERROR! Please enter a valid answer and points value!
              </Caption1>
            </div>
          )}

          <div>
            <Button
              onClick={() => {
                if (hasError) return;

                onAnswerAdded({
                  answer: answer,
                  points: parseInt(value),
                });
              }}
            >
              Add
            </Button>
          </div>
        </div>
      </DialogSurface>
    </Dialog>
  );
};
