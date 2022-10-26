import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export type ButtonProps = {
  children: ReactNode;
  appearance: "primary" | "ghost";
  arrow?: "up" | "down" | "right" | "none";
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
