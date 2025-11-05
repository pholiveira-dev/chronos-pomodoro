import styles from "./styles.module.css";

export function Footer() {
  return (
    <footer className={styles.container}>
      <a href="" className={styles.paragraph}>
        Entenda a técnica pomodoro 🍅
      </a>
      <a href="" className={styles.paragraph}>
        Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com 💚
      </a>
    </footer>
  );
}
