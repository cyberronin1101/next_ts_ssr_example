import { LayoutProps } from "./Layout.props";
import { Header } from "../Header/Header";
import { Sidebar } from "../Sidebar/Sidebar";
import { Footer } from "../Footer/Footer";
import { FunctionComponent } from "react";
import styles from "./Layout.module.css";
import { AppContextProvider, AppContextType } from "../../context/app.context";
import { Up } from "../../components";

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <div className={styles.body}>{children}</div>
      <Footer className={styles.footer} />
      <Up />
    </div>
  );
};

export const withLayout = <T extends JSX.IntrinsicAttributes & AppContextType>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
        <Layout>
          <Component {...props} />
        </Layout>
      </AppContextProvider>
    );
  };
};
