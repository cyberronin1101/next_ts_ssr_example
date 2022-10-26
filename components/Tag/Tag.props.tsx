import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export type TagProps = {
  size?: "s" | "m";
  children: ReactNode;
  color?: "ghost" | "red" | "gray" | "green" | "primary";
  href?: string;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
