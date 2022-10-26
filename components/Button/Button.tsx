import styles from "./Button.module.css";
import { ButtonProps } from "./Button.props";
import ArrowIcon from "./Vector.svg";
import cn from "classnames";

export const Button = ({
  appearance,
  children,
  arrow = "none",
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, {
        [styles.primary]: appearance === "primary",
        [styles.ghost]: appearance === "ghost",
      })}
      {...props}
    >
      {children}
      {arrow !== "none" && (
        <span
          className={cn(styles.arrow, {
            [styles.down]: arrow === "down",
            [styles.up]: arrow === "up",
          })}
        >
          <ArrowIcon />
        </span>
      )}
    </button>
  );
};
