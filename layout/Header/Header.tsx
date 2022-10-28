import { HeaderProps } from "./Header.props";
import cn from "classnames";
import Logo from "../Layout/logo.svg";
import { ButtonIcon } from "../../components";
import styles from "./Header.module.css";
import { motion } from "framer-motion";
import { Sidebar } from "../Sidebar/Sidebar";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsOpen(false);
  }, [router]);

  const variants = {
    opened: {
      opacity: 1,
      x: 0,
      transition: {
        stiffness: 20,
      },
    },
    closed: {
      opacity: 0,
      x: "100%",
    },
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={className}>
      <header className={cn(styles.header)} {...props}>
        <Logo />
        <ButtonIcon icon={"menu"} appearance={"white"} onClick={toggleMenu} />
        <motion.div
          className={styles.mobileMenu}
          variants={variants}
          initial={"closed"}
          animate={isOpen ? "opened" : "closed"}
        >
          <Sidebar />
          <ButtonIcon
            className={styles.close}
            icon={"close"}
            appearance={"white"}
            onClick={toggleMenu}
          />
        </motion.div>
      </header>
    </div>
  );
};
