import { useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
}

export const ClientWrapper: React.FC<Props> = ({ children }) => {
  const [render, setRender] = useState(false);
  useEffect(() => {
    setRender(true);
  }, []);

  return <>{render && children}</>;
};
