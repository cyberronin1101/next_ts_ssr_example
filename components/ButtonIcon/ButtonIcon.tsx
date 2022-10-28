import styles from "./ButtonIcon.module.css";
import { ButtonIconProps, Icons } from "./ButtonIcon.props";
import cn from "classnames";

export const ButtonIcon = ({
  appearance,
  className,
  icon,
  ...props
}: ButtonIconProps): JSX.Element => {
  const IconCamp = Icons[icon];

  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearance === "primary",
        [styles.white]: appearance === "white",
      })}
      {...props}
    >
      <IconCamp />
    </button>
  );
};
