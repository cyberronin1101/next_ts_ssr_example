import { TagProps } from "./Tag.props";
import styles from "./Tag.module.css";
import cn from "classnames";
import Link from "next/link";

export const Tag = ({
  size = "s",
  children,
  color = "ghost",
  className,
  href,
  ...props
}: TagProps): JSX.Element => {
  return (
    <div
      className={cn(styles.tag, className, {
        [styles.s]: size === "s",
        [styles.m]: size === "m",
        [styles.red]: color === "red",
        [styles.gray]: color === "gray",
        [styles.ghost]: color === "ghost",
        [styles.primary]: color === "primary",
        [styles.green]: color === "green",
      })}
      {...props}
    >
      {href ? <Link href={href}>{children}</Link> : children}
    </div>
  );
};
