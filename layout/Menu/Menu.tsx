import styles from "./Menu.module.css";
import cn from "classnames";
import { useContext, KeyboardEvent } from "react";
import { AppContext } from "../../context/app.context";
import { FirstLevelMenuItem, PageItem } from "../../types/Menu.type";
import Link from "next/link";
import { useRouter } from "next/router";
import { firstLevelMenu } from "../../helpers/helpers";
import { motion } from "framer-motion";

export const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);
  const router = useRouter();

  const variants = {
    visible: {
      marginBottom: 20,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    hidden: {
      marginBottom: 0,
    },
  };

  const variantsChildren = {
    visible: {
      opacity: 1,
      height: "initial",
      marginBottom: 10,
    },
    hidden: {
      opacity: 0,
      height: 0,
      marginBottom: 0,
    },
  };

  const openSecondLevelKey = (e: KeyboardEvent, category: string) => {
    if (e.code === "Space" || e.code === "Enter") {
      e.preventDefault();
      openSecondLeve(category);
    }
  };

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
                tabIndex={0}
                onKeyDown={(e) =>
                  openSecondLevelKey(e, menuItem._id.secondCategory)
                }
                className={styles.secondLevel}
                onClick={() => openSecondLeve(menuItem._id.secondCategory)}
              >
                {menuItem._id.secondCategory}
              </div>

              <motion.div
                layout
                variants={variants}
                initial={menuItem.isOpen ? "visible" : "hidden"}
                animate={menuItem.isOpen ? "visible" : "hidden"}
                className={cn(styles.secondLevelBlock)}
              >
                {buildThirdLevel(
                  menuItem.pages,
                  firstLevelMenuItem.route,
                  menuItem.isOpen ?? false
                )}
              </motion.div>
            </div>
          );
        })}
      </div>
    );
  };
  const buildThirdLevel = (
    pages: PageItem[],
    route: string,
    isOpen: boolean
  ) => {
    return pages.map((menuItem) => {
      return (
        <motion.div key={menuItem._id} variants={variantsChildren}>
          <Link
            tabIndex={isOpen ? 0 : -1}
            href={`/${route}/${menuItem.alias}`}
            className={cn(styles.thirdLevel, {
              [styles.thirdLevelActive]:
                `/${route}/${menuItem.alias}` === router.asPath,
            })}
          >
            {menuItem.category}
          </Link>
        </motion.div>
      );
    });
  };

  return <div className={styles.menu}>{buildFirstLevel()}</div>;
};
