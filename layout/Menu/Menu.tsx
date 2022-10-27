import styles from "./Menu.module.css";
import cn from "classnames";
import { useContext } from "react";
import { AppContext } from "../../context/app.context";

export const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);

  return (
    <div>
      <ul>
        {menu.map((menuItem) => {
          return (
            <li key={menuItem._id.secondCategory}>
              {menuItem._id.secondCategory}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
