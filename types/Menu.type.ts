import { TopLevelCategory } from "./Page.type";

export type PageItem = {
  alias: string;
  title: string;
  _id: string;
  category: string;
};

export type MenuItem = {
  _id: {
    secondCategory: string;
  };
  isOpen?: boolean;
  pages: PageItem[];
};

export type FirstLevelMenuItem = {
  route: string;
  name: string;
  icon: JSX.Element;
  id: TopLevelCategory;
};
