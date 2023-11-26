"use client";
import { FluentProvider, teamsLightTheme } from "@fluentui/react-components";
import { ClientWrapper } from "./ClientWrapper";

export const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClientWrapper>
      <FluentProvider theme={teamsLightTheme}>{children}</FluentProvider>
    </ClientWrapper>
  );
};
