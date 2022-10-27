import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export type CardProps = {
  children: ReactNode;
  color?: "white" | "blue";
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
