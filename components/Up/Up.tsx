import styles from "./Up.module.css";
import { useScrollY } from "../../hooks/useScrollY";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";

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
    <motion.div
      className={styles.up}
      animate={controls}
      initial={{ opacity: 0 }}
    >
      <ButtonIcon icon={"up"} appearance={"primary"} onClick={scrollToTop} />
    </motion.div>
  );
};
