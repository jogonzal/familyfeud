"use client";
import { FluentProvider, teamsLightTheme } from "@fluentui/react-components";

export const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  return <FluentProvider theme={teamsLightTheme}>{children}</FluentProvider>;
};
