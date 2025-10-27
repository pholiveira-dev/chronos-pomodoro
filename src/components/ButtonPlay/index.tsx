import { CirclePlay } from "lucide-react";
import styles from "./styles.module.css";

export function ButtonPlay() {
  return (
    <button className={styles.buttonForm}>
      <CirclePlay />
    </button>
  );
}
