import { SidebarProps } from "./Sidebar.props";
import { Menu } from "../Menu/Menu";
import LogoSvg from "../Layout/logo.svg";
import cn from "classnames";
import styles from "./Sidebar.module.css";

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  return (
    <div className={cn(className, styles.sidebar)} {...props}>
      <LogoSvg className={styles.logo} />
      <div>поиск</div>
      <Menu />
    </div>
  );
};
