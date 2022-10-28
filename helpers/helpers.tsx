import { FirstLevelMenuItem } from "../types/Menu.type";
import CoursesIcon from "./icons/courses.svg";
import { TopLevelCategory } from "../types/Page.type";
import ServicesIcon from "./icons/services.svg";
import BooksIcon from "./icons/books.svg";
import ProductsIcon from "./icons/products.svg";

export const firstLevelMenu: FirstLevelMenuItem[] = [
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

export const priceRu = (price: number) =>
  price.toLocaleString("ru-RU") + "\xa0₽";

export const declOfNumber = (
  count: number,
  titles: [one: string, two: string, five: string]
) => {
  const value = Math.abs(count) % 100;
  const num = count % 10;
  if (value > 10 && value < 20) return titles[2];
  if (num > 1 && num < 5) return titles[1];
  if (num == 1) return titles[0];
  return titles[2];
};
