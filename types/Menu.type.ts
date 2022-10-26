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
  pages: PageItem[];
};
