import { AdvantagesProps } from "./Advantages.props";
import styles from "./Advantages.module.css";
import CheckIcon from "./check.svg";

export const Advantages = ({ advantages }: AdvantagesProps): JSX.Element => {
  return (
    <>
      {advantages.map((a) => {
        return (
          <div key={a._id} className={styles.advantage}>
            <CheckIcon />
            <div className={styles.title}>{a.title}</div>
            <hr className={styles.hr} />
            <div className={styles.desc}>{a.description}</div>
          </div>
        );
      })}
    </>
  );
};
