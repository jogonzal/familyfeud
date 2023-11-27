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

export interface IImportThing {
  answers: IAnswer[];
  question: string;
}

export const ImportAnswersDialog = ({
  onDataAdded: onAnswersAdded,
  showing,
  onClose,
  answers,
}: {
  onDataAdded: (obj: IImportThing) => void;
  showing: boolean;
  onClose: () => void;
  answers: IImportThing;
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
