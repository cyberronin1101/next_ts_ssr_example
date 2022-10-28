import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

import up from "./up.svg";
import menu from "./menu.svg";
import close from "./close.svg";

export const Icons = {
  up,
  close,
  menu,
};

export type IconName = keyof typeof Icons;

export type ButtonIconProps = {
  icon: IconName;
  appearance: "primary" | "white";
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
