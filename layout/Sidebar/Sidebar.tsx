import { SidebarProps } from "./Sidebar.props";
import { Menu } from "../Menu/Menu";
import LogoSvg from "../Layout/logo.svg";
import cn from "classnames";
import styles from "./Sidebar.module.css";
import Link from "next/link";

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  return (
    <div className={cn(className, styles.sidebar)} {...props}>
      <Link href={"/"}>
        <LogoSvg className={styles.logo} />
      </Link>
      <div>поиск</div>
      <Menu />
    </div>
  );
};
