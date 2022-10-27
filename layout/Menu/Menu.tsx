import styles from "./Menu.module.css";
import cn from "classnames";
import { useContext } from "react";
import { AppContext } from "../../context/app.context";
import { FirstLevelMenuItem, PageItem } from "../../types/Menu.type";
import CoursesIcon from "./icons/courses.svg";
import ProductsIcon from "./icons/products.svg";
import BooksIcon from "./icons/books.svg";
import ServicesIcon from "./icons/services.svg";
import { TopLevelCategory } from "../../types/Page.type";
import Link from "next/link";

const FirstLevelMenu: FirstLevelMenuItem[] = [
  {
    route: "courses",
    name: "Курсы",
    icon: <CoursesIcon />,
    id: TopLevelCategory.Courses,
  },
  {
    route: "services",
    name: "Сервисы",
    icon: <ServicesIcon />,
    id: TopLevelCategory.Services,
  },
  {
    route: "books",
    name: "Книги",
    icon: <BooksIcon />,
    id: TopLevelCategory.Books,
  },
  {
    route: "products",
    name: "Продукты",
    icon: <ProductsIcon />,
    id: TopLevelCategory.Products,
  },
];

export const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);

  const buildFirstLevel = () => {
    return (
      <>
        {FirstLevelMenu.map((menuItem) => {
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
          return (
            <div key={menuItem._id.secondCategory}>
              <div className={styles.secondLevel}>
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
            [styles.thirdLevelActive]: false,
          })}
        >
          {menuItem.category}
        </Link>
      );
    });
  };

  return <div className={styles.menu}>{buildFirstLevel()}</div>;
};
