import { ReactNode } from "react";

export type HtagProps = {
  tag: "h1" | "h2" | "h3";
  children: ReactNode;
};
