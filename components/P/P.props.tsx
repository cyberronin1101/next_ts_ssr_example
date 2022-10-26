import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export type PProps = {
  size?: "s" | "m" | "l";
  children: ReactNode;
} & DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>;
