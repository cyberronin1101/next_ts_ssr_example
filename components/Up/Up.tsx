import styles from "./Up.module.css";
import UpIcon from "./up.svg";
import { useScrollY } from "../../hooks/useScrollY";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export const Up = (): JSX.Element => {
  const controls = useAnimation();
  const scrollY = useScrollY();

  useEffect(() => {
    controls.start({
      opacity: scrollY / document.body.scrollHeight,
    });
  }, [scrollY, controls]);

  const scrollToTop = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  return (
    <motion.button
      className={styles.up}
      onClick={scrollToTop}
      animate={controls}
      initial={{ opacity: 0 }}
    >
      <UpIcon />
    </motion.button>
  );
};
