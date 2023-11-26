import { useState } from "react";
import { IAnswer } from "./GameBoard";
import {
  Button,
  Dialog,
  DialogSurface,
  Field,
  Textarea,
  Title1,
} from "@fluentui/react-components";

export const ImportAnswersDialog = ({
  onAnswersAdded,
  showing,
  onClose,
  answers,
}: {
  onAnswersAdded: (newAnswers: IAnswer[]) => void;
  showing: boolean;
  onClose: () => void;
  answers: IAnswer[];
}) => {
  const [value, setValue] = useState(JSON.stringify(answers, null, "\t"));

  return (
    <Dialog open={showing} onOpenChange={(ev, val) => onClose()}>
      <DialogSurface>
        <div style={{ display: "fiex", flexDirection: "column", gap: "10px" }}>
          <Title1>Import answers</Title1>
          <Field label="Answers">
            <Textarea
              value={value}
              onChange={(ev, val) => setValue(val.value)}
              size="large"
              style={{ height: "320px" }}
            />
          </Field>

          <div>
            <Button
              onClick={() => {
                onAnswersAdded(JSON.parse(value));
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
