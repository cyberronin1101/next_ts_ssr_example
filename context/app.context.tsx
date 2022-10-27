import { createContext, PropsWithChildren, ReactNode, useState } from "react";
import { MenuItem } from "../types/Menu.type";
import { TopLevelCategory } from "../types/Page.type";

export type AppContextType = {
  menu: MenuItem[];
  firstCategory: TopLevelCategory;
  setMenu?: (newMenu: AppContextType["menu"]) => void;
};

export const AppContext = createContext<AppContextType>({
  menu: [],
  firstCategory: TopLevelCategory.Courses,
});

export const AppContextProvider = ({
  menu,
  firstCategory,
  children,
}: PropsWithChildren<AppContextType>) => {
  const [menuState, setMenuState] = useState<MenuItem[]>(menu);
  const setMenu = (newMenu: MenuItem[]) => {
    setMenuState(newMenu);
  };

  return (
    <AppContext.Provider value={{ menu: menuState, firstCategory, setMenu }}>
      {children}
    </AppContext.Provider>
  );
};
