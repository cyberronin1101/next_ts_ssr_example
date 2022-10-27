import styles from "./Menu.module.css";
import cn from "classnames";
import { useContext } from "react";
import { AppContext } from "../../context/app.context";
import { FirstLevelMenuItem, PageItem } from "../../types/Menu.type";
import Link from "next/link";
import { useRouter } from "next/router";
import { firstLevelMenu } from "../../helpers/helpers";

export const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);
  const router = useRouter();

  const openSecondLeve = (secondCategory: string) => {
    setMenu &&
      setMenu(
        menu.map((menuItem) => {
          if (menuItem._id.secondCategory === secondCategory) {
            menuItem.isOpen = !menuItem.isOpen;
          }
          return menuItem;
        })
      );
  };

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map((menuItem) => {
          const isActive = menuItem.id === firstCategory;

          return (
            <div key={menuItem.route}>
              <Link href={"/" + menuItem.route}>
                <div
                  className={cn(styles.firstLevel, {
                    [styles.firstLevelActive]: isActive,
                  })}
                >
                  {menuItem.icon}
                  <span>{menuItem.name}</span>
                </div>
              </Link>
              {isActive && buildSecondLevel(menuItem)}
            </div>
          );
        })}
      </>
    );
  };

  const buildSecondLevel = (firstLevelMenuItem: FirstLevelMenuItem) => {
    return (
      <div className={styles.secondBlock}>
        {menu.map((menuItem) => {
          if (
            menuItem.pages
              .map((page) => page.alias)
              .includes(router.asPath.split("/")[2])
          ) {
            menuItem.isOpen = true;
          }

          return (
            <div key={menuItem._id.secondCategory}>
              <div
                className={styles.secondLevel}
                onClick={() => openSecondLeve(menuItem._id.secondCategory)}
              >
                {menuItem._id.secondCategory}
              </div>
              <div
                className={cn(styles.secondLevelBlock, {
                  [styles.secondLevelBlockOpened]: menuItem.isOpen,
                })}
              >
                {buildThirdLevel(menuItem.pages, firstLevelMenuItem.route)}
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return pages.map((menuItem) => {
      return (
        <Link
          key={menuItem._id}
          href={`/${route}/${menuItem.alias}`}
          className={cn(styles.thirdLevel, {
            [styles.thirdLevelActive]:
              `/${route}/${menuItem.alias}` === router.asPath,
          })}
        >
          {menuItem.category}
        </Link>
      );
    });
  };

  return <div className={styles.menu}>{buildFirstLevel()}</div>;
};
